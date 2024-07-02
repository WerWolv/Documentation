# byte
Types to display single bytes using various different representations


## Types

### `std::core::BitfieldOrder`


```rust
enum BitfieldOrder : u8 {
    LeastToMostSignificant,
    LeftToRight,
    MostToLeastSignificant,
    RightToLeft
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
union Reinterpreter<From, To> { ... };
```
### `std::mem::Section`

A Handle for a custom Section

```rust
using Section = u128;
```
### `type::Bits`

Type visualizing the value of each individual bit

```rust
bitfield Bits { ... } [[format, bitfield_order]];
```
### `type::Byte`

Type representing a single Byte. Decodes the byte as it's hexadeicmal value, individual bits and nibbles

```rust
union Byte { ... } [[format, single_color]];
```
### `type::Nibbles`

Type visualizing the value of the two nibbles

```rust
bitfield Nibbles { ... } [[format]];
```
