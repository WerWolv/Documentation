# Importing Modules

Patterns can be split into multiple files to better separate pattern code into logical sections. To import other files into the current file, pattern language provides two facilities: the `#include` directive and the `import` statement. Both will search for a given file inside the `includes` folder in pattern search paths. The default search paths are:

* The ImHex installation directory.
* The `AppData/Local/imhex` directory.
* Additional search paths. To add additional search paths go to `Extras > Settings > Folders` menu.

### `#include` directive

A [preprocessor directive](preprocessor.md). The preprocessor replaces this directive with all the lexical tokens from the included file _including_ all the preprocessor defines. On inclusion, this system maintains its own list of files marked with [`#pragma once`](importing-modules.md#include-guards).

To use the `#include` directive, specify a path to the file to include followed by the file extension. The path can be enclosed in double quotes (`"path/filename.extension"`) or pointy braces (`<path/filename.extension>`). The extension is optional. The `#include` directive looks for a file with extensions `.pat` and `.hexpat` if none is specified. However, by convention, the extension is specified when including files. Both of the following are valid ways to use the `#include` directive:

```rust
#include "std/io.pat"
#include <std/string.pat>
```

### `import` statement

The `import` statement is processed during the parsing stage. Once the parser encounters this statement, a separate parser is created to parse the imported file as a separate compilation unit. It's then inserted into the abstract syntax tree (AST) of the current file. The preprocessor defines _don't propagate_ when using the `import` statement.

The `import` keyword is followed by the path to the file to include with the dot (`.`) as the folder separator. The file extension will be resolved automatically. The statement looks for a file with extensions `.pat` and `.hexpat`. As with any other language statement, the line must end with a semicolon (`;`).

```rust
import sys.mem;
```

### `import as` statement

Libraries generally tend to place all their content under a specific namespace to prevent name collisions between different libraries. This however makes the code pretty verbose often.

To work around this, it's possible to change the namespace the types and functions are being imported into using the `as` keyword.

```cpp
import std.ctype;

char character @ 0x00;
if (std::ctype::isdigit(character)) {
    // ...
}


// --------------

import std.ctype as c;

char character @ 0x00;
if (c::isdigit(character)) {
    // ...
}
```

### `auto namespace`

Since a single library file can contain more than one namespace and it's not always desirable to dump the content of all these namespaces into the same renamed namespace, it's possible to specify which namespace should be the one imported and renamed if needed.

To do this, mark the namespace as `auto`:

```cpp
// std/ctype.pat

namespace auto std::ctype {

    // ...

}

namespace impl {

    // ...

}
```

```cpp
// Import the std::type namespace from the ctype.pat library file
// and rename the std::ctype namespace to test
import std.ctype as test; 
```

### Include guards

#### `#pragma once` directive

To prevent duplicate declarations, files meant for importing to other files can use the `#pragma once` directive to prevent multiple inclusions. **Important**, both `#include` directive and `import` statements keep their own list of files marked with `#pragma once`. That means when a file is included in the current file, and then transitively imported by importing a different file, the current file would get duplicate declarations. In other words, a file should only ever be included by using one of the systems: the `#include` directive or the `import` statement to prevent duplicate declarations.

#### Manual include guards

When using `#include`, you can write include guards manually using `#ifndef` and `#define` directives:

```C++
#ifndef FOO_HEXPAT
#define FOO_HEXPAT

// Pattern code

#endif
```

#### Importing standard library headers

The standard library headers all use the `import` statement internally, and as such should be imported using `import`.

```rust
import std.io;
import std.mem;
import type.float16;
```

_Note_ however, that this only pertains to standard library headers. Custom patterns can still import standard library headers while using `#include` for files that are part of the client project.

### Forward declarations.

The pattern language supports [forward declarations](data-types.md#forward-declaration).
