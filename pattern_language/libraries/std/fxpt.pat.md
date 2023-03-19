# fxpt


## Types

### `std::fxpt::fixed`

```rust
using fixed = s128;
```


## Functions

### `std::fxpt::to_float`


```rust
fn to_float(std::fxpt::fixed fxt, u32 precision);
```
### `std::fxpt::to_fixed`


```rust
fn to_fixed(double flt, u32 precision);
```
### `std::fxpt::change_precision`


```rust
fn change_precision(std::fxpt::fixed value, u32 start_precision, u32 end_precision);
```
### `std::fxpt::add`


```rust
fn add(std::fxpt::fixed a, std::fxpt::fixed b, u32 precision);
```
### `std::fxpt::subtract`


```rust
fn subtract(std::fxpt::fixed a, std::fxpt::fixed b, u32 precision);
```
### `std::fxpt::multiply`


```rust
fn multiply(std::fxpt::fixed a, std::fxpt::fixed b, u32 precision);
```
### `std::fxpt::divide`


```rust
fn divide(std::fxpt::fixed a, std::fxpt::fixed b, u32 precision);
```
