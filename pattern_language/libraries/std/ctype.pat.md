# ctype
The ctype library has functions to check if a character is part of a specific category
of ASCII characters.


## Functions

### `std::ctype::isdigit`

Checks if the given character `c` is a digit between '0' and '9'
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn isdigit( c);
```

### `std::ctype::isxdigit`

Checks if the given character `c` is a hexadecimal digit between '0' and '9', `A` and `F` or `a` and `f`
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn isxdigit( c);
```

### `std::ctype::isupper`

Checks if the given character `c` is a upper case letter between 'A' and 'Z'
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn isupper( c);
```

### `std::ctype::islower`

Checks if the given character `c` is a lower case letter between 'a' and 'z'
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn islower( c);
```

### `std::ctype::isalpha`

Checks if the given character `c` is either a upper or lower case letter between 'A' and 'Z' or 'a' and 'z'
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn isalpha( c);
```

### `std::ctype::isalnum`

Checks if the given character `c` is a upper or lower case letter or a number
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn isalnum( c);
```

### `std::ctype::isspace`

Checks if the given character `c` is a space character
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn isspace( c);
```

### `std::ctype::isblank`

Checks if the given character `c` is a invisible character
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn isblank( c);
```

### `std::ctype::isprint`

Checks if the given character `c` has a printable glyph
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn isprint( c);
```

### `std::ctype::iscntrl`

Checks if the given character `c` is a control code
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn iscntrl( c);
```

### `std::ctype::isgraph`

Checks if the given character `c` has a visible glyph
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn isgraph( c);
```

### `std::ctype::ispunct`

Checks if the given character `c` is a punctuation character
- `c`: The character to check
- `return`: True if `c` is part of this range, false otherwise


```rust
fn ispunct( c);
```

