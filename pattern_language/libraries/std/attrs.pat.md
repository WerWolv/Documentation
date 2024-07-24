# attrs
The attributes library contains a set of attributes that can be used to annotate types with certain properties.
To use an attribute, simply make your custom type inherit from the attribute type you want to use.

For example, to make a type hidden, you can use the `Hidden` attribute like this:

```rust
struct MyType : std::attr::Hidden {
// ...
};
```


## Types

### `std::attr::Commented`

Attribute that adds a comment to the variable created from a type.
- `<Comment>`: The comment to add

```rust
struct Commented<auto Comment> { ... } [[comment]];
```
### `std::attr::Hidden`

Attribute that marks a type as hidden.
This means variables of this type are not displayed in the UI.

```rust
struct Hidden { ... } [[hidden]];
```
### `std::attr::HighlightHidden`

Attribute that marks a type as hidden and also hides it from the highlighter.
This means variables of this type are don't display any highlighting in the UI but are still visible.

```rust
struct HighlightHidden { ... } [[highlight_hidden]];
```
### `std::attr::Inlined`

Attribute that marks a type as inline.
Creating a variable of this type will not create a new layer but instead dump the contents of the type directly into the current layer.

```rust
struct Inlined { ... } [[inline]];
```
### `std::attr::Literal`

Attribute that marks a type as a literal type.
This means the type behaves like a built-in type in the sense that it doesn't show its internal state and its display value is determined by a format function.
It can also be transformed into a different built-in literal when used in an expression.
- `<FormatFunction>`: The format function to use. The return value of this function is used to display the value of the literal and also determines the value returned when the literal is used in an expression.

```rust
struct Literal<auto FormatFunction> { ... } [[sealed, format_read, transform]];
```
### `std::attr::Named`

Attribute that changes the name of the variable created from a type.
- `<Name>`: The name of the variable created

```rust
struct Named<auto Name> { ... } [[name]];
```
### `std::attr::Sealed`

Attribute that marks a type as sealed.
Sealed types don't display their internal state in the UI.

```rust
struct Sealed { ... } [[sealed]];
```
### `std::core::BitfieldOrder`


```rust
enum BitfieldOrder : u8 {
    LeastToMostSignificant,
    LeftToRight,
    MostToLeastSignificant,
    RightToLeft
};
```
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
