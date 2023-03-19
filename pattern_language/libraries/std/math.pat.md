# math


## Types

### std::math::AccumulateOperation

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

### std::math::min


```rust
fn min(auto a, auto b);
```
### std::math::max


```rust
fn max(auto a, auto b);
```
### std::math::clamp


```rust
fn clamp(auto x, auto min, auto max);
```
### std::math::abs


```rust
fn abs(auto x);
```
### std::math::sign


```rust
fn sign(auto x);
```
### std::math::copy_sign


```rust
fn copy_sign(auto x, auto y);
```
### std::math::factorial


```rust
fn factorial(u128 x);
```
### std::math::comb


```rust
fn comb(u128 n, u128 k);
```
### std::math::perm


```rust
fn perm(u128 n, u128 k);
```
### std::math::floor


```rust
fn floor(auto value);
```
### std::math::ceil


```rust
fn ceil(auto value);
```
### std::math::round


```rust
fn round(auto value);
```
### std::math::trunc


```rust
fn trunc(auto value);
```
### std::math::log10


```rust
fn log10(auto value);
```
### std::math::log2


```rust
fn log2(auto value);
```
### std::math::ln


```rust
fn ln(auto value);
```
### std::math::fmod


```rust
fn fmod(auto value);
```
### std::math::pow


```rust
fn pow(auto base, auto exp);
```
### std::math::sqrt


```rust
fn sqrt(auto value);
```
### std::math::cbrt


```rust
fn cbrt(auto value);
```
### std::math::sin


```rust
fn sin(auto value);
```
### std::math::cos


```rust
fn cos(auto value);
```
### std::math::tan


```rust
fn tan(auto value);
```
### std::math::asin


```rust
fn asin(auto value);
```
### std::math::acos


```rust
fn acos(auto value);
```
### std::math::atan


```rust
fn atan(auto value);
```
### std::math::atan2


```rust
fn atan2(auto value);
```
### std::math::sinh


```rust
fn sinh(auto value);
```
### std::math::cosh


```rust
fn cosh(auto value);
```
### std::math::tanh


```rust
fn tanh(auto value);
```
### std::math::asinh


```rust
fn asinh(auto value);
```
### std::math::acosh


```rust
fn acosh(auto value);
```
### std::math::atanh


```rust
fn atanh(auto value);
```
### std::math::accumulate


```rust
fn accumulate(u128 start, u128 end, u128 valueSize, std::mem::Section section, std::math::AccumulateOperation operation, std::mem::Endian endian);
```
