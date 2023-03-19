# time


## Types

### `std::time::DOSDate`

```rust
bitfield DOSDate { ... } [[sealed]];
```
### `std::time::DOSTime`

```rust
bitfield DOSTime { ... } [[sealed]];
```
### `std::time::EpochTime`

```rust
using EpochTime = u128;
```
### `std::time::Time`

```rust
struct Time { ... } [[sealed]];
```
### `std::time::TimeConverter`

```rust
union TimeConverter { ... };
```
### `std::time::TimeZone`

```rust
enum TimeZone : u8 {
    Local,
    UTC
};
```


## Functions

### `std::time::epoch`


```rust
fn epoch();
```
### `std::time::to_local`


```rust
fn to_local(std::time::EpochTime epoch_time);
```
### `std::time::to_utc`


```rust
fn to_utc(std::time::EpochTime epoch_time);
```
### `std::time::now`


```rust
fn now(std::time::TimeZone time_zone);
```
### `std::time::to_dos_date`


```rust
fn to_dos_date(u16 value);
```
### `std::time::to_dos_time`


```rust
fn to_dos_time(u16 value);
```
### `std::time::format`


```rust
fn format(std::time::Time time, str format_string);
```
### `std::time::format_dos_date`


```rust
fn format_dos_date(std::time::DOSDate date, str format_string);
```
### `std::time::format_dos_time`


```rust
fn format_dos_time(std::time::DOSTime time, str format_string);
```
