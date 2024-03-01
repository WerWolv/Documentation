# magic
Types used to parse and enforce specific magic numbers


## Types

### `std::string::SizedString`

A ASCII string with a prefixed size.
- `<SizeType>`: The type of the size field.

```rust
using SizedString<SizeType> = std::string::SizedStringBase;
```
### `std::string::SizedString16`

A UTF-16 string with a prefixed size.
- `<SizeType>`: The type of the size field.

```rust
using SizedString16<SizeType> = std::string::SizedStringBase;
```
### `std::string::SizedStringBase`

Base type for sized strings. Represents a string with its size preceeding it.
- `<SizeType>`: The type of the size field.
- `<DataType>`: The type of the characters.

```rust
struct SizedStringBase<, > { ... } [[sealed, format, transform]];
```
### `type::Magic`

A Magic number. Throws an error if the magic number does not match the expected value
- `<ExpectedValue>`: A string representing the expected value

```rust
struct Magic<auto ExpectedValue> { ... } [[sealed, format]];
```


## Functions

### `type::fm`


```rust
fn fm(auto value);
```

