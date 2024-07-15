# provider
Library to interact with the currently loaded provider.

## Functions

### `hex::prv::get_information`

Queries information from the currently loaded provider. The kind of information that's available depends on the provider that's loaded

> **Available information**
> - File Provider
>   - `file_path() -> str`
>   - `file_name() -> str`
>   - `file_extension() -> str`
>   - `creation_time() -> time_t`
>   - `access_time() -> time_t`
>   - `modification_time() -> time_t`
>   - `permissions() -> u16`
> - Disk Provider
>   - `file_path() -> str`
>   - `sector_size() -> u128`
> - GDB Provider
>   - `ip() -> str`
>   - `port() -> u16`
> - Process Memory Provider
>   - `region_address(regionName) -> u64`
>   - `region_size(regionName) -> u64`
>   - `process_id() -> u32`
>   - `process_name() -> str`

- `category`: Information category
- `argument`: Extra argument to pass along


```rust
fn get_information(str category, str argument);
```

## Usage Examples

## 01. File Provider

### Prerequisites
> `Extras` > `Content Store` > `Libraries`
> - Download `Hex` & `Std`.
>
- assuming we have a file:
> - located in `C:/folder/`
> - named `hello_world.txt`
> - created on `2000/01/01 @ 12:00:00AM`
> - modified on `2010/01/01 @ 12:00:00AM`
> - accessed on `2020/01/01 @ 12:00:00AM`

### Pattern Editor
```rust
import hex.provider;
import std.time;

struct file_provider
{
    str file_path = hex::prv::get_information("file_path");
    str file_name = hex::prv::get_information("file_name");
    str file_extension = hex::prv::get_information("file_extension");
    s32 creation_time = hex::prv::get_information("creation_time");
    s32 access_time = hex::prv::get_information("access_time");
    s32 modification_time = hex::prv::get_information("modification_time");
    u16 permissions = hex::prv::get_information("permissions");

    std::print("\nfile_path = {}\n\nfile_name = {}\n\nfile_extension = {}\n\ncreation_time = {}\n\ncreation_time (human readable) = {}\n\naccess_time = {}\n\naccess_time (human readable) = {}\n\nmodification_time = {}\n\nmodification_time (human readable) = {}\n\npermissions is {}\n",
        file_path,
        file_name,
        file_extension,
        creation_time,
        std::time::format(std::time::to_utc(creation_time)),
        modification_time,
        std::time::format(std::time::to_utc(modification_time)),
        access_time,
        std::time::format(std::time::to_utc(access_time)),
        permissions
    );
};

struct disk_provider
{
    // TBD
};

struct gdb_provider
{
    // TBD
};

struct process_memory_provider
{
    // TBD
};

struct library_hex_provider
{
    file_provider;
//    disk_provider;
//    gdb_provider;
//    process_memory_provider;
};

library_hex_provider example @$ [[name("hex::prv::get_information()")]];
```
### Expected Console Output
```
I: file_path = C:/folder/hello_world.txt

I: file_name = hello_world.txt

I: file_extension = .txt

I: creation_time = 95435965312

I: creation_time (human readable) = Sat Jan  1 00:00:00 2000

I: modification_time = 95751584512

I: modification_time (human readable) = Fri Jan  1 00:00:00 2010

I: access_time = 96067117312

I: access_time (human readable) = Wed Jan  1 00:00:00 2020

I: permissions is 438
```
## 02. Disk Provider

### TBD

## 03. GDB Provider

### TBD

## 04. Process Memory Provider

### TBD