# Binary Pattern

Binary Patterns are a sort of Regex search pattern for binary values.

The following characters are allowed:

* 0 - 9 / A - F: Fixed values that the current nibble needs to have
* ?: Wildcard value to match any value

As an example, let's take the Binary Pattern `AB ?? 5F ?A`. Searching for this pattern would look for any sequence of 4 bytes where the first byte has the value `0xAB`, the third byte the value `0x5F` and the fourth byte any value that has the lower nibble set to `0xA`. The second byte in the sequence can have any value as both nibbles are wildcarded.
