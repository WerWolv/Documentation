# path
Types dealing with various kinds of resource paths


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

The Endianess of a value

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
### `type::DOSPath`

A type representing a DOS path using a '\\' backslash as delimeter

```rust
using DOSPath = type::Path;
```
### `type::Path`

A generic type representing a path with an arbitrary delimeter
- `<Delimeter>`: The delimeter sequence used to separate two path segments

```rust
struct Path<auto Delimeter> { ... } [[format]];
```
### `type::PathSegment`

Type representing a single path segment. Use the `Path` type instead of using this on its own
- `<Delimeter>`: The delimeter sequence used to separate two path segments

```rust
struct PathSegment<auto Delimeter> { ... } [[sealed, format]];
```
### `type::UnixPath`

A type representing a Unix path using a '/' forwardslash as delimeter

```rust
using UnixPath = type::Path;
```
