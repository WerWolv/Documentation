# ptr
The Pointer library contains helper functions to deal with pointer types.
The `relative_to` functions are meant to be used with the `[[pointer_base]]` attribute


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
enum Endian : u8 {
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
using Section = u128;
```
### `std::ptr::NullablePtr`

A nullable pointer, generic over both the pointee type and pointer type.

By nullable, we mean that if the pointer's value is zero (`0x0`), then the
value will appear as padding rather than a pointer to something, but
if the pointer's value is non-zero, that non-zero value will be treated as
a pointer of type `PointerTy` which points to an element of type `PointeeTy`.

Example:
A struct field called `p_myInfo` which is a nullable 64-bit pointer to an
element of type `MyInfoTy` would be written as:
```
struct MyStruct {
std::ptr::NullablePtr<MyInfoTy, u64> p_myInfo;
}
```

```rust
struct NullablePtr<PointeeTy, PointerTy> { ... };
```


## Functions

### `std::ptr::relative_to_pointer`

Use the offset of the current pointer as start address
- `offset`: The pointer's value
- `return`: The new pointer base


```rust
fn relative_to_pointer(u128 offset);
```

### `std::ptr::relative_to_parent`

Use the offset of the pointer's parent as start address
- `offset`: The pointer's value
- `return`: The new pointer base


```rust
fn relative_to_parent(u128 offset);
```

### `std::ptr::relative_to_end`

Use the end of the file as pointer base address and use its value as offset backwards from there
- `offset`: The pointer's value
- `return`: The new pointer base


```rust
fn relative_to_end(u128 offset);
```

