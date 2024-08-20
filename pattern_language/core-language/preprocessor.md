# Preprocessor

The preprocessor works in a similar fashion to the one found in C/C++. All lines that start with a `#` symbol are treated as preprocessor directives and get evaluated before the syntax of the rest of the program gets analyzed.

### `#define`

```cpp
#define MY_CONSTANT 1337
```

This directive causes a find-and-replace to be performed. In the example above, the label `MY_CONSTANT` will be replaced with `1337` throughout the entire program without doing any sort of lexical analysis. This means the directive will be replaced even within strings. Additionally, if multiple defines are used, later find-and-replaces can modify expressions that got altered by previous ones.

### `#include`

```cpp
#include <mylibrary.hexpat>
```

This directive allows inclusion of other files into the current program. The content of the specified file gets copied directly into the current file. See [importing modules](importing-modules.md#include-directive) for more info.

### `#ifdef`, `#ifndef`, `#endif`

```cpp
#ifdef SOME_DEFINE
    u32 value @ 0x00;
#endif
```

These preprocessor instructions can check if a given define has been defined already. `#ifdef` includes all the content between it and its closing `#endif` instruction if the define given to it exists. `#ifndef` works the same as `#ifdef` but includes all its content if the given define does not exist.

### `#error`

```cpp
#error "Something went wrong!"
```

Throws a error during the preprocessing phase if reached. This is mostly helpful in combination with `#ifdef` and `#ifndef` to check on certain conditions.

### `#pragma`

```cpp
#pragma endian big
```

Pragmas are hints to the runtime to tell it how it should treat certain things.

The following pragmas are available:

#### `endian`

**Possible values:** `big`, `little`, `native` **Default:** `native`

This pragma overwrites the default endianness of all variables declared in the file.

#### `MIME`

**Possible values:** Any MIME Type string **Default:** `Unspecified`

This pragma specifies the MIME type of files that can be interpreted by this pattern. This is useful for automatically loading relevant patterns when a file is opened. The MIME type of the loaded file will be matched against the MIME type specified here and if it matches, a popup will appear asking if this pattern should get loaded.

#### `magic`

**Possible values:** A byte pattern in the form of `[ AA BB ?? D? ] @ 0x00`

This pragma specifies a binary pattern that is used to check the loaded data in order to determine if this pattern can be used to parse this data.

The pattern consists of two parts. The first one is a list of hexadecimal values where ? denotes a wildcard. This list is checked in order against the data, nibbles that are marked as wildcards are ignored and not compared. The second part is the hexadecimal value after the @ symbol which is interpreted as an address where to look for that pattern in the data.

#### `base_address`

**Possible values:** Any integer value **Default:** `0x00`

This pragma automatically adjusts the base address of the currently loaded file. This is useful for patterns that depend on a file being loaded at a certain address in memory.

#### `eval_depth`

**Possible values:** Any integer value **Default:** `32`

This pragma sets the evaluation depth of recursive functions and types. To prevent the runtime from crashing when evaluating infinitely deep recursive types, execution will stop prematurely if it detects recursion that is too deep. This pragma can adjust the maximum depth allowed.

#### `array_limit`

**Possible values:** Any integer value **Default:** `0x1000`

This pragma sets the maximum number of entries allowed in an array. To prevent the runtime using up a lot of memory when creating huge arrays, execution will stop prematurely if an array with too many entries is evaluated. This pragma can adjust the maximum number of entries allowed.

#### `pattern_limit`

**Possible values:** Any integer value **Default:** `0x2000`

This pragma sets the maximum number of patterns allowed to be created. To prevent the runtime using up a lot of memory when creating a lot of patterns, execution will stop prematurely if too many patterns exist simultaneously. This is similar to the `array_limit` pragma but catches smaller, nested arrays as well.

#### `once`

This pragma takes no value and simply marks the current file to only be includable once. This means if the file is being included multiple times, for example when it’s being included explicitly first and later on again inside of another included file, it will only be included the first time.

This is mainly useful to prevent functions, types and variables that are defined in that file, from being defined multiple times.

The `import` statement and `#include` directive each keep a separate list of files marked with `#pragma once`. That means that a set of headers using one system for importing should stick to it. See [Importing Modules](importing-modules.md) for more info.

#### `bitfield_order`

**Possible values:** `right_to_left`, `left_to_right` **Default:** `right_to_left`

This pragma overrides the default bitfield bit order. It works the same as the `[[left_to_right]]` and `[[right_to_left]]` attributes but is automatically applied to all created bitfields.

#### `debug`

This pragma enables the debug mode in the evaluator. This causes the following things to happen:

* Any scope push and pop will be logged to the console
* Any memory access will be logged to the console
* Any creation and assignment of variables will be logged to the console
* Any function call and their parameters will be logged to the console
* If an error occurs, the patterns that were already placed in memory will not be deleted
