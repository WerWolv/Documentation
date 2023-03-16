---
description: Managing changes made to the data
---

# Patches

<figure><img src="../.gitbook/assets/imhex_8PCsBsQy0Z.png" alt=""><figcaption><p>The Patches View</p></figcaption></figure>

The patches view contains a simple list of all changes that have been made to the data but weren't yet written back. Whenever changes are being made to buffered data, they aren't directly written back but instead end up in the patches list where they can be reviewed and reverted if necessary.

The list consists of three columns: The address where the change has been made, the original value at that address and the patched value.&#x20;

In order to revert back a change, simply right click it in the list and select `Remove patch`.

### Saving Patches

Patches can also be written back to the original data. To do this, use the `File -> Save` or `File -> Save as...` option or `CTRL + S`.

### Exporting Patches

Instead of writing the patches back to the data directly, it's also possible to export them through `File -> Export...`. The options found there are able to create patch files in various different popular formats.

Currently supported formats are:

* IPS
* IPS32
