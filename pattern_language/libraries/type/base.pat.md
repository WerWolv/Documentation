# base
Types used to change the base of the displayed integer value.
Used like `type::Hex<u32> hexNumber;`, `type::Oct<u16> octalNumber;`


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
### `type::Bin`

Integer type representing a Binary value. Displays its value in binary format.
- `<T>`: Integer type to use

```rust
using Bin<T> = T [[format]];
```
### `type::Dec`

Integer type representing a Decimal value. Displays its value in decimal format.
- `<T>`: Integer type to use

```rust
using Dec<T> = T [[format]];
```
### `type::Hex`

Integer type representing a Hexadecimal value. Displays its value in hexadecimal format.
- `<T>`: Integer type to use

```rust
using Hex<T> = T [[format]];
```
### `type::Oct`

Integer type representing a Octal value. Displays its value in octal format.
- `<T>`: Integer type to use

```rust
using Oct<T> = T [[format]];
```
