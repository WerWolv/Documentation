# `fxpt`


## Types

### **std::fxpt::fixed**

```pat
using fixed = s128;
```


## Functions

### **std::fxpt::to_float**


```pat
fn to_float(std::fxpt::fixed fxt, u32 precision);
```
### **std::fxpt::to_fixed**


```pat
fn to_fixed(double flt, u32 precision);
```
### **std::fxpt::change_precision**


```pat
fn change_precision(std::fxpt::fixed value, u32 start_precision, u32 end_precision);
```
### **std::fxpt::add**


```pat
fn add(std::fxpt::fixed a, std::fxpt::fixed b, u32 precision);
```
### **std::fxpt::subtract**


```pat
fn subtract(std::fxpt::fixed a, std::fxpt::fixed b, u32 precision);
```
### **std::fxpt::multiply**


```pat
fn multiply(std::fxpt::fixed a, std::fxpt::fixed b, u32 precision);
```
### **std::fxpt::divide**


```pat
fn divide(std::fxpt::fixed a, std::fxpt::fixed b, u32 precision);
```
