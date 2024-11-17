# ip
Types used to decode IP addresses


## Types

### `type::IPv4Address`

A 4 byte IPv4 Address as described in RFC 791

```rust
struct IPv4Address { ... } [[sealed, format]];
```
### `type::IPv6Address`

A 16 byte IPv6 Address as described in RFC 8200

```rust
struct IPv6Address { ... } [[sealed, format]];
```
