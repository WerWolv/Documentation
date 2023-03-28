# byte
Types to display single bytes using various different representations


## Types

### `type::Bits`

Type visualizing the value of each individual bit

```rust
bitfield Bits { ... } [[format, right_to_left]];
```
### `type::Byte`

Type representing a single Byte. Decodes the byte as it's hexadeicmal value, individual bits and nibbles

```rust
union Byte { ... } [[format, single_color]];
```
### `type::Nibbles`

Type visualizing the value of the two nibbles

```rust
bitfield Nibbles { ... } [[format]];
```
