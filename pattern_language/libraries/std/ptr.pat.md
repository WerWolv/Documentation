# ptr
The Pointer library contains helper functions to deal with pointer types.
The `relative_to` functions are meant to be used with the `[[pointer_base]]` attribute


## Functions

### `std::ptr::relative_to_pointer`

Use the offset of the current pointer as start address
- `offset`: The pointer's value
- `return`: The new pointer base


```rust
fn relative_to_pointer(u128 offset);
```

### `std::ptr::relative_to_parent`

Use the offset of the pointer's parent as start address
- `offset`: The pointer's value
- `return`: The new pointer base


```rust
fn relative_to_parent(u128 offset);
```

### `std::ptr::relative_to_end`

Use the end of the file as pointer base address and use its value as offset backwards from there
- `offset`: The pointer's value
- `return`: The new pointer base


```rust
fn relative_to_end(u128 offset);
```

