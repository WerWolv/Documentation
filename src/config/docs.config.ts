import type { NavItem } from "@/types";
import { docs } from "#site/content";

export type DocsSection = {
  title: string;
  items: DocsNavItem[];
};

export type DocsNavItem = NavItem & {
  segment: string;
  items?: DocsNavItem[];
};

const rootOrder = ["imhex", "pattern-language"];

const sectionOrder: Record<string, string[]> = {
  imhex: ["common", "views", "misc"],
  "pattern-language": ["core-language", "libraries"],
};

const pageOrder: Record<string, string[]> = {
  "imhex/common": ["input-text-boxes", "binary-pattern", "providers", "fonts", "extending-imhex"],
  "imhex/views": [
    "hex-editor",
    "data-inspector",
    "bookmarks",
    "pattern-editor",
    "pattern-data",
    "data-information",
    "data-processor",
    "find",
    "diffing",
    "hashes",
    "tools",
    "patches",
    "yara",
  ],
  "imhex/misc": ["welcome-screen", "content-store", "settings", "layouts-and-workspaces"],
  "pattern-language/core-language": [
    "data-types",
    "variable-placement",
    "namespaces",
    "expressions",
    "functions",
    "control-flow",
    "in-out-variables",
    "attributes",
    "preprocessor",
    "importing-modules",
    "comments",
    "sections",
  ],
  "pattern-language/libraries": ["hex", "std", "type"],
  "pattern-language/libraries/hex": [
    "hex",
    "provider.pat",
    "core.pat",
    "http.pat",
    "dec.pat",
    "type",
  ],
  "pattern-language/libraries/hex/type": [
    "mangled.pat",
    "encstr.pat",
    "instruction.pat",
    "json.pat",
  ],
  "pattern-language/libraries/std": [
    "std",
    "array.pat",
    "limits.pat",
    "random.pat",
    "file.pat",
    "core.pat",
    "ptr.pat",
    "mem.pat",
    "math.pat",
    "hash.pat",
    "fxpt.pat",
    "sys.pat",
    "io.pat",
    "time.pat",
    "string.pat",
    "attrs.pat",
    "ctype.pat",
    "bit.pat",
  ],
  "pattern-language/libraries/type": [
    "type",
    "mac.pat",
    "ip.pat",
    "byte.pat",
    "path.pat",
    "size.pat",
    "base.pat",
    "guid.pat",
    "float16.pat",
    "bcd.pat",
    "leb128.pat",
    "time.pat",
    "fmt.pat",
    "color.pat",
    "types",
    "base64.pat",
    "magic.pat",
  ],
  "pattern-language/libraries/type/types": [
    "c.pat",
    "win32.pat",
    "010.pat",
    "linux.pat",
    "rust.pat",
  ],
};

const sectionTitles: Record<string, string> = {
  "core-language": "Core Language",
  common: "Common",
  views: "Views",
  misc: "Miscellaneous",
  libraries: "Libraries",
  _pages: "Pages",
};

const titleize = (value: string) =>
  value
    .replace(/\.(?:hex)?pat$/, "")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const compareWithOrder = (order: string[] | undefined, a: string, b: string) => {
  const indexA = order?.indexOf(a) ?? -1;
  const indexB = order?.indexOf(b) ?? -1;

  if (indexA !== -1 || indexB !== -1) {
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  }

  return titleize(a).localeCompare(titleize(b));
};

const docsByRoot = docs.reduce<Record<string, typeof docs>>((groups, doc) => {
  const root = doc.slugAsParams.split("/")[0];
  if (!root) return groups;

  groups[root] = groups[root] ?? [];
  groups[root].push(doc);
  return groups;
}, {});

const roots = Object.keys(docsByRoot).sort((a, b) => compareWithOrder(rootOrder, a, b));

export const documentationRoots: DocsNavItem[] = roots.map((root) => {
  const rootDoc = docsByRoot[root].find((doc) => doc.slugAsParams === root);
  const firstDoc = [...docsByRoot[root]].sort((a, b) =>
    a.slugAsParams.localeCompare(b.slugAsParams)
  )[0];

  return {
    segment: root,
    title: rootDoc?.title ?? titleize(root),
    href: `/${rootDoc?.slugAsParams ?? firstDoc.slugAsParams}`,
  };
});

const getSection = (segments: string[]) => {
  if (segments.length === 2) {
    return { key: "_pages", itemSegments: [segments[1]] };
  }
  if (segments[1] === "libraries" && segments[2]) {
    return {
      key: "libraries",
      itemSegments: segments.slice(2),
    };
  }
  return { key: segments[1], itemSegments: segments.slice(2) };
};

const addDocToTree = (
  items: DocsNavItem[],
  segments: string[],
  doc: (typeof docs)[number]
) => {
  let siblings = items;

  segments.forEach((segment, index) => {
    const isPage = index === segments.length - 1;
    let item = siblings.find((candidate) => candidate.segment === segment);

    if (!item) {
      item = { segment, title: segment.replaceAll("-", " ") };
      siblings.push(item);
    }

    if (isPage) {
      item.title = doc.title;
      item.href = `/${doc.slugAsParams}`;
    } else {
      item.items = item.items ?? [];
      siblings = item.items;
    }
  });
};

const sortNavItems = (items: DocsNavItem[], groupPath: string): DocsNavItem[] => {
  items.sort((a, b) => {
    const groupHref = `/${groupPath}`;
    if (a.href === groupHref) return -1;
    if (b.href === groupHref) return 1;
    return compareWithOrder(pageOrder[groupPath], a.segment, b.segment);
  });

  for (const item of items) {
    if (item.items) sortNavItems(item.items, `${groupPath}/${item.segment}`);
  }

  return items;
};

export const docsConfig: Record<string, DocsSection[]> = Object.fromEntries(
  roots.map((root) => {
    const sections = docsByRoot[root]
      .filter((doc) => doc.slugAsParams !== root)
      .reduce<Record<string, DocsNavItem[]>>((groups, doc) => {
        const segments = doc.slugAsParams.split("/");
        const { key, itemSegments } = getSection(segments);

        groups[key] = groups[key] ?? [];
        addDocToTree(groups[key], itemSegments, doc);
        return groups;
      }, {});

    return [
      root,
      Object.entries(sections)
        .sort(([a], [b]) => compareWithOrder(sectionOrder[root], a, b))
        .map(([key, items]) => ({
          title: sectionTitles[key] ?? titleize(key.split("/").at(-1) ?? key),
          items: sortNavItems(items, `${root}/${key}`),
        })),
    ];
  })
);
