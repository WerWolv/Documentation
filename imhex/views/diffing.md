---
description: Comparing two sets of data with each other
---

# Diffing

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption><p>The Diffing View</p></figcaption></figure>

The Diffing View can find differences between two files, highlight them and create a list containing all differences.&#x20;

### Diffing

First of all, to diff the content of two providers, two providers must be opened. To compare these two providers with each other now, select the providers in the combo box at the top under `Provider A` and `Provider B`. This will open both files next to each other in two new hex editor views.

All bytes that differ from each other between the two providers will now be highlighted.

* `Yellow` marked bytes differ from each other in their value.
* `Green` marked bytes exist in Provider A but not in Provider B.
* `Red` marked bytes exist in Provider B but not in Provider A.

### Diffing Options

There's multiple diffing algorithms available in ImHex that can be chosen and configured by clicking on the Gear icon next to the provider selector.

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption><p>Diffing options</p></figcaption></figure>

* `Simple byte-by-byte algorithm` does a primitive byte-by-byte comparison. If the two bytes at the same address in the two providers differ from each other, they're highlighted in yellow
* `Myers's bit-vector algorithm` does a more advanced comparison trying to find inserted and removed byte regions besides just changes in the file. The Window size parameter specifies how many bytes to look ahead for possible insertions. \
  This algorithm is significantly slower than the primitive one, however it can also be much more useful.

### Differences list

The table below the two diffing hex views contains all differences between the two providers listed individually. Clicking on a row will jump to that location and select the region in both hex views.
