# sys
Basic helper functions


## Functions

### `std::assert`

Asserts that a given value is true. If it's not, abort evaluation and print the given message to the console
- `condition`: The condition that is required to be true
- `message`: The message to print in case the assertion doesn't hold


```rust
fn assert(bool condition, str message);
```

### `std::assert_warn`

Asserts that a given value is true. If it's not, print the given message to the console as a warning
- `condition`: The condition that is required to be true
- `message`: The message to print in case the assertion doesn't hold


```rust
fn assert_warn(bool condition, str message);
```

### `std::env`

Queries the value of a set environment variable given it's name
- `name`: The name of the env variable
- `return`: The value of that variable


```rust
fn env(str name);
```

### `std::sizeof_pack`

Returns the number of parameters in a parameter pack.
- `pack`: The pack to check
- `return`: Number of parameters in `pack`


```rust
fn sizeof_pack(auto ... pack, );
```

### `std::unimplemented`

Throws an error notifying the developer that the current code path is not implemented currently.


```rust
fn unimplemented();
```

