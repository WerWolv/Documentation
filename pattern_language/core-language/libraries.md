# Libraries

Not everything needs to be always rewritten from scratch. The Pattern Language supports importing libraries other people made and using the functions and types defined in them.

### import

The simplest way to use code from an external library is to `import` it.

```cpp
import std.io;
import type.guid;
```

These two lines will import the content of the `std/io.pat` and `type/guid.pat` files into the current program so its content can be accessed.&#x20;

### import as

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

#### auto namespace

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
