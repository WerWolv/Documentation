# time
Types used to decode various different time formats


## Types

### `std::time::DOSDate`

A type to represent a DOS date.

```rust
bitfield DOSDate { ... } [[sealed]];
```
### `std::time::DOSTime`

A type to represent a DOS time.

```rust
bitfield DOSTime { ... } [[sealed]];
```
### `std::time::EpochTime`

A type to represent a time in seconds since the epoch.

```rust
using EpochTime = u32;
```
### `std::time::Time`

A structured representation of a time and date.

```rust
struct Time { ... } [[sealed]];
```
### `std::time::TimeConverter`

A helper type to convert between Time and u128.

```rust
union TimeConverter { ... };
```
### `std::time::TimeZone`

A type to represent a time zone.

```rust
enum TimeZone : u8 {
    Local,
    UTC
};
```
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
### `type::FILETIME`

A 64bit FILETIME value

```rust
using FILETIME = u64 [[format]];
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
