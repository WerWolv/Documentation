---
description: The Pattern Language standard library
---

# std

The `std` library is the Pattern Language's very own standard library. It contains various different helper functions and types as well wrappers for built-in functions.&#x20;

{% hint style="danger" %}
**Never** use functions from the `builtin::` namespace directly! These functions are exposed by the runtime to provide native implementations of various functions.&#x20;

Instead, include the correct library file and use the functions defined in there. Failing to do so will result in your pattern randomly breaking between updates.
{% endhint %}

{% hint style="note" %}
The [`io`](./io.pat) and [`sys`](./sys.pat) modules define members in the bare `std::` namespace.
{% endhint %}
