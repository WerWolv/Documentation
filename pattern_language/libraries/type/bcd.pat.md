# bcd
Type to decode a BCD (Binary Coded Decimal) number


## Types

### `type::BCD`

Decodes a BCD value where one byte represents a single digit
- `<Digits>`: Number of digits

```rust
struct BCD<auto Digits> { ... } [[sealed, format_read]];
```
