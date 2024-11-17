# dec
Library to allow decoding of more complex values


## Functions

### `hex::dec::demangle`

Demangles a mangled name into a human readable name
- `mangled_name`: The mangled name
- `return`: The demangled name


```rust
fn demangle(str mangled_name);
```

### `hex::dec::zlib_decompress`

Decompresses the bytes of a pattern into a section using the zlib algorithm
- `pattern`: The pattern whose bytes should be decompressed
- `section`: The section to decompress the data into
- `window_size`: The window size passed to zlib
- `return`: true if successful, false otherwise


```rust
fn zlib_decompress(auto pattern, std::mem::Section section, u64 window_size);
```

### `hex::dec::bzip_decompress`

Decompresses the bytes of a pattern into a section using the bzip algorithm
- `pattern`: The pattern whose bytes should be decompressed
- `section`: The section to decompress the data into
- `return`: true if successful, false otherwise


```rust
fn bzip_decompress(auto pattern, std::mem::Section section);
```

### `hex::dec::lzma_decompress`

Decompresses the bytes of a pattern into a section using the LZMA algorithm
- `pattern`: The pattern whose bytes should be decompressed
- `section`: The section to decompress the data into
- `return`: true if successful, false otherwise


```rust
fn lzma_decompress(auto pattern, std::mem::Section section);
```

### `hex::dec::zstd_decompress`

Decompresses the bytes of a pattern into a section using the zstd algorithm
- `pattern`: The pattern whose bytes should be decompressed
- `section`: The section to decompress the data into
- `return`: true if successful, false otherwise


```rust
fn zstd_decompress(auto pattern, std::mem::Section section);
```

### `hex::dec::lz4_decompress`

Decompresses the bytes of a pattern into a section using the lz4 algorithm
- `pattern`: The pattern whose bytes should be decompressed
- `section`: The section to decompress the data into
- `frame`: Whether the data is framed or not
- `return`: true if successful, false otherwise


```rust
fn lz4_decompress(auto pattern, std::mem::Section section, bool frame);
```

