# fmt
Type that allows specifying its format value using a format string.
## Usage

The following code reads a u32 from the data and formats it as an upper case hexadecimal value with
a minimum of 8 digits which is prefixed by 0x.

The format string is the same as passed to `std::format()` and follows the libfmt specification.

```rust
type::Formatted<u32, "0x{:08X}"> hex_formatted_integer @ 0x00;
```


## Types

### `type::Formatted`

Arbitrarily formatted type
- `<T>`: Type to format
- `<FormatString>`: libfmt format string to format the value

```rust
struct Formatted<T, auto FormatString> { ... } [[sealed, format, transform]];
```
