# Extending ImHex

ImHex is highly customizable and extensible. This can be done in multiple ways.

## Plugins

Plugins are native code shared libraries that are loaded directly by ImHex at startup. Thanks to ImHex's structure, these can do exactly the same thing any built-in part of ImHex can do.&#x20;

Plugins are normally written in C++, however you may link in code from any other programming language as long as it can generate a static library.

To get started, check out the Plugin Template: [https://github.com/WerWolv/ImHex-Plugin-Template](https://github.com/WerWolv/ImHex-Plugin-Template)

{% hint style="info" %}
There's currently no complete documentation of all API functions since it evolves so quickly right now. Here's some hints where to get started though:

* Read through all the files in the ImHex-Plugin-Template repo. There's not many but they're packed with information on how things work.
* Read through the API definitions in libimhex: [libimhex/include/hex/api](https://github.com/WerWolv/ImHex/tree/master/lib/libimhex/include/hex/api)
* Join the ImHex Discord Server and ask for guidance there.
{% endhint %}

{% hint style="warning" %}
Plugins are highly dependent on the version of ImHex they've been built for. Don't expect a 1.33.0 plugin to work on 1.34.0.
{% endhint %}

After building a plugin, a `.hexplug` file is generated which can be placed in the `plugins` folder in the ImHex directory

## Scripts

Scripts are C# Assemblies that link to the ImHex dotnet library.&#x20;

These scripts have the ability to add or interface with certain often used functionalities but are much less powerful. The advantage of them compared to plugins however is that they are cross platform and don't depend on the version of ImHex.

{% hint style="info" %}
To get started with Scripts, download the [C# Template project](https://github.com/WerWolv/ImHex/tree/master/plugins/script\_loader/templates) and load it in your favorite C# IDE such as Visual Studio or Jetbrains Rider.
{% endhint %}

After building, simply put all generated `.dll` files in the `<ImHex Folder>/scripts/custom/dotnet/<Plugin Name>` folder. `Main.dll` is the main script file, if it contains a `Main()` function, it will show up in `Extras -> Run Script...` menu where it can be executed.

<figure><img src="../.gitbook/assets/image (17).png" alt=""><figcaption><p>Run Script Menu</p></figcaption></figure>
