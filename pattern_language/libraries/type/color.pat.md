# color
Types representing RGB or RGBA colors. The decoded color will be displayed in their color field


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
### `type::RGB`

Type representing a generic RGB color with a variable number of bits for each color
- `<R>`: Number of bits used for the red component
- `<G>`: Number of bits used for the green component
- `<B>`: Number of bits used for the blue component

```rust
using RGB<auto R, auto G, auto B> = type::RGBA;
```
### `type::RGB4444`

Type representing a RGBA color with 4 bits for the red component, 4 bits for green, 4 bits for blue and 4 bits for alpha

```rust
using RGB4444 = type::RGBA;
```
### `type::RGB565`

Type representing a RGB color with 5 bits for the red component, 6 bits for green and 5 bits for blue

```rust
using RGB565 = type::RGB;
```
### `type::RGB8`

Type representing a RGB color with 8 bits for the red component, 8 bits for green and 8 bits for blue

```rust
using RGB8 = type::RGB;
```
### `type::RGBA`

Type representing a generic RGBA color with a variable number of bits for each color
- `<R>`: Number of bits used for the red component
- `<G>`: Number of bits used for the green component
- `<B>`: Number of bits used for the blue component
- `<A>`: Number of bits used for the alpha component

```rust
bitfield RGBA<auto R, auto G, auto B, auto A> { ... } [[sealed, format, color]];
```
### `type::RGBA5551`

Type representing a RGBA color with 5 bits for the red component, 5 bits for green, 5 bits for blue and 1 bits for alpha

```rust
using RGBA5551 = type::RGBA;
```
### `type::RGBA8`

Type representing a RGBA color with 8 bits for the red component, 8 bits for green, 8 bits for blue and 8 bits for alpha

```rust
using RGBA8 = type::RGBA;
```
