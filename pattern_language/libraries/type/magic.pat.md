# magic
Types used to parse and enforce specific magic numbers


## Types

### `std::string::NullString`

A null-terminated ASCII string.

```rust
using NullString = std::string::NullStringBase;
```
### `std::string::NullString16`

A null-terminated UTF-16 string.

```rust
using NullString16 = std::string::NullStringBase;
```
### `std::string::NullStringBase`

Base type for null-terminated strings. Represents a string with its size determined by the first 0x00 byte found.
- `<DataType>`: The type of the characters.

```rust
struct NullStringBase<> { ... } [[format]];
```
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

