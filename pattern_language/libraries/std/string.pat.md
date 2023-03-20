# string


## Types

### `std::string::SizedString`

```rust
using SizedString<SizeType> =   std::string::SizedStringBase;
```
### `std::string::SizedString16`

```rust
using SizedString16<SizeType> =   std::string::SizedStringBase;
```
### `std::string::SizedStringBase`

```rust
struct SizedStringBase<, > { ... } [[sealed, format, transform]];
```


## Functions

### `std::string::length`


```rust
fn length( str string);
```
### `std::string::at`


```rust
fn at( str string,  u32 index);
```
### `std::string::substr`


```rust
fn substr( str string,  u32 pos,  u32 count);
```
### `std::string::parse_int`


```rust
fn parse_int( str string,  u8 base);
```
### `std::string::parse_float`


```rust
fn parse_float( str string);
```
### `std::string::to_string`


```rust
fn to_string( auto x);
```
### `std::string::starts_with`


```rust
fn starts_with( str string,  str part);
```
### `std::string::ends_with`


```rust
fn ends_with( str string,  str part);
```
### `std::string::contains`


```rust
fn contains( str a,  str b);
```
### `std::string::reverse`


```rust
fn reverse( str string);
```
### `std::string::to_upper`


```rust
fn to_upper( str string);
```
### `std::string::to_lower`


```rust
fn to_lower( str string);
```
### `std::string::replace`


```rust
fn replace( str string,  str pattern,  str replace);
```
