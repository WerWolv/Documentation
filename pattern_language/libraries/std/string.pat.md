# string
Library to interact with strings.


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


## Functions

### `std::string::length`

Gets the length of a string.
- `string`: The string to get the length of.
- `return`: The length of the string.


```rust
fn length(str string);
```

### `std::string::at`

Gets the character at a given index.
- `string`: The string to get the character from.
- `index`: The index of the character to get.
- `return`: The character at the given index.


```rust
fn at(str string, u32 index);
```

### `std::string::substr`

Gets a substring of a string.
- `string`: The string to get the substring from.
- `pos`: The position of the first character of the substring.
- `count`: The number of characters to get.
- `return`: The substring.


```rust
fn substr(str string, u32 pos, u32 count);
```

### `std::string::parse_int`

Converts a string to an integer.
- `string`: The string to convert.
- `base`: The base of the number.
- `return`: The integer.


```rust
fn parse_int(str string, u8 base);
```

### `std::string::parse_float`

Converts a string to a float.
- `string`: The string to convert.
- `return`: The float.


```rust
fn parse_float(str string);
```

### `std::string::to_string`

Converts any type to a string.
- `x`: The value to convert.
- `return`: The string.


```rust
fn to_string(auto x);
```

### `std::string::starts_with`

Checks if a string starts with a given substring.
- `string`: The string to check.
- `part`: The substring to check for.
- `return`: True if the string starts with the substring, false otherwise.


```rust
fn starts_with(str string, str part);
```

### `std::string::ends_with`

Checks if a string ends with a given substring.
- `string`: The string to check.
- `part`: The substring to check for.
- `return`: True if the string ends with the substring, false otherwise.


```rust
fn ends_with(str string, str part);
```

### `std::string::contains`

Checks if a string contains a given substring.
- `string`: The string to check.
- `part`: The substring to check for.
- `return`: True if the string contains the substring, false otherwise.


```rust
fn contains(str string, str part);
```

### `std::string::reverse`

Reverses a string.
- `string`: The string to reverse.
- `return`: The reversed string.


```rust
fn reverse(str string);
```

### `std::string::to_upper`

Converts a string to upper case.
- `string`: The string to convert.
- `return`: The converted string.


```rust
fn to_upper(str string);
```

### `std::string::to_lower`

Converts a string to lower case.
- `string`: The string to convert.
- `return`: The converted string.


```rust
fn to_lower(str string);
```

### `std::string::replace`

Replaces all occurrences of a substring with another substring.
- `string`: The string to replace in.
- `pattern`: The substring to replace.
- `replace`: The substring to replace with.
- `return`: The string with the replacements.


```rust
fn replace(str string, str pattern, str replace);
```

