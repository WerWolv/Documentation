# `file`


## Types

### **std::file::Handle**

```pat
using Handle = s32;
```
### **std::file::Mode**

```pat
enum Mode : u8 {
    Create,
    Read,
    Write
};
```


## Functions

### **std::file::open**


```pat
fn open(str path, std::file::Mode mode);
```
### **std::file::close**


```pat
fn close(std::file::Handle handle);
```
### **std::file::read**


```pat
fn read(std::file::Handle handle, u64 size);
```
### **std::file::write**


```pat
fn write(std::file::Handle handle, str data);
```
### **std::file::seek**


```pat
fn seek(std::file::Handle handle, u64 offset);
```
### **std::file::size**


```pat
fn size(std::file::Handle handle);
```
### **std::file::resize**


```pat
fn resize(std::file::Handle handle, u64 size);
```
### **std::file::flush**


```pat
fn flush(std::file::Handle handle);
```
### **std::file::remove**


```pat
fn remove(std::file::Handle handle);
```
