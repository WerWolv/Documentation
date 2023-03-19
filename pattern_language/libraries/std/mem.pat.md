# `mem`


## Types

### **std::mem::AlignTo**

```pat
struct AlignTo<auto Alignment> { ... } [[hidden, sealed]];
```
### **std::mem::Bytes**

```pat
struct Bytes<auto Size> { ... } [[sealed, format]];
```
### **std::mem::Endian**

```pat
enum Endian : u8 {
    Big,
    Little,
    Native
};
```
### **std::mem::MagicSearch**

```pat
struct MagicSearch<auto Magic, T> { ... };
```
### **std::mem::Reinterpreter**

```pat
union Reinterpreter<From, To> { ... };
```
### **std::mem::Section**

```pat
using Section = u128;
```


## Functions

### **std::mem::eof**


```pat
fn eof();
```
### **std::mem::align_to**


```pat
fn align_to(u128 alignment, u128 value);
```
### **std::mem::base_address**


```pat
fn base_address();
```
### **std::mem::size**


```pat
fn size();
```
### **std::mem::find_sequence**


```pat
fn find_sequence(u128 occurrence_index, auto ... bytes);
```
### **std::mem::find_sequence_in_range**


```pat
fn find_sequence_in_range(u128 occurrence_index, u128 offsetFrom, u128 offsetTo, auto ... bytes);
```
### **std::mem::read_unsigned**


```pat
fn read_unsigned(u128 address, u8 size, std::mem::Endian endian);
```
### **std::mem::read_signed**


```pat
fn read_signed(u128 address, u8 size, std::mem::Endian endian);
```
### **std::mem::read_string**


```pat
fn read_string(u128 address, u8 size);
```
### **std::mem::create_section**


```pat
fn create_section(str name);
```
### **std::mem::delete_section**


```pat
fn delete_section(std::mem::Section section);
```
### **std::mem::get_section_size**


```pat
fn get_section_size(std::mem::Section section);
```
### **std::mem::copy_section_to_section**


```pat
fn copy_section_to_section(std::mem::Section from_section, u64 from_address, std::mem::Section to_section, u64 to_address, u64 size);
```
### **std::mem::copy_value_to_section**


```pat
fn copy_value_to_section(auto value, std::mem::Section to_section, u64 to_address);
```
