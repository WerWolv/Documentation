# array
The array library contains a helper type to make it easier to create multi-dimensional arrays
and pass arrays to functions as parameters.


## Types

### `std::Array`

Simple one dimensional array wrapper
- `<T>`: The array types
- `<Size>`: Number of entries in the array

```rust
struct Array<T, auto Size> { ... } [[format]];
```
### `std::ByteSizedArray`

Simple array wrapper for an array with a size in bytes
- `<T>`: The array types
- `<NumBytes>`: Number of bytes the array contains

```rust
struct ByteSizedArray<T, auto NumBytes> { ... } [[format]];
```
### `std::IIndexed`

An interface type for getting the index of the currently processed element in an array. This is a nice wrapper around `std::core::array_index()`

To use it, inherit from it and use the `this.index` field to get the index of the current element

```rust
struct IIndexed { ... };
```
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
