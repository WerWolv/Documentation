# core
Core intrinsic functions to interact with the ImHex Hex Editor


## Types

### `hex::core::Selection`

A type representing a selection in the hex editor

```rust
struct Selection { ... };
```


## Functions

### `hex::core::get_selection`

Returns the current selection in the hex editor
- `return`: The current selection


```rust
fn get_selection();
```

### `hex::core::add_virtual_file`

Add a file to the Virtual Filesystem
- `path`: The name of the file
- `pattern`: The pattern associated with the file


```rust
fn add_virtual_file(str path, auto pattern);
```

