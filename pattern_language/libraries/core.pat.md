# `core`


## Types

### **std::core::BitfieldOrder**

```pat
enum BitfieldOrder : u8 {
    LeftToRight,
    RightToLeft
};
```


## Functions

### **std::core::has_attribute**


```pat
fn has_attribute(auto pattern, str attribute);
```
### **std::core::get_attribute_value**


```pat
fn get_attribute_value(auto pattern, str attribute);
```
### **std::core::set_endian**


```pat
fn set_endian(std::mem::Endian endian);
```
### **std::core::get_endian**


```pat
fn get_endian();
```
### **std::core::set_bitfield_order**


```pat
fn set_bitfield_order(std::core::BitfieldOrder order);
```
### **std::core::get_bitfield_order**


```pat
fn get_bitfield_order();
```
### **std::core::array_index**


```pat
fn array_index();
```
### **std::core::member_count**


```pat
fn member_count(auto pattern);
```
### **std::core::has_member**


```pat
fn has_member(auto pattern, str name);
```
### **std::core::formatted_value**


```pat
fn formatted_value(auto pattern);
```
### **std::core::is_valid_enum**


```pat
fn is_valid_enum(auto pattern);
```
