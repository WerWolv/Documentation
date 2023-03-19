# `string`


## Types

### **std::string::SizedString**

```pat
using SizedString<SizeType> = std::string::SizedStringBase;
```
### **std::string::SizedString16**

```pat
using SizedString16<SizeType> = std::string::SizedStringBase;
```
### **std::string::SizedStringBase**

```pat
struct SizedStringBase<, > { ... } [[sealed, format, transform]];
```


## Functions

### **std::string::length**


```pat
fn length(str string);
```
### **std::string::at**


```pat
fn at(str string, u32 index);
```
### **std::string::substr**


```pat
fn substr(str string, u32 pos, u32 count);
```
### **std::string::parse_int**


```pat
fn parse_int(str string, u8 base);
```
### **std::string::parse_float**


```pat
fn parse_float(str string);
```
### **std::string::to_string**


```pat
fn to_string(auto x);
```
### **std::string::starts_with**


```pat
fn starts_with(str string, str part);
```
### **std::string::ends_with**


```pat
fn ends_with(str string, str part);
```
### **std::string::contains**


```pat
fn contains(str a, str b);
```
### **std::string::reverse**


```pat
fn reverse(str string);
```
### **std::string::to_upper**


```pat
fn to_upper(str string);
```
### **std::string::to_lower**


```pat
fn to_lower(str string);
```
### **std::string::replace**


```pat
fn replace(str string, str pattern, str replace);
```
