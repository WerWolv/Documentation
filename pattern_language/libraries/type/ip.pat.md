# ip
Types used to decode IP addresses


## Types

### `std::mem::AlignTo`

Aligns the cursor to the given alignment
- `<alignment>`: The alignment to align to

```rust
struct AlignTo<auto Alignment> { ... } [[hidden, sealed]];
```
### `std::mem::Bytes`

A type representing a sequence of bytes without any specific meaning
- `<Size>`: The size of the sequence

```rust
struct Bytes<auto Size> { ... } [[sealed, format]];
```
### `std::mem::Endian`

The endianness of a value

```rust
enum Endian : u8 {
    Big,
    Little,
    Native
};
```
### `std::mem::MagicSearch`

Searches for a sequence of bytes and places the given type at that address
- `<Magic>`: The magic sequence to search for
- `<T>`: The type to place at the address

```rust
struct MagicSearch<auto Magic, T> { ... };
```
### `std::mem::Reinterpreter`

Reinterprets a value as a different one
- `<From>`: The type to reinterpret from
- `<To>`: The type to reinterpret to

```rust
union Reinterpreter<From, To> { ... };
```
### `std::mem::Section`

A Handle for a custom Section

```rust
using Section = u128;
```
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
struct NullStringBase<> { ... } [[sealed, format, transform]];
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

Base type for sized strings. Represents a string with its size preceding it.
- `<SizeType>`: The type of the size field.
- `<DataType>`: The type of the characters.

```rust
struct SizedStringBase<, > { ... } [[sealed, format, transform]];
```
### `type::IPv4Address`

A 4 byte IPv4 Address as described in RFC 791

```rust
struct IPv4Address { ... } [[sealed, format]];
```
### `type::IPv6Address`

A 16 byte IPv6 Address as described in RFC 8200

```rust
struct IPv6Address { ... } [[sealed, format]];
```
