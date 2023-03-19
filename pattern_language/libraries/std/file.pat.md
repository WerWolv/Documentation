# file
The File library allows reading and writing from/to external files using
a C-like File IO API.

**These functions are considered dangerous and require the user to manually permit them**


## Types

### `std::file::Handle`

```rust
using Handle = s32;
```
### `std::file::Mode`

```rust
enum Mode : u8 {
    Create,
    Read,
    Write
};
```


## Functions

### `std::file::open`


```rust
fn open(str path, std::file::Mode mode);
```
### `std::file::close`


```rust
fn close(std::file::Handle handle);
```
### `std::file::read`


```rust
fn read(std::file::Handle handle, u64 size);
```
### `std::file::write`


```rust
fn write(std::file::Handle handle, str data);
```
### `std::file::seek`


```rust
fn seek(std::file::Handle handle, u64 offset);
```
### `std::file::size`


```rust
fn size(std::file::Handle handle);
```
### `std::file::resize`


```rust
fn resize(std::file::Handle handle, u64 size);
```
### `std::file::flush`


```rust
fn flush(std::file::Handle handle);
```
### `std::file::remove`

Deletes a file from disk. This will also automatically close this file
- `handle`: The handle of the file to delete


```rust
fn remove(std::file::Handle handle);
```
