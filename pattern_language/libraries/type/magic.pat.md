# magic
Types used to parse and enforce specific magic numbers


## Types

### `type::Magic`

A Magic number. Throws an error if the magic number does not match the expected value
- `<ExpectedValue>`: A string representing the expected value

```rust
struct Magic<auto ExpectedValue> { ... } [[sealed, format]];
```


## Functions

### `type::fm`


```rust
fn fm(auto value);
```

