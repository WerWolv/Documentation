# time
Types used to decode various different time formats


## Types

### `type::DOSDate`

A DOS Date value

```rust
using DOSDate = u16 [[format]];
```
### `type::DOSTime`

A DOS Time value

```rust
using DOSTime = u16 [[format]];
```
### `type::time32_t`

A 32 bit Unix time value

```rust
using time32_t = u32 [[format]];
```
### `type::time64_t`

A 64 bit Unix time value

```rust
using time64_t = u64 [[format]];
```
### `type::time_t`

Alias name for `time32_t`

```rust
using time_t = type::time32_t;
```
