# fxpt
Library for doing arithmetic with fixed point numbers and converting them from/to floating point numbers.


## Types

### `std::fxpt::fixed`

A fixed point value

```rust
using fixed = ;
```


## Functions

### `std::fxpt::to_float`

Converts a fixed point value into a floating point value
- `fxt`: The fixed point value to convert
- `precision`: The bits of precision the new value should have
- `return`: The floating point representation of fxt


```rust
fn to_float(std::fxpt::fixed fxt,  precision);
```

### `std::fxpt::to_fixed`

Converts a floating point value into a fixed point value
- `flt`: The floating point value to convert
- `precision`: The bits of precision the new value should have
- `return`: The fixed point representation of flt


```rust
fn to_fixed( flt,  precision);
```

### `std::fxpt::change_precision`

Changes the number of bits used to represent the decimal part of the given fixed point number
- `value`: The fixed point value to convert
- `start_precision`: The current number of bits used
- `end_precision`: The new number of bits used
- `return`: `value` as a new fixed point number with `end_precision` bits of precision


```rust
fn change_precision(std::fxpt::fixed value,  start_precision,  end_precision);
```

### `std::fxpt::add`

Adds two fixed point numbers with a given precision together
- `a`: First fixed point number
- `b`: Second fixed point number
- `precision`: The precision of `a` and `b`
- `return`: Result of the addition of `a` and `b`


```rust
fn add(std::fxpt::fixed a, std::fxpt::fixed b,  precision);
```

### `std::fxpt::subtract`

Subtracts two fixed point numbers with a given precision together
- `a`: First fixed point number
- `b`: Second fixed point number
- `precision`: The precision of `a` and `b`
- `return`: Result of the subtraction of `a` and `b`


```rust
fn subtract(std::fxpt::fixed a, std::fxpt::fixed b,  precision);
```

### `std::fxpt::multiply`

Multiplies two fixed point numbers with a given precision together
- `a`: First fixed point number
- `b`: Second fixed point number
- `precision`: The precision of `a` and `b`
- `return`: Result of the multiplication of `a` and `b`


```rust
fn multiply(std::fxpt::fixed a, std::fxpt::fixed b,  precision);
```

### `std::fxpt::divide`

Divides two fixed point numbers with a given precision together
- `a`: First fixed point number
- `b`: Second fixed point number
- `precision`: The precision of `a` and `b`
- `return`: Result of the division of `a` and `b`


```rust
fn divide(std::fxpt::fixed a, std::fxpt::fixed b,  precision);
```

