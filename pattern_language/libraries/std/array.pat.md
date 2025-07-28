# array
The array library contains a helper type to make it easier to create multi-dimensional arrays
and pass arrays to functions as parameters.

## Multi-dimensional arrays

The following example shows how to use multi-dimensional arrays with structs.

```rust
import std.array;

struct File {
u8 width, height;
std::Array<std::Array<u8, parent.width>, height> cells;
};

File file @ 0x00;
```


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
