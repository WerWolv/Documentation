# sys
Basic helper functions


## Functions

### `std::assert`


```rust
fn assert(bool condition, str message);
```
### `std::assert_warn`


```rust
fn assert_warn(bool condition, str message);
```
### `std::env`


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
