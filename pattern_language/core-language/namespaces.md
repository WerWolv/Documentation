---
description: Isolating functions and types
---

# Namespaces

Namespaces provide a way to encapsulate and group multiple similar types together. They also allow for multiple types in different namespaces to be named the same without interfering with each other.

```cpp
namespace abc {

    struct Type {
        u32 x;
    };

}

abc::Type type1 @ 0x100;

using Type = abc::Type;
Type type2 @ 0x200;
```

To access a type within a namespace, the scope resolution operator `::` is used. In the example above, to access the type `Type` inside the namespace `abc`, `abc::Type` is used.

## Nested and Reopened Namespaces

You can also define **nested namespaces** and reopen them later. This is especially useful for organizing internal constants and helper logic related to the main types, while keeping them encapsulated.

```cpp
namespace game {

    struct User {
        u32 id;
        u32 age;
    } [[format("game::impl::format_user")]];

    namespace impl {
        fn format_user(User user) {
            return std::format("User({}, {})", user.id, user.age);
        };
    }

    struct Score {
        u32 points;
        u32 level;
    } [[format("game::impl::format_score")]];

    namespace impl {
        fn format_score(Score score) {
            return std::format("Score({}, {})", score.points, score.level);
        };
    }

}
```

These separate blocks both add to the same `game::impl` namespace. This provides a clean separation between public type definitions and internal helper logic and improves readablity.
