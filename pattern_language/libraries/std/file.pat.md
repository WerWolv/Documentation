# file
The File library allows reading and writing from/to external files using
a C-like File IO API.

**These functions are considered dangerous and require the user to manually permit them**


## Types

### `std::file::Handle`

A handle representing a file that has been opened

```rust
using Handle = s32;
```
### `std::file::Mode`

The mode to open a file in.
Read opens the file in read-only mode
Write opens the file in read and write mode
Create creates a new file if it doesn't exist and overwrites an existing file

```rust
enum Mode : u8 {
    Create,
    Read,
    Write
};
```


## Functions

### `std::file::open`

Opens a file
- `path`: The path to the file to open
- `mode`: File open mode
- `return`: Handle to the newly opened file


```rust
fn open(str path, std::file::Mode mode);
```

### `std::file::close`

Closes a file handle that has been opened previously
- `handle`: The handle to close


```rust
fn close(std::file::Handle handle);
```

### `std::file::read`

Reads the content of a file into a string
- `handle`: The file handle to read from
- `size`: Number of bytes to read
- `return`: String containing the read data


```rust
fn read(std::file::Handle handle, u64 size);
```

### `std::file::write`

Writes the content of a string into a file
- `handle`: The file handle to write to
- `data`: String or Pattern to write to the file


```rust
fn write(std::file::Handle handle, auto data);
```

### `std::file::seek`

Sets the current cursor position in the given file handle
- `handle`: The file handle to set the cursor position in
- `offset`: The offset to move the cursor to


```rust
fn seek(std::file::Handle handle, u64 offset);
```

### `std::file::size`

Queries the size of a file
- `handle`: The handle of the file to get the size of
- `return`: The file's size


```rust
fn size(std::file::Handle handle);
```

### `std::file::resize`

Resizes a file
- `handle`: The handle of the file to resize


```rust
fn resize(std::file::Handle handle, u64 size);
```

### `std::file::flush`

Flushes changes made to a file to disk
- `handle`: The handle of the file to flush


```rust
fn flush(std::file::Handle handle);
```

### `std::file::remove`

Deletes a file from disk. This will also automatically close this file
- `handle`: The handle of the file to delete


```rust
fn remove(std::file::Handle handle);
```

### `std::file::create_directories`

Create all directories for the provided path
- `path`: The path for which all directories should be created


```rust
fn create_directories(str path);
```

