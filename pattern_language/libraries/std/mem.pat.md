# mem


## Types

### `std::mem::AlignTo`

```rust
struct AlignTo<auto Alignment> { ... } [[hidden, sealed]];
```
### `std::mem::Bytes`

```rust
struct Bytes<auto Size> { ... } [[sealed, format]];
```
### `std::mem::Endian`

```rust
enum Endian : u8 {
    Big,
    Little,
    Native
};
```
### `std::mem::MagicSearch`

```rust
struct MagicSearch<auto Magic, T> { ... };
```
### `std::mem::Reinterpreter`

```rust
union Reinterpreter<From, To> { ... };
```
### `std::mem::Section`

```rust
using Section = u128;
```


## Functions

### `std::mem::eof`


```rust
fn eof();
```
### `std::mem::align_to`


```rust
fn align_to(u128 alignment, u128 value);
```
### `std::mem::base_address`


```rust
fn base_address();
```
### `std::mem::size`


```rust
fn size();
```
### `std::mem::find_sequence`


```rust
fn find_sequence(u128 occurrence_index, auto ... bytes);
```
### `std::mem::find_sequence_in_range`


```rust
fn find_sequence_in_range(u128 occurrence_index, u128 offsetFrom, u128 offsetTo, auto ... bytes);
```
### `std::mem::read_unsigned`


```rust
fn read_unsigned(u128 address, u8 size, std::mem::Endian endian);
```
### `std::mem::read_signed`


```rust
fn read_signed(u128 address, u8 size, std::mem::Endian endian);
```
### `std::mem::read_string`


```rust
fn read_string(u128 address, u8 size);
```
### `std::mem::create_section`


```rust
fn create_section(str name);
```
### `std::mem::delete_section`


```rust
fn delete_section(std::mem::Section section);
```
### `std::mem::get_section_size`


```rust
fn get_section_size(std::mem::Section section);
```
### `std::mem::copy_section_to_section`


```rust
fn copy_section_to_section(std::mem::Section from_section, u64 from_address, std::mem::Section to_section, u64 to_address, u64 size);
```
### `std::mem::copy_value_to_section`


```rust
fn copy_value_to_section(auto value, std::mem::Section to_section, u64 to_address);
```
