# hash
The hash library contains various data hash functions


## Functions

### `std::hash::crc8`

Calculates the CRC8 hash of the bytes inside of a given pattern
- `pattern`: The pattern to calculate the CRC8 hash of
- `init`: The CRC8 init value
- `poly`: The CRC8 polynomial
- `xorout`: The CRC8 XOR-Out value
- `reflect_in`: Whether or not the input bytes should be reflected
- `reflect_out`: Whether or not the output should be reflected
- `return`: Calculated CRC8 hash


```rust
fn crc8( pattern,  init,  poly,  xorout,  reflect_in,  reflect_out);
```

### `std::hash::crc16`

Calculates the CRC16 hash of the bytes inside of a given pattern
- `pattern`: The pattern to calculate the CRC16 hash of
- `init`: The CRC16 init value
- `poly`: The CRC16 polynomial
- `xorout`: The CRC16 XOR-Out value
- `reflect_in`: Whether or not the input bytes should be reflected
- `reflect_out`: Whether or not the output should be reflected
- `return`: Calculated CRC16 hash


```rust
fn crc16( pattern,  init,  poly,  xorout,  reflect_in,  reflect_out);
```

### `std::hash::crc32`

Calculates the CRC32 hash of the bytes inside of a given pattern
- `pattern`: The pattern to calculate the CRC32 hash of
- `init`: The CRC32 init value
- `poly`: The CRC32 polynomial
- `xorout`: The CRC32 XOR-Out value
- `reflect_in`: Whether or not the input bytes should be reflected
- `reflect_out`: Whether or not the output should be reflected
- `return`: Calculated CRC32 hash


```rust
fn crc32( pattern,  init,  poly,  xorout,  reflect_in,  reflect_out);
```

### `std::hash::crc64`

Calculates the CRC64 hash of the bytes inside of a given pattern
- `pattern`: The pattern to calculate the CRC64 hash of
- `init`: The CRC64 init value
- `poly`: The CRC64 polynomial
- `xorout`: The CRC64 XOR-Out value
- `reflect_in`: Whether or not the input bytes should be reflected
- `reflect_out`: Whether or not the output should be reflected
- `return`: Calculated CRC64 hash


```rust
fn crc64( pattern,  init,  poly,  xorout,  reflect_in,  reflect_out);
```

