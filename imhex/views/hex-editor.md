---
description: Viewing, editing and analysing binary data
---

# Hex Editor

The Hex Editor View is the most important View in ImHex. It displays the currently loaded data as a range of hexadecimal values and ASCII and lets you modify it.

<figure><img src="../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p>The Hex Editor View</p></figcaption></figure>

### Footer

The Hex Editor footer is the portion at the bottom of the hex editor window that contains basic information on the current selection and the loaded data. By default only the most important parts are visible, the rest is hidden and can be shown by clicking on the up arrow button in the middle.

<figure><img src="../.gitbook/assets/image (2) (1) (1).png" alt=""><figcaption><p>Full Hex Editor footer</p></figcaption></figure>

#### Information

* `Page` shows the currently visible data page and its region. By default the entire data is shown on one page but the size can be changed through `Edit -> Set page size`.
* `Selection` shows the start and end address as well as the size of the currently selected region
* `Region` shows the start and end address of the current page
* `Data Size` shows the base address as well as the size of the entire loaded data

#### Visualization options

<figure><img src="../.gitbook/assets/image (3) (1).png" alt=""><figcaption><p>Visualization Options</p></figcaption></figure>

**Upper case hex characters**

This option determines if ImHex uses upper- or lowercase letters to display hex values

<figure><img src="../.gitbook/assets/image (4) (1).png" alt=""><figcaption><p>Lower case hex characters</p></figcaption></figure>

**Gray out zeros**

This option enables or disables if ImHex should gray out all zero bytes in the editor.

<figure><img src="../.gitbook/assets/image (5) (1).png" alt=""><figcaption><p>Non-grayed out zeros</p></figcaption></figure>

**Display ASCII column**

This option shows or hides the ASCII column to the right of the bytes column

**Display advanced decoding column**

Enabling this option will show the advanced decoding column. By default this option is grayed out and only enabled when when a custom encoding has been loaded through `File -> Import -> Custom Encoding`.

<figure><img src="../.gitbook/assets/image (6).png" alt=""><figcaption><p>Bytes, ASCII and custom encoding column</p></figcaption></figure>

**Mini Map**

Enabling this option shows or hides the Mini Map next to the scroll bar.

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption><p>Mini Map visualizing local entropy</p></figcaption></figure>

The Mini Map shows information about hex editor lines in the current vicinity. Each colored line represents one row in the hex editor. By default the color corresponds to to the entropy of that line, the bluer the color, the higher the entropy. Other options can be specified through by right clicking the Mini Map icon and choosing a different visualizer in the popup.

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption><p>Mini Map settings popup</p></figcaption></figure>

**Convert sizes to human-readable units**

Enabling this option displays all sizes in the footer in human-readable form. For example instead of `143287488`, it will display `136.65 MiB`.

#### Data visualizers

Another option to customize the look of the Hex Editor is through cell visualizers. By default a 8 bit hex visualizer is used but many different ones are available such as decimals, floats or colors.

<figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption><p>Data visualizer options panel</p></figcaption></figure>

The dropdown in the middle selects the visualizer to be used and the toggle to the left of it determines if the (potentially multi-byte value) is interpreted in big or little endian format.

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption><p>Float visualizer</p></figcaption></figure>



<figure><img src="../.gitbook/assets/image (12).png" alt=""><figcaption><p>Color visualizer</p></figcaption></figure>

The slider all the way to the right changes the number of bytes to be displayed on a single row. Ctrl clicking it lets you enter an arbitrary number.

### Selections

To interact with the bytes in any way, they first need to be selected. To do that, click on one and optionally drag your mouse cursor to select bigger ranges of bytes. This can be done either on the main hexadecimal column or on the ASCII column.

Once a selection has been made, the current cursor can also be moved around using the arrow keys. Holding down SHIFT lets you select a range of bytes.

### Base Address

Through the use of the Edit -> Set base address option, ImHex can virtually load a file not at address 0x000000 but at any arbitrary address. This is mainly useful for analysing memory dumps that have been dumped from a specific address. Doing this will affect displayed addresses throughout all of ImHex.

<figure><img src="../.gitbook/assets/imhex_uuGD2v1ASw.png" alt=""><figcaption><p>Hex editor view with its base address changed to 0x1234</p></figcaption></figure>

### Selection Views

Sometimes files consist of multiple different parts in which case it might be easier to analyse each of these parts on their own. For these cases, Edit -> Open selection view takes all currently selected bytes and breaks them out into a new tab. This new tab contains a transparent view of only the selected bytes now and making modifications to them in one tab will automatically apply the same modifications in the other tab.

## Editing

To edit the value of a byte, simply double click it to enter editing mode. The value of the byte becomes highlighted and a new value can be entered. Once enough characters have been entered, the cursor automatically advances to the next cell so the next value can be entered. Notice how modified bytes are highlighted in red.

<figure><img src="../.gitbook/assets/imhex_L0V0YrFdWT.png" alt=""><figcaption><p>Modified bytes</p></figcaption></figure>

#### Size changing operations

Size changing operations include byte insertions, byte removal and resizing.

{% hint style="warning" %}
These operations are rarely needed when analysing or patching data since they can change the layout of the data and will most likely make it unreadable by other programs.
{% endhint %}

All of these operations can be found in the `Edit` main menu or in the Hex Editor's right-click menu.

<figure><img src="../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption><p>Operations in the edit menu</p></figcaption></figure>

A popup window will open asking for the start address of the operation and the number of bytes that will be affected. Clicking on `Set` executes it. In the case of the following image, `0x10` zero bytes will be inserted at address `0x1A0`. The Remove and Resize operation work similarly.

<figure><img src="../.gitbook/assets/imhex_4ONHkkK3j7.png" alt=""><figcaption></figcaption></figure>

{% hint style="danger" %}
As of v1.34.0, ImHex loads files that are smaller than 128MiB into memory and only writes back the modified data when saving.

Files that are larger than that will apply operations on the file directly. Operations can still be undone until ImHex is closed but be aware to make backups before modifying these files.
{% endhint %}

### Copy / Paste

These operations let you copy bytes in various ways and paste them back into the data later on. All copy and paste operations only operate on the currently selected bytes. Using `Edit -> Copy` on the following selection will copy the string `1B D2 E6` into the clipboard. Selecting only two other bytes now and using `Edit -> Paste` will paste `1B D2` at that selection and discard `E6`.

<figure><img src="../.gitbook/assets/imhex_c19kCFawA2.png" alt=""><figcaption><p>Three selected bytes</p></figcaption></figure>

#### Copy as...

The Copy as operation copies a formatted representation of the selected bytes into the clipboard. Possible representations are arrays in the syntax of various programming languages, as well as ASCII art, HTML and more.

Some Examples:

{% code title="C++ Array" %}
```cpp
constexpr std::array<uint8_t, 3> data = {
    0x1B, 0xD2, 0xE6
};
```
{% endcode %}

{% code title="Hex View" %}
```
Hex View  00 01 02 03 04 05 06 07  08 09 0A 0B 0C 0D 0E 0F
 
000000A0        1B D2 E6                                     ...
```
{% endcode %}

#### Paste All

Paste All always pastes all copied bytes, no matter of the number of currently selected bytes or if the file is big enough to hold all bytes. If there's not enough space left for all bytes after the current cursor position, the data will automatically be resized to fit it.

### Jump to

The jump to operation interprets the currently selected bytes (up to a max of 8 bytes) as a little endian unsigned number and jumps to that address. For example, selecting the bytes `45 00 00` and clicking `Jump to` will interpreted these bytes as the number `0x000045` and then jump to this address in the editor.

*
