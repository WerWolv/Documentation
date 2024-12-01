# core
The core library contains intrinsics and "compiler magic" functions that
get extra help from the runtime to fulfill their purpose.


## Types

### `std::core::BitfieldOrder`


```rust
enum BitfieldOrder : u8 {
    LeastToMostSignificant,
    LeftToRight,
    MostToLeastSignificant,
    RightToLeft
};
```


## Functions

### `std::core::has_attribute`

Checks if a pattern has a specific attribute assigned to it
- `pattern`: The pattern to check
- `attribute`: The attribute's name to check for


```rust
fn has_attribute(auto pattern, str attribute);
```

### `std::core::get_attribute_argument`

Returns the nth parameter of the attribute of a pattern if it has one
- `pattern`: The pattern to check
- `attribute`: The attribute's name to query
- `[index]`: The parameter index of the attribute to return. Defaults to 0


```rust
fn get_attribute_argument(auto pattern, str attribute, u32 index);
```

### `std::core::get_attribute_value`



```rust
fn get_attribute_value(auto pattern, str attribute);
```

### `std::core::set_endian`

Sets the current default endianness.
Any patterns created following this attribute will be created using the set endianness.
- `endian`: The new default endianness


```rust
fn set_endian(std::mem::Endian endian);
```

### `std::core::get_endian`

Gets the current default endianness.
- `return`: The currently set default endianness


```rust
fn get_endian();
```

### `std::core::set_bitfield_order`



```rust
fn set_bitfield_order(std::core::BitfieldOrder order);
```

### `std::core::get_bitfield_order`



```rust
fn get_bitfield_order();
```

### `std::core::array_index`

When used inside of a pattern that's being created using a pattern,
returns the current array index that's being processed.
If used outside of an array, always yields 0.
- `return`: The current array index


```rust
fn array_index();
```

### `std::core::member_count`

Queries the number of members of a struct, union or bitfield or the number of entries in an array
- `pattern`: The pattern to check
- `return`: The number of members in `pattern`


```rust
fn member_count(auto pattern);
```

### `std::core::has_member`

Checks whether or not a given pattern has a member with a given name
- `pattern`: The pattern to check
- `name`: The name of the member to look for
- `return`: True if a member called `name` exists, false otherwise


```rust
fn has_member(auto pattern, str name);
```

### `std::core::formatted_value`

Formats a pattern using it's default formatter or its custom formatter function set through
the `[[format]]` or `[[format_read]]` attribute
- `pattern`: The pattern to format
- `return`: Formatted string representation of `pattern`


```rust
fn formatted_value(auto pattern);
```

### `std::core::is_valid_enum`

Checks if the given enum value corresponds has a corresponding constant
- `pattern`: The enum value to check
- `return`: True if pattern has a valid enum representation, false if not


```rust
fn is_valid_enum(auto pattern);
```

### `std::core::set_pattern_color`

Changes the color of the given pattern to a new color
- `pattern`: The pattern to modify
- `color`: The RGBA8 color


```rust
fn set_pattern_color(auto pattern, u32 color);
```

### `std::core::set_display_name`

Changes the display name of a given pattern
- `pattern`: The pattern to modify
- `name`: The new display name of the pattern


```rust
fn set_display_name(auto pattern, str name);
```

### `std::core::set_pattern_comment`

Changes the comment attached to a pattern
- `pattern`: The pattern to modify
- `comment`: The new comment of the pattern


```rust
fn set_pattern_comment(auto pattern, str comment);
```

### `std::core::execute_function`

Executes the function with the given name, passing in all given arguments
- `function_name`: The namespace-prefixed name of the function
- `args`: Arguments to pass to the function


```rust
fn execute_function(str function_name, auto ... args);
```

### `std::core::set_pattern_palette_colors`

Sets the pattern color palette for all future created patterns
- `args`: RGBA8 colors as 32 bit integers (0xAABBGGRR)


```rust
fn set_pattern_palette_colors(auto ... colors, );
```

### `std::core::reset_pattern_palette`

Resets the current pattern palette progress back to zero.
This can be useful to force all instances of a type to have the same coloring for its members


```rust
fn reset_pattern_palette();
```

