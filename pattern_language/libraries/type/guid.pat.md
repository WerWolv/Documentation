# guid
Types to deal with UUIDs (Universally Unique Identifiers) / GUIDs (Globally Unique Identifiers) as described in RFC 4122


## Types

### `type::GUID`

Type representing a GUID value

```rust
struct GUID { ... } [[sealed, format]];
```
### `type::UUID`

Alias name for GUID

```rust
using UUID = type::GUID;
```
