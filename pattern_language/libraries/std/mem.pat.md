# mem
Library for doing raw memory accesses and other low-level operations.


## Types

### `std::mem::AlignTo`

Aligns the cursor to the given alignment
- `<alignment>`: The alignment to align to

```rust
struct AlignTo<auto Alignment> { ... } [[hidden, sealed]];
```
### `std::mem::Bytes`

A type representing a sequence of bytes without any specific meaning
- `<Size>`: The size of the sequence

```rust
struct Bytes<auto Size> { ... } [[sealed, format]];
```
### `std::mem::Endian`

The endianness of a value

```rust
enum Endian :  {
    Big,
    Little,
    Native
};
```
### `std::mem::MagicSearch`

Searches for a sequence of bytes and places the given type at that address
- `<Magic>`: The magic sequence to search for
- `<T>`: The type to place at the address

```rust
struct MagicSearch<auto Magic, T> { ... };
```
### `std::mem::Reinterpreter`

Reinterprets a value as a different one
- `<From>`: The type to reinterpret from
- `<To>`: The type to reinterpret to

```rust
union Reinterpreter<From, To> { ... };
```
### `std::mem::Section`

A Handle for a custom Section

```rust
using Section = ;
```


## Functions

### `std::mem::eof`

Function that returns true if the cursor position is at the end of the memory
This is usually used in while-sized arrays in the form of `u8 array[while(!std::mem::eof())]`
- `return`: True if the cursor is at the end of the memory


```rust
fn eof();
```

### `std::mem::reached`

Function that returns true if the cursor position is at or beyond the given address
- `address`: The address to compare against
- `return`: True if the cursor is at or beyond the given address


```rust
fn reached( address);
```

### `std::mem::align_to`

Aligns the given value to the given alignment
- `alignment`: The alignment to align to
- `value`: The value to align
- `return`: The aligned value


```rust
fn align_to( alignment,  value);
```

### `std::mem::base_address`

Gets the base address of the data
- `return`: The base address of the memory


```rust
fn base_address();
```

### `std::mem::size`

Gets the size of the data
- `return`: The size of the memory


```rust
fn size();
```

### `std::mem::find_sequence`

Finds a sequence of bytes in the data
- `occurrence_index`: The index of the occurrence to find
- `bytes`: The bytes to find
- `return`: The address of the sequence


```rust
fn find_sequence( occurrence_index, auto ... bytes);
```

### `std::mem::find_sequence_in_range`

Finds a sequence of bytes in a specific region of the data
- `occurrence_index`: The index of the occurrence to find
- `offsetFrom`: The offset from which to start searching
- `offsetTo`: The offset to which to search
- `bytes`: The bytes to find
- `return`: The address of the sequence


```rust
fn find_sequence_in_range( occurrence_index,  offsetFrom,  offsetTo, auto ... bytes);
```

### `std::mem::find_string`

Finds a string in the data
- `occurrence_index`: The index of the occurrence to find
- `string`: The string to find
- `return`: The address of the sequence


```rust
fn find_string( occurrence_index,  string);
```

### `std::mem::find_string_in_range`

Finds a string in a specific region of the data
- `occurrence_index`: The index of the occurrence to find
- `offsetFrom`: The offset from which to start searching
- `offsetTo`: The offset to which to search
- `string`: The string to find
- `return`: The address of the sequence


```rust
fn find_string_in_range( occurrence_index,  offsetFrom,  offsetTo,  string);
```

### `std::mem::read_unsigned`

Reads a unsigned value from the memory
- `address`: The address to read from
- `size`: The size of the value to read
- `[endian]`: The endianness of the value to read. Defaults to native
- `return`: The value read


```rust
fn read_unsigned( address,  size, std::mem::Endian endian);
```

### `std::mem::read_signed`

Reads a signed value from the memory
- `address`: The address to read from
- `size`: The size of the value to read
- `[endian]`: The endianness of the value to read. Defaults to native
- `return`: The value read


```rust
fn read_signed( address,  size, std::mem::Endian endian);
```

### `std::mem::read_string`

Reads a string value from the memory
- `address`: The address to read from
- `size`: The size of the value to read
- `return`: The value read


```rust
fn read_string( address,  size);
```

### `std::mem::read_bits`

Reads a number of bits from the specified bit offset within the specified byte
- `byteOffset`: The byte offset within the data
- `bitOffset`: The bit offset to start the read at within the current byte
- `bitSize`: The total number of bits to read
- `return`: A u128 containing the value read


```rust
fn read_bits( byteOffset,  bitOffset,  bitSize);
```

### `std::mem::create_section`

Creates a new custom section with the given name
- `name`: The name of the section
- `return`: The handle to the section


```rust
fn create_section( name);
```

### `std::mem::delete_section`

Deletes a custom section
- `section`: The handle to the section


```rust
fn delete_section(std::mem::Section section);
```

### `std::mem::get_section_size`

Gets the size of a custom section
- `section`: The handle to the section
- `return`: The size of the section


```rust
fn get_section_size(std::mem::Section section);
```

### `std::mem::set_section_size`

Changes the size of a custom section
- `section`: The handle to the section
- `size`: The new size of the section


```rust
fn set_section_size(std::mem::Section section,  size);
```

### `std::mem::copy_section_to_section`

Copies a range of bytes from one section into another
- `from_section`: The section to copy from
- `from_address`: The address to copy from
- `to_section`: The section to copy to
- `to_address`: The address to copy to
- `size`: The size of the range to copy


```rust
fn copy_section_to_section(std::mem::Section from_section,  from_address, std::mem::Section to_section,  to_address,  size);
```

### `std::mem::copy_value_to_section`

Copies a range of bytes from the main section into a custom section
- `value`: The pattern whose bytes should be copied
- `to_section`: The section to copy to
- `to_address`: The address to copy to


```rust
fn copy_value_to_section( value, std::mem::Section to_section,  to_address);
```

### `std::mem::current_bit_offset`

Returns the current bit offset when inside of a bitfield.
- `return`: The current bit offset between 0 and 7


```rust
fn current_bit_offset();
```

