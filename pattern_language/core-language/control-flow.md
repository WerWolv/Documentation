# Control flow

The pattern language offers multiple ways to modify the behaviour of the parser on the go based on the values already parsed, allowing you to parse complex formats with relative ease.

### Conditionals

In the pattern language, not all structs need to be the same size or have the same layout. It’s possible to change what variables are getting declared based on the value of other variables.

```rust
enum Type : u8 {
    A = 0x54,
    B = 0xA0,
    C = 0x0B
};

struct PacketA {
    float x;
};

struct PacketB {
    u8 y;
};

struct PacketC {
    char z[];
};

struct Packet {
    Type type;

    if (type == Type::A) {
        PacketA packet;
    }
    else if (type == Type::B) {
        PacketB packet;
    }
    else if (type == Type::C)
        PacketC packet;
};

Packet packet[3] @ 0xF0;
```

This code looks at the first byte of each `Packet` to determine its type so it can decode the body of the packet accordingly using the correct types defined in `PacketA`, `PacketB` and `PacketC`.

Conditionals like this can be used in Structs, Unions and Bitfields

<figure><img src="../.gitbook/assets/conditionals/data.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/conditionals/hex.png" alt=""><figcaption></figcaption></figure>

### Match statements

Match statements are a more powerful alternative to conditionals. They allow you to more easily match against multiple values and have more forms of comparison logic available.

```rust
enum Type : u8 {
    A = 0x54,
    B = 0xA0,
    C = 0x0B
};

struct PacketA {
    float x;
};

struct PacketB {
    u8 y;
};

struct PacketC {
    char z[];
};

struct Packet {
    Type type;

    match (type) {
        (Type::A): PacketA packet;
        (Type::B): PacketB packet;
        (Type::C): PacketC packet;
    }
};

Packet packet[3] @ 0xF0;
```

But the match statement allows for much more than just a simple switch. It also allows you to match multiple values at once and use more complex comparison logic. Alongside this is the `_` wildcard that matches any value, and thus also creates the default case.

```rust
struct Packet {
  Type type;
  u8 size;

  match (type, size) {
    (Type::A, 0x200): PacketA packet;
    (Type::C, _): PacketC packet;
    (_, _): PacketB packet;
  }
};

Packet packet[3] @ 0xF0;
```

Also the match statement has special comparisons that allow for more batchful comparisons. The _…_ operator allows you to match a range of values, and the `|` operator allows to match between multiple values.

```rust
struct Packet {
  Type type;
  u8 size;

  match (type, size) {
    (Type::A, 0x200): PacketA packet;
    (Type::C, 0x100 | 0x200): PacketC packet;
    (Type::B, 0x100 ... 0x300): PacketB packet;
  }
};

Packet packet[3] @ 0xF0;
```

### Pattern control flow

The most basic form of conditional parsing are array control flow statements, `break` and `continue`. These allow you to stop the parsing of the array or skip elements based on conditions in the currently parsed item instance.

#### Break

When a break is reached, the current array creation process is terminated. This means, the array keeps all entries that have already been parsed, including the one that’s being currently processed, but won’t expand further, even if the requested number of entries hasn’t been reached yet.

```rust
struct Test {
  u32 x;

  if (x == 0x11223344)
    break;
};

// This array requests 1000 entries but stops growing as soon as it hits a u32 with the value 0x11223344
// causing it to have a size less than 1000
Test tests[1000] @ 0x00;
```

`break` can also be used in regular patterns to prematurely stop parsing of the current pattern.

If the pattern where `break` is being used in is nested inside of another pattern, only evaluation of the current pattern is stopped and continues in the parent struct after the definition of the current pattern.

#### Continue

When a continue is reached, the currently evaluated array entry gets evaluated to find next array entry offset but then gets discarded. This can be used to conditionally exclude certain array entries from the list that are either invalid or shouldn’t be displayed in the pattern data list while still scanning the entire range the array would span.

This can for instance be used in combination with [In/Out Variables](in-out-variables.md) to easily filter array items.

```rust
struct Test {
  u32 value;

  if (value == 0x11223344)
    continue;
};

// This array requests 1000 entries but skips all entries where x has the value 0x11223344
// causing it to have a size less than 1000
Test tests[1000] @ 0x00;
```

`continue` can also be used in regular patterns to discard the pattern entirely.

If the pattern where `continue` is being used in is nested inside of another pattern, only the current pattern is discarded and evaluation continues in the parent struct after the definition of the current pattern.

#### The Searcher Pattern

The Searcher Pattern is a useful design pattern for placing a struct pattern at a dynamically determined (searched for) offset. It combines an array spanning the area under search (the haystack), and a wrapper struct which places the wanted pattern upon finding the needle.

```rust
struct Command {
  u32 data;
};

u8 needle = 0xCD;

struct PatternSearcher {
  u32 test = std::mem::read_unsigned($, 1);
  if (test != needle) { $ += 1; continue; }
  Command command @ $;
  $ += sizeof(Command);
};
// Search from 0x0000 to 0xFFFF
PatternSearcher search[while($ < 0xFFFF)] @ 0x00;
// Search the entire file
PatternSearcher search[while(!std::mem::eof())] @ 0x00;
// Search from 0x3FFF to the end of file
PatternSearcher search[while(!std::mem::eof())] @ 0x3FFF;
```

### Return statements

Return statements outside of functions can be used to prematurely terminate execution of the current program.

Evaluation stops at the location the `return` statement was executed. All patterns that have been evaluated up until this point will be finished up and placed into memory before execution halts.

### Try-Catch statements

Try-Catch blocks are used to try placing down patterns that might error and then handling that error.

The following code will try to place all the patterns in the `try` block and if any error occurred while doing so, it will discard the patterns it tried to place, revert the cursor back to where it was at the start of the `try` block and then execute the `catch` block instead.

```rust
struct Test {
    try {
        u32 x;
        SomeStructThatWillError someStruct;
    } catch {
        SomeAlternativeStruct someStruct;
    }
};
```
