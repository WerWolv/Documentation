---
description: A custom C++ and Rust inspired scripting language for analyzing binary data.
---

# Pattern Language

The Pattern Language is a C++ and Rust inspired DSL that was developed for the\
[ImHex Hex Editor](https://app.gitbook.com/o/xfl3734L2rDBS2sD53Zi/s/xj7sbzGbHH260vbpZOu1/) to easily define and decode binary structures found in files or memory.

# Getting Started

Before diving into the documentation, let's start with a simple example.

We have a file that follows this specification:

| Offset | Type                  | Description          |
| ------ | --------------------- | -------------------- |
| 0x00   | uint                  | Animation count      |
| 0x04   | uint[count]           | Offset of each entry |
| ...    | AnimationEntry[count] | Animation entries    |

We start with a minimal definition and refine it step by step.

First, the basic structure. The file starts at 0x0, and the first 4 bytes are the number of animations in the file (`count`). 

```rust
struct AnimationBank {
    u32 count;
};

AnimationBank animationBank @ 0x0;
```

Now that we know how many animations the file contains, we can define an array to store them.

```rust
struct Animation {
};

struct AnimationBank {
    u32 count;
    Animation animations[count];
};

AnimationBank animationBank @ 0x0;
```

Each Animation struct contains an offset, which defines the position of the AnimationEntry data:

```rust
struct Animation {
    u32 offset;
};

struct AnimationBank {
    u32 count;
    Animation animations[count];
};

AnimationBank animationBank @ 0x0;
```

Each Animation points to a list of AnimationEntries located elsewhere in the file. We want to access these locations through the offset, and then read the AnimationEntry `count` times. This uses the [parent accessor](./core-language/expressions.md#member-access) to get the `count` variable.

```rust
struct AnimationEntry {
};

struct Animation {
    u32 offset;
    AnimationEntry entries[parent.count] @ offset;
};

struct AnimationBank {
    u32 count;
    Animation animations[count];
};

AnimationBank animationBank @ 0x0;
```

With the offsets and entry array in place, we can now define the actual contents of an AnimationEntry:

```rust
struct AnimationEntry {
    u8 index;
    u8 delay;
    u8 flags;
    u8 paletteIndex; 
};

struct Animation {
    u32 offset;
    AnimationEntry entries[parent.count] @ offset;
};

struct AnimationBank {
    u32 count;
    Animation animations[count];
};

AnimationBank animationBank @ 0x0;
```

# Contributing

If you want to contribute towards improving this documentation, the source documents are available at [https://github.com/WerWolv/Documentation](https://github.com/WerWolv/Documentation) under `pattern_language`.

