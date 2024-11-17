# path
Types dealing with various kinds of resource paths


## Types

### `type::DOSPath`

A type representing a DOS path using a '\\' backslash as delimiter

```rust
using DOSPath = type::Path;
```
### `type::Path`

A generic type representing a path with an arbitrary delimiter
- `<Delimiter>`: The delimiter sequence used to separate two path segments

```rust
struct Path<auto Delimiter> { ... } [[format]];
```
### `type::PathSegment`

Type representing a single path segment. Use the `Path` type instead of using this on its own
- `<Delimiter>`: The delimiter sequence used to separate two path segments

```rust
struct PathSegment<auto Delimiter> { ... } [[sealed, format]];
```
### `type::UnixPath`

A type representing a Unix path using a '/' forward slash as delimiter

```rust
using UnixPath = type::Path;
```
