# hash
The hash library contains various data hash functions


## Functions

### `std::hash::crc32`

Calculates the CRC32 hash of the bytes inside of a given pattern
- `pattern`: The pattern to calculate the crc32 hash of
- `init`: The CRC32 init value
- `poly`: The CRC32 polynomial
- `xorout`: The CRC32 XOR-Out value
- `reflect_in`: Whether or not the input bytes should be reflected
- `reflect_out`: Whether or not the output should be reflected
- `return`: Calculated CRC32 hash


```rust
fn crc32(auto pattern, u32 init, u32 poly, u32 xorout, bool reflect_in, bool reflect_out);
```
