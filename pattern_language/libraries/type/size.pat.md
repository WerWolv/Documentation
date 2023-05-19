# size
Types used to pretty print size values


## Types

### `type::Size`

A generic size type which displays its value in Bytes (or kiB, MiB, GiB, TiB, PiB, EiB if larger)
- `<T>`: Underlying type

```rust
using Size<T> = T [[format]];
```
### `type::Size128`

A 128 bit size type

```rust
using Size128 = type::Size;
```
### `type::Size16`

A 16 bit size type

```rust
using Size16 = type::Size;
```
### `type::Size32`

A 32 bit size type

```rust
using Size32 = type::Size;
```
### `type::Size64`

A 64 bit size type

```rust
using Size64 = type::Size;
```
### `type::Size8`

A 8 bit size type

```rust
using Size8 = type::Size;
```
