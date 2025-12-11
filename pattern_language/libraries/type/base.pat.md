# base
Types used to change the base of the displayed integer value.
Used like `type::Hex<u32> hexNumber;`, `type::Oct<u16> octalNumber;`


## Types

### `type::Bin`

Integer type representing a Binary value. Displays its value in binary format.
- `<T>`: Integer type to use

```rust
using Bin<T> =  [[format]];
```
### `type::Dec`

Integer type representing a Decimal value. Displays its value in decimal format.
- `<T>`: Integer type to use

```rust
using Dec<T> =  [[format]];
```
### `type::Hex`

Integer type representing a Hexadecimal value. Displays its value in hexadecimal format.
- `<T>`: Integer type to use

```rust
using Hex<T> =  [[format]];
```
### `type::Oct`

Integer type representing a Octal value. Displays its value in octal format.
- `<T>`: Integer type to use

```rust
using Oct<T> =  [[format]];
```
