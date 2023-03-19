# `math`


## Types

### **std::math::AccumulateOperation**

```pat
enum AccumulateOperation : u8 {
    Add,
    Max,
    Min,
    Modulo,
    Multiply
};
```


## Functions

### **std::math::min**


```pat
fn min(auto a, auto b);
```
### **std::math::max**


```pat
fn max(auto a, auto b);
```
### **std::math::clamp**


```pat
fn clamp(auto x, auto min, auto max);
```
### **std::math::abs**


```pat
fn abs(auto x);
```
### **std::math::sign**


```pat
fn sign(auto x);
```
### **std::math::copy_sign**


```pat
fn copy_sign(auto x, auto y);
```
### **std::math::factorial**


```pat
fn factorial(u128 x);
```
### **std::math::comb**


```pat
fn comb(u128 n, u128 k);
```
### **std::math::perm**


```pat
fn perm(u128 n, u128 k);
```
### **std::math::floor**


```pat
fn floor(auto value);
```
### **std::math::ceil**


```pat
fn ceil(auto value);
```
### **std::math::round**


```pat
fn round(auto value);
```
### **std::math::trunc**


```pat
fn trunc(auto value);
```
### **std::math::log10**


```pat
fn log10(auto value);
```
### **std::math::log2**


```pat
fn log2(auto value);
```
### **std::math::ln**


```pat
fn ln(auto value);
```
### **std::math::fmod**


```pat
fn fmod(auto value);
```
### **std::math::pow**


```pat
fn pow(auto base, auto exp);
```
### **std::math::sqrt**


```pat
fn sqrt(auto value);
```
### **std::math::cbrt**


```pat
fn cbrt(auto value);
```
### **std::math::sin**


```pat
fn sin(auto value);
```
### **std::math::cos**


```pat
fn cos(auto value);
```
### **std::math::tan**


```pat
fn tan(auto value);
```
### **std::math::asin**


```pat
fn asin(auto value);
```
### **std::math::acos**


```pat
fn acos(auto value);
```
### **std::math::atan**


```pat
fn atan(auto value);
```
### **std::math::atan2**


```pat
fn atan2(auto value);
```
### **std::math::sinh**


```pat
fn sinh(auto value);
```
### **std::math::cosh**


```pat
fn cosh(auto value);
```
### **std::math::tanh**


```pat
fn tanh(auto value);
```
### **std::math::asinh**


```pat
fn asinh(auto value);
```
### **std::math::acosh**


```pat
fn acosh(auto value);
```
### **std::math::atanh**


```pat
fn atanh(auto value);
```
### **std::math::accumulate**


```pat
fn accumulate(u128 start, u128 end, u128 valueSize, std::mem::Section section, std::math::AccumulateOperation operation, std::mem::Endian endian);
```
