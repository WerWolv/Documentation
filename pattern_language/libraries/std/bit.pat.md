# bit
This library contains various helper functions for common bit operations.


## Functions

### `std::bit::popcount`

Calculates the number of 1 bits in a given number
- `x`: The number
- `return`: The number of bits set to 1 in `x`


```rust
fn popcount(u128 x);
```

### `std::bit::has_single_bit`

Checks if only a single bit is set to 1 in a given number
- `x`: The number
- `return`: True if there's a single bit set to 1 in `x`, false otherwise


```rust
fn has_single_bit(u128 x);
```

### `std::bit::bit_ceil`

Rounds the given number up to the next bigger power of two
- `x`: The number
- `return`: Next bigger power of two that can fit `x`


```rust
fn bit_ceil(u128 x);
```

### `std::bit::bit_floor`

Rounds the given number down to the next bigger power of two
- `x`: The number
- `return`: Next smaller power of two


```rust
fn bit_floor(u128 x);
```

