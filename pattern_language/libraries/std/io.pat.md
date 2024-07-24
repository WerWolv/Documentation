# io
The IO library allows formatting strings and outputting text to the console


## Functions

### `std::print`

Formats the given arguments using the format string and prints the result to the console
This function uses the C++20 `std::format` or libfmt's `fmt::format` syntax.
- `fmt`: Format string or any other value that can be converted to a string
- `args`: Values to use in the formatting


```rust
fn print(auto fmt, auto ... args);
```

### `std::format`

Formats the given arguments using the format string and returns the result as a string
This function uses the C++20 `std::format` or libfmt's `fmt::format` syntax.
- `fmt`: Format string or any other value that can be converted to a string
- `args`: Values to use in the formatting
- `return`: The formatted string


```rust
fn format(auto fmt, auto ... args);
```

### `std::error`

Aborts evaluation of the code immediately and prints a error message to the console
- `message`: The message to print


```rust
fn error(str message);
```

### `std::warning`

Prints a warning message to the console
- `message`: The message to print


```rust
fn warning(str message);
```

