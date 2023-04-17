# math
Library containing more advanced mathematical operations.


## Types

### `std::math::AccumulateOperation`

Options to use with the `std::math::accumulate` function.

```rust
enum AccumulateOperation : u8 {
    Add,
    Max,
    Min,
    Modulo,
    Multiply
};
```


## Functions

### `std::math::min`

Compares the values `a` and `b` with each other and returns the smaller of the two
- `a`: First value
- `b`: Second value
- `return`: `a` if `a` is smaller than `b`, otherwise `b`


```rust
fn min(auto a, auto b);
```

### `std::math::max`

Compares the values `a` and `b` with each other and returns the bigger of the two
- `a`: First value
- `b`: Second value
- `return`: `a` if `a` is bigger than `b`, otherwise `b`


```rust
fn max(auto a, auto b);
```

### `std::math::clamp`

Clamps the value of `x` between `min` and `max`.
- `x`: Value
- `min`: Minimum value
- `max`: Maximum value
- `return`: `min` if `x` is smaller than `min`, `max` if `x` is bigger than `max`, `x` otherwise


```rust
fn clamp(auto x, auto min, auto max);
```

### `std::math::abs`

Returns the absolute value of `x`.
- `x`: Value
- `return`: `x` if `x` is positive, `-x` otherwise


```rust
fn abs(auto x);
```

### `std::math::sign`

Returns the sign of `x`.
- `x`: Value
- `return`: `1` if `x` is positive, `-1` if `x` is negative, `0` if `x` is zero


```rust
fn sign(auto x);
```

### `std::math::copy_sign`

Copies the sign of `y` to `x`.
- `x`: Value
- `y`: Value
- `return`: `x` if `y` is positive, `-x` if `y` is negative


```rust
fn copy_sign(auto x, auto y);
```

### `std::math::factorial`

Calculates the factorial of `x`.
- `x`: Value
- `return`: Factorial of `x`


```rust
fn factorial(u128 x);
```

### `std::math::comb`

Calculates the binomial coefficient of `n` and `k`.
- `n`: Value
- `k`: Value
- `return`: Binomial coefficient of `n` and `k`


```rust
fn comb(u128 n, u128 k);
```

### `std::math::perm`

Calculates the permutation of `n` and `k`.
- `n`: Value
- `k`: Value
- `return`: Permutation of `n` and `k`


```rust
fn perm(u128 n, u128 k);
```

### `std::math::floor`

Floors the value of `value`.
- `value`: Value
- `return`: `value` floored


```rust
fn floor(auto value);
```

### `std::math::ceil`

Ceils the value of `value`.
- `value`: Value
- `return`: `value` ceiled


```rust
fn ceil(auto value);
```

### `std::math::round`

Rounds the value of `value`.
- `value`: Value
- `return`: `value` rounded


```rust
fn round(auto value);
```

### `std::math::trunc`

Truncates the value of `value`.
- `value`: Value
- `return`: `value` truncated


```rust
fn trunc(auto value);
```

### `std::math::log10`

Calculates the logarithm of `value` with base 10.
- `value`: Value
- `return`: Logarithm of `value` with base 10


```rust
fn log10(auto value);
```

### `std::math::log2`

Calculates the logarithm of `value` with base 2.
- `value`: Value
- `return`: Logarithm of `value` with base 2


```rust
fn log2(auto value);
```

### `std::math::ln`

Calculates the natural logarithm of `value`.
- `value`: Value
- `return`: Logarithm of `value` with base `e`


```rust
fn ln(auto value);
```

### `std::math::fmod`

Calculates the floating point modulus of `value`.
- `value`: Value
- `return`: Floating point modulus of `value`


```rust
fn fmod(auto value);
```

### `std::math::pow`

Calculates the value of `base` raised to the power of `exp`.
- `base`: Base
- `exp`: Exponent
- `return`: `base` raised to the power of `exp`


```rust
fn pow(auto base, auto exp);
```

### `std::math::exp`

Calculates the value of the natural number `e`	raised to the power of `value`.
- `value`: Exponent
- `return`: `e` raised to the power of `value`


```rust
fn exp(auto value);
```

### `std::math::sqrt`

Calculates the square root of `value`.
- `value`: Value
- `return`: Square root of `value`


```rust
fn sqrt(auto value);
```

### `std::math::cbrt`

Calculates the cubic root of `value`.
- `value`: Value
- `return`: Cubic root of `value`


```rust
fn cbrt(auto value);
```

### `std::math::sin`

Calculates the sine of `value`.
- `value`: Angle value in radians
- `return`: Sine of `value`


```rust
fn sin(auto value);
```

### `std::math::cos`

Calculates the cosine of `value`.
- `value`: Angle value in radians
- `return`: Cosine of `value`


```rust
fn cos(auto value);
```

### `std::math::tan`

Calculates the tangent of `value`.
- `value`: Angle value in radians
- `return`: Tangent of `value`


```rust
fn tan(auto value);
```

### `std::math::asin`

Calculates the arc sine of `value`.
- `value`: Angle value in radians
- `return`: Arc sine of `value`


```rust
fn asin(auto value);
```

### `std::math::acos`

Calculates the arc cosine of `value`.
- `value`: Value
- `return`: Arc cosine of `value` in radians


```rust
fn acos(auto value);
```

### `std::math::atan`

Calculates the arc tangent of `value`.
- `value`: Value
- `return`: Arc tangent of `value` in radians between `-pi/2` and `pi/2`


```rust
fn atan(auto value);
```

### `std::math::atan2`

Calculates the arc tangent of `value`.
- `value`: Value
- `return`: Arc tangent of `value` in radians between `-pi` and `pi`


```rust
fn atan2(auto value);
```

### `std::math::sinh`

Calculates the hyperbolic sine of `value`.
- `value`: Angle value in radians
- `return`: Hyperbolic sine of `value`


```rust
fn sinh(auto value);
```

### `std::math::cosh`

Calculates the hyperbolic cosine of `value`.
- `value`: Angle value in radians
- `return`: Hyperbolic cosine of `value`


```rust
fn cosh(auto value);
```

### `std::math::tanh`

Calculates the hyperbolic tangent of `value`.
- `value`: Angle value in radians
- `return`: Hyperbolic tangent of `value`


```rust
fn tanh(auto value);
```

### `std::math::asinh`

Calculates the arc hyperbolic sine of `value`.
- `value`: Value
- `return`: Arc hyperbolic sine of `value`


```rust
fn asinh(auto value);
```

### `std::math::acosh`

Calculates the arc hyperbolic cosine of `value`.
- `value`: Value
- `return`: Arc hyperbolic cosine of `value`


```rust
fn acosh(auto value);
```

### `std::math::atanh`

Calculates the arc hyperbolic tangent of `value`.
- `value`: Value
- `return`: Arc hyperbolic tangent of `value`


```rust
fn atanh(auto value);
```

### `std::math::accumulate`

Calculates the sum of all values in the specified memory range.
- `start`: Start address
- `end`: End address
- `valueSize`: Size of each value in bytes
- `section`: Section to use
- `operation`: Operation to use
- `endian`: Endianness to use
- `return`: Sum of all values in the specified memory range


```rust
fn accumulate(u128 start, u128 end, u128 valueSize, std::mem::Section section, std::math::AccumulateOperation operation, std::mem::Endian endian);
```

