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
