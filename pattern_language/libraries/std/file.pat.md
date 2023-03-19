# file
**The File library allows reading and writing from/to external files using 
	a C-like File IO API.

	**These functions are considered dangerous and require the user to manually permit them****


## Types

### std::file::Handle

The mode to open a file in.
Read opens the file in read-only mode
Write opens the file in read and write mode
Create creates a new file if it doesn't exist and overwrites an existing file

```rust
using Handle = s32;
```
### std::file::Mode

Opens a file

```rust
enum Mode : u8 {
    Create,
    Read,
    Write
};
```


## Functions

### std::file::open

Closes a file handle that has been opened previously
- `handle`: The handle to close


```rust
fn open(str path, std::file::Mode mode);
```
### std::file::close

Reads the content of a file into a string
- `handle`: The file handle to read from
- `size`: Number of bytes to read
- `return`: String containing the read data


```rust
fn close(std::file::Handle handle);
```
### std::file::read

Writes the content of a string into a file
- `handle`: The file handle to write to
- `data`: String to write to the file


```rust
fn read(std::file::Handle handle, u64 size);
```
### std::file::write

Sets the current cursor position in the given file handle
- `handle`: The file handle to set the cursor position in
- `offset`: The offset to move the cursor to


```rust
fn write(std::file::Handle handle, str data);
```
### std::file::seek

Queries the size of a file
- `handle`: The handle of the file to get the size of
- `return`: The file's size


```rust
fn seek(std::file::Handle handle, u64 offset);
```
### std::file::size

Resizes a file
- `handle`: The handle of the file to resize


```rust
fn size(std::file::Handle handle);
```
### std::file::resize

Flushes changes made to a file to disk
- `handle`: The handle of the file to flush


```rust
fn resize(std::file::Handle handle, u64 size);
```
### std::file::flush

Deletes a file from disk. This will also automatically close this file
- `handle`: The handle of the file to delete


```rust
fn flush(std::file::Handle handle);
```
### std::file::remove


```rust
fn remove(std::file::Handle handle);
```
