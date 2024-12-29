# Functions

Functions are reusable pieces of code that can do calculations. Pretty much like functions in any other programming language.

Parameter types need to be specified explicitly, return type is automatically deduced.

```rust
fn min(s32 a, s32 b) {
    if (a > b)
        return b;
    else
        return a;
};

std::print(min(100, 200)); // 100
```

### Global Scope

The global scope for the most part, works the same as a function. All statements in the global scope will get executed when the program is executed. The only difference is that new types can be defined in the global scope.

### Parameter packs

To allow passing an unlimited number of parameters to functions, parameter packs can be used.

```rust
fn print_sequence(auto first, auto ... rest) {
    std::print("{}", first);

    if (std::sizeof_pack(rest) > 0)
        print_sequence(rest);
};

print_sequence(1, 2, 3, 4, 5, 6);
```

Parameter packs can exclusively be used as arguments to other functions. Using them automatically expands them acting as if the contained values get passed to the other function individually.

The above function will print out all passed values in sequence by printing the first parameter and then removing it by not passing it on to the function during the next run.

### Default parameters

Default parameters can be used to set a default value for parameters, if they weren't provided when the function got called.

```rust
fn print_numbers(u32 a, u32 b, u32 c = 3, u32 d = 4) {
    std::print("{} {} {} {}", a, b, c, d);
};

print_numbers(1, 2);            // Prints 1 2 3 4
print_numbers(8, 9, 10, 11);    // Prints 8 9 10 11
```

### Reference parameters

Reference parameters can be used to avoid unnecessarily copying lots of data around and are helpful when needing to pass custom types that do not have a fixed layout to a function. Instead of copying the given parameter value onto the function’s heap, a reference to the existing pattern is instead used.

```rust
struct MyString {
    char value[while(std::mem::read_unsigned($, 1) != 0xFF)];
};

fn print_my_string(ref MyString myString) {
    std::print(myString.value);
};
```

### Variables

Variables can be declared in a similar fashion as outside of functions but they will be put onto the function’s stack instead of being highlighted.

```rust
fn get_value() {
    u32 value;
    u8 x = 1234;

    value = x * 2;

    return value;
};
```

Custom types may also be used inside of functions

```rust
union FloatConverter {
    u32 integer;
    float floatingPoint;
};

fn interpret_as_float(u32 integer) {
    FloatConverter converter;

    converter.integer = integer;
    return converter.floatingPoint;
};
```

It is also possible to declare constants using the `const` keyword

```rust
fn get_value() {
    const u32 value = 1234;
    return value;
};

std::print("{}", get_value()); // 1234
```

### Control statements

#### If-Else-Statements

If, Else-If and Else statements work the same as in most other C-like languages. When the condition inside a `if` head evaluates to true, the code in its body is executed. If it evaluates to false, the optional `else` block is executed.

Curly braces are optional and only required if more than one statement is present in the body.

```rust
if (x > 5) {
    // Execute when x is greater than 5
} else if (x == 2) {
    // Execute only when x is equals to 2
} else {
    // Execute otherwise
}
```

#### While-Loops

While loops work similarly to if statements. As long as the condition in the head evaluates to true, the body will continuously be executed.

```rust
while (check()) {
    // Keeps on executing as long as the check() function returns true
}
```

#### For-Loops

For loops are another kind of loop similar to the while loop. Its head consists of three blocks (ex. `i < 10`) that are separated by commas.

The first block is for declaring an iterating variable. This variable can only be used inside of the for loop. The value that this variable is declared as is the iteration that it starts at. In the given example, the first block is `u8 i = 0`.

The second block is a condition used to determine when the loop should run again, and when it should stop. Every time the loop repeats, this condition is checked. In the given example, the second block is `i < 10`. At the start of each loop, the current value of `i` is checked to see if it is still less than `10`. When `i` becomes `10` or greater, the loop will stop executing. As long as the statement in this block resolves to `true`, the loop will continue.

The third block only executes after the body of the loop. It assigns the iterating variable a new number, one that is incremented by a specified amount - in short, it increments the iterating variable. In the example, the increment used is `1`, but it doesn't have to be `1`. If it's necessary to increment by `2`, `3`, etc., just use that number instead of `1`.

```rust
// Declare a variable called i available only inside the for
for (u8 i = 0, i < 10, i = i + 1) {
    // Keeps on executing as long as i is less than 10

    // At the end, increment i by 1
}
```

The assignment operator `+=` can also be used for incrementing a for loop:

```rust
for (u8 i = 0, i < 10, i += 1) {
    // Body of loop
}
```

### Loop control flow statements

Inside of loops, the `break` and `continue` keyword may be used to control the execution flow inside the loop.

When a `break` statement is reached, the loop is terminated immediately and code flow continues after the loop. When a `continue` statement is reached, the current iteration is terminated immediately and code flow continues at the start of the loop again, checking the condition again.

### Return statements

In order to return a value from a function, the `return` keyword is used.

The return type of the function will automatically be determined by the value returned.

```rust
fn get_value() {
    return 1234;
};

std::print("{}", get_value()); // 1234
```

### Pattern views

When using the placement syntax inside of functions or function statements in the global scope (such as `if` , `for`, or `while` statements), a view of that data is created instead.

A view acts very similar to a placed pattern - you can access and pass that value around as if it was a placed variable. However, it will not generate an output pattern like a regular placement would.

```rust
fn read_u32(u32 address) {
    u32 value @ address;

    return value;
};

std::print("{}", read_u32(0x1234)); // Prints the value at address 0x1234 formatted as a u32
```

### User-defined Literals

User-defined Literals are ultimately syntactic sugar for function calls which in some cases is easier to read than regular function calls. To create one, simply define a function whose name starts with an underscore and takes a single character.

```rust
fn _literal(u32 value) {
    return value * 2;
};

u32 two_times = 123_literal; // two_times = 246
```

It's also possible to define user-defined literals that take in multiple parameters. In this case, the value the literal is applied to is passed in as the first parameter and the remaining ones are passed as the second and following parameters.

```rust
fn _literal(u32 value, u32 multiplier) {
    return value * multiplier;
};

u32 three_times = 123_literal(3); // three_times = 369
```

Any built-in type can be used as the first parameter. This allows user-defined literals to be used with integers, floats, character literals and strings.
