# core
The core library contains intrinsics and "compiler magic" functions that
get extra help from the runtime to fulfill their purpose.


## Types

### `std::core::BitfieldOrder`

```rust
enum BitfieldOrder :  u8 {
    LeftToRight,
    RightToLeft
};
```


## Functions

### `std::core::has_attribute`


```rust
fn has_attribute( auto pattern,  str attribute);
```
### `std::core::get_attribute_value`


```rust
fn get_attribute_value( auto pattern,  str attribute);
```
### `std::core::set_endian`


```rust
fn set_endian(  std::mem::Endian endian);
```
### `std::core::get_endian`


```rust
fn get_endian();
```
### `std::core::set_bitfield_order`


```rust
fn set_bitfield_order(  std::core::BitfieldOrder order);
```
### `std::core::get_bitfield_order`


```rust
fn get_bitfield_order();
```
### `std::core::array_index`


```rust
fn array_index();
```
### `std::core::member_count`


```rust
fn member_count( auto pattern);
```
### `std::core::has_member`


```rust
fn has_member( auto pattern,  str name);
```
### `std::core::formatted_value`


```rust
fn formatted_value( auto pattern);
```
### `std::core::is_valid_enum`

Checks if the given enum value corresponds has a corresponding constant
- `pattern`: The enum value to check
- `return`: True if pattern has a valid enum representation, false if not


```rust
fn is_valid_enum( auto pattern);
```
