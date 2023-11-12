# time
Library to handle time and date related operations.


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


## Functions

### `std::time::epoch`

Returns the current time in seconds since the epoch.
- `return`: The current time in seconds since the epoch.


```rust
fn epoch();
```

### `std::time::to_local`

Converts a time in seconds since the epoch to a local time.
- `epoch_time`: The time in seconds since the epoch.
- `return`: The local time.


```rust
fn to_local(std::time::EpochTime epoch_time);
```

### `std::time::to_utc`

Converts a time in seconds since the epoch to a UTC time.
- `epoch_time`: The time in seconds since the epoch.
- `return`: The UTC time.


```rust
fn to_utc(std::time::EpochTime epoch_time);
```

### `std::time::now`

Queries the current time in the specified time zone.
- `time_zone`: The time zone to query.
- `return`: The current time in the specified time zone.


```rust
fn now(std::time::TimeZone time_zone);
```

### `std::time::to_dos_date`

Converts a value to a DOS date.
- `value`: The value to convert.
- `return`: The DOS date.


```rust
fn to_dos_date(u16 value);
```

### `std::time::to_dos_time`

Converts a value to a DOS time.
- `value`: The value to convert.
- `return`: The DOS time.


```rust
fn to_dos_time(u16 value);
```

### `std::time::filetime_to_unix`

Converts a FILETIME to unix time.
- `value`: The value to convert.
- `return`: Timestamp formatted as unix time.


```rust
fn filetime_to_unix(u64 value);
```

### `std::time::format`

Formats a time according to the specified format string.
- `time`: The time to format.
- `format_string`: The format string to use.
- `return`: The formatted time.


```rust
fn format(std::time::Time time, str format_string);
```

### `std::time::format_dos_date`

Formats a DOS date according to the specified format string.
- `date`: The DOS date to format.
- `format_string`: The format string to use.
- `return`: The formatted DOS date.


```rust
fn format_dos_date(std::time::DOSDate date, str format_string);
```

### `std::time::format_dos_time`

Formats a DOS time according to the specified format string.
- `time`: The DOS time to format.
- `format_string`: The format string to use.
- `return`: The formatted DOS time.


```rust
fn format_dos_time(std::time::DOSTime time, str format_string);
```

