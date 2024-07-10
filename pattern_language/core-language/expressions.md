# Expressions

### Operators

| Operator      | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| `a + b`       | Addition                                                                      |
| `a - b`       | Subtraction                                                                   |
| `a * b`       | Multiplication                                                                |
| `a / b`       | Division                                                                      |
| `a % b`       | Modulus                                                                       |
| `a >> b`      | Bitshift right                                                                |
| `a << b`      | Bitshift left                                                                 |
| `~a`          | Bitwise NOT                                                                   |
| `a & b`       | Bitwise AND                                                                   |
| `a \| b`      | Bitwise OR                                                                    |
| `a ^ b`       | Bitwise XOR                                                                   |
| `a == b`      | Equality comparison                                                           |
| `a != b`      | Inequality comparison                                                         |
| `a > b`       | Greater-than comparison                                                       |
| `a < b`       | Less-than comparison                                                          |
| `a >= b`      | Greater-than-or-equals comparison                                             |
| `a <= b`      | Less-than-or-equals comparison                                                |
| `!a`          | Boolean NOT                                                                   |
| `a && b`      | Boolean AND                                                                   |
| `a \|\| b`    | Boolean OR                                                                    |
| `a ^^ b`      | Boolean XOR                                                                   |
| `a ? b : c`   | Ternary                                                                       |
| `(a)`         | Parenthesis                                                                   |
| `function(a)` | [Function](functions.md) call |

`a`, `b` and `c` can be any numeric literal or another expression.

### Type Operators

Type Operators are operators that work on types. They can only be used on a variable, not on a mathematical expression.

| Operator       | Description         |
| -------------- | ------------------- |
| `addressof(a)` | Address of variable |
| `sizeof(a)`    | Size of variable    |

`a` can be a variable, either by naming it directly or finding it through member access

**PROVIDER OPERATORS**

`a` can also be replaced with the `$` operator to query information about the loaded data

| Operator       | Description                     |
| -------------- | ------------------------------- |
| `addressof($)` | Base address of the loaded data |
| `sizeof($)`    | Size of the loaded data         |

### String Operators

String operators are any operators acting on strings directly.

| Operator       | Description                    |
| -------------- | ------------------------------ |
| `a + b`        | String concatenation           |
| `str * number` | String repetition              |
| `a == b`       | Lexical equality               |
| `a != b`       | Lexical inequality             |
| `a > b`        | Lexical greater-than           |
| `a >= b`       | Lexical greater-than-or-equals |
| `a < b`        | Lexical less-than              |
| `a <= b`       | Lexical less than-or-equals    |

### Member Access

Member access is the act of accessing members inside a struct, union or bitfield or referencing the index of an array to access its value.

Below the simplest operations are shown, however they may be concatenated and extended indefinitely as suitable.

| Operation       | Access type                                                                           |
| --------------- | ------------------------------------------------------------------------------------- |
| `structVar.var` | Accessing a variable inside a struct, union or bitfield                               |
| `arrayVar[x]`   | Accessing a variable inside an array                                                  |
| `parent.var`    | Accessing a variable inside the parent struct or union of the current struct or union |
| `this`          | Referring to the current pattern. Can only be used inside of a struct or union        |

### `$` Dollar Operator

The Dollar Operator is a special operator which expands to the current offset within the current pattern.

```rust
#pragma base_address 0x00

std::print($); // 0
u32 x @ 0x00;
std::print($); // 4
```

It’s also possible to assign a value to the dollar operator to change the current cursor position.

```rust
$ += 0x100;
```

The dollar operator can also be used to access single bytes of the main data.

```rust
std::print($[0]); // Prints the value of the byte at address 0x00
```

### Casting Operator

The cast operator changes the type of an expression into another.

```rust
fn test(float x) {
    return 1 + u32(x);
}

test(3.14159); // 4
```
