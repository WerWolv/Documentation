---
description: Placing variables at a specific address into memory.
---

# Variable Placement

## Variable Placement

In order for the runtime to start decoding data, variables need to be placed somewhere in the binary data. To do this the variable placement syntax is used:

```rust
u32 myPlacedVariable @ 0x110;
```

This creates a new unsigned 32 bit variable named `myPlacedVariable` and place it at address `0x100`.

The runtime will now treat the 4 bytes starting at offset `0x100` as a u32 and decodes the bytes at this address accordingly.

&#x20;

<figure><img src="../.gitbook/assets/placement/data.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/placement/hex.png" alt=""><figcaption></figcaption></figure>

Placing variables isn’t limited to just built-in types. All types, even custom ones like structs, enums, unions, etc, can be placed.

### Global variables

Sometimes it’s necessary to store data globally while the pattern is running. For this global variables can be used. The syntax is the same as with placed variables but are missing the _@_ placement instruction at the end.

```rust
u32 globalVariable;
```

### Calculated pointers

The same placement syntax may also be used inside of structs to specify where patterns are supposed to be placed in memory. These variables do not contribute to the overall size of the struct they are placed within.
