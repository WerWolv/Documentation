# path
Types dealing with various kinds of resource paths


## Types

### `type::DOSPath`

A type representing a DOS path using a '\\' backslash as delimeter

```rust
using DOSPath = type::Path;
```
### `type::Path`

A generic type representing a path with an arbitrary delimeter
- `<Delimeter>`: The delimeter sequence used to separate two path segments

```rust
struct Path<auto Delimeter> { ... } [[format]];
```
### `type::PathSegment`

Type representing a single path segment. Use the `Path` type instead of using this on its own
- `<Delimeter>`: The delimeter sequence used to separate two path segments

```rust
struct PathSegment<auto Delimeter> { ... } [[sealed, format]];
```
### `type::UnixPath`

A type representing a Unix path using a '/' forwardslash as delimeter

```rust
using UnixPath = type::Path;
```
