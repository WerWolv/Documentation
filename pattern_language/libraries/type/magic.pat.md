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

### `type::escape_bytes`

Escapes all bytes in a string to only contain printable characters. All non-printable bytes will be transformed to sequences in the form form \xFF
- `value`: Byte array to escape
- `return`: Escaped string


```rust
fn escape_bytes(auto value);
```

