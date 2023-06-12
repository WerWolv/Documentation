# array
The array library contains a helper type to make it easier to create multi-dimensional arrays
and pass arrays to functions as parameters.


## Types

### `std::Array`

Simple one dimensional array wrapper
- `<T>`: The array types
- `<Size>`: Size of the array

```rust
struct Array<T, auto Size> { ... };
```
