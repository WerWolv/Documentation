# Importing modules

For better separation of pattern code into logical sections, we can use the facilities provided by the `import` statement. This statement will include other files in the current pattern. The `import` keyword is followed by the path to the included module with the dot (`.`) as the folder separator. The file extension will be resolved automatically. The statement will try to import a module with extensions `.pat` and `.hexpat`. It searches for a given module inside the `includes` folder in your pattern search paths. The default search path is in the `includes` folder inside ImHex's installation folder. Additional search paths can be added in the `Extras > Settings > Folders` menu.

```rust
import sys.mem;
```

## Include guards

Files that can be imported to other files need to have include guards to prevent multiple inclusions. To do that, use the `#pragma once` preprocessor directive. The `import` statement will respect that define.

## Importing standard library modules

Standard library modules bundled with ImHex have their include guards respected by the `import` statement, but not by the `#include` preprocessor directive. To use standard library modules import them using the `import` statement.

```rust
import std.io;
import std.mem;
import type.float16;
```
