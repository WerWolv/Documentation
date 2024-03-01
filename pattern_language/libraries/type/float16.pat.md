# float16
Type representing a 16 bit half precision floating point number


## Types

### `std::math::AccumulateOperation`

Options to use with the `std::math::accumulate` function.

```rust
enum AccumulateOperation : u8 {
    Add,
    Max,
    Min,
    Modulo,
    Multiply
};
```
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
union Reinterpreter<, > { ... };
```
### `std::mem::Section`

A Handle for a custom Section

```rust
using Section = u128;
```
### `type::float16`

Type representing a 16 bit half precision floating point number

```rust
using float16 = u16 [[format]];
```
