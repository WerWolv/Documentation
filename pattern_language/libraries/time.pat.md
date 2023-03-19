# `time`


## Types

### **std::time::DOSDate**

```pat
bitfield DOSDate { ... } [[sealed]];
```
### **std::time::DOSTime**

```pat
bitfield DOSTime { ... } [[sealed]];
```
### **std::time::EpochTime**

```pat
using EpochTime = u128;
```
### **std::time::Time**

```pat
struct Time { ... } [[sealed]];
```
### **std::time::TimeConverter**

```pat
union TimeConverter { ... };
```
### **std::time::TimeZone**

```pat
enum TimeZone : u8 {
    Local,
    UTC
};
```


## Functions

### **std::time::epoch**


```pat
fn epoch();
```
### **std::time::to_local**


```pat
fn to_local(std::time::EpochTime epoch_time);
```
### **std::time::to_utc**


```pat
fn to_utc(std::time::EpochTime epoch_time);
```
### **std::time::now**


```pat
fn now(std::time::TimeZone time_zone);
```
### **std::time::to_dos_date**


```pat
fn to_dos_date(u16 value);
```
### **std::time::to_dos_time**


```pat
fn to_dos_time(u16 value);
```
### **std::time::format**


```pat
fn format(std::time::Time time, str format_string);
```
### **std::time::format_dos_date**


```pat
fn format_dos_date(std::time::DOSDate date, str format_string);
```
### **std::time::format_dos_time**


```pat
fn format_dos_time(std::time::DOSTime time, str format_string);
```
