---
description: Hash selected regions of data using various different algorithms
---

# Hashes

<figure><img src="../.gitbook/assets/imhex_NcRQW1rOx5.png" alt=""><figcaption><p>The Hash View</p></figcaption></figure>

The Hash view allows you to instantiate multiple different hashing algorithms all with their own custom settings and automatically hash selected regions of bytes with them.

### Creating a hash function

To get started, simply select the Hash Function you're interested in from the `Hash function` combo box at the very top. If this function has any customizable settings, they will appear in the configuration box below. In the case of the CRC algorithms, it's possible to customize the polynomial, initial value and more.&#x20;

Once you're happy with your settings, give your hash function a descriptive name using the input text box below the configuration box and press the `+` button to add this new instance to the list of hashes.

To remove a hash again, right click it in the table and select `Remove hash`.

### Using the hashes

In order to hash a specific region of bytes, simply select them in the Hex Editor View. The Hash of these bytes will automatically get updated and displayed in the `Result` column in the hash view.&#x20;

&#x20;Hovering over a selected region in the Hex Editor View and holding down the `SHIFT` key will also open a tooltip popup with all the hash results in it.

<figure><img src="../.gitbook/assets/imhex_l878qdnQS0.png" alt=""><figcaption><p>Hash tooltip</p></figcaption></figure>

