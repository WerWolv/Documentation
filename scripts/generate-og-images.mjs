import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import React from "react";
import { ImageResponse } from "next/og.js";

const root = process.cwd();
const outputDirectory = path.join(root, "public", "og");
const docs = JSON.parse(
  await readFile(path.join(root, ".velite", "docs.json"), "utf8")
);

const spaceTitles = Object.fromEntries(
  docs
    .filter((doc) => !doc.slugAsParams.includes("/"))
    .map((doc) => [doc.slugAsParams, doc.title])
);

const h = React.createElement;

function createImage({ title, description, slug }) {
  const space = slug?.split("/")[0];
  const section = spaceTitles[space] ?? "Documentation";
  const titleSize = title.length > 48 ? 52 : title.length > 30 ? 62 : 72;
  const verticalGridLines = Array.from({ length: 22 }, (_, index) =>
    h("div", {
      key: `vertical-${index}`,
      style: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: `${index * 56}px`,
        width: "1px",
        background: "#1a1a1d",
      },
    })
  );
  const horizontalGridLines = Array.from({ length: 12 }, (_, index) =>
    h("div", {
      key: `horizontal-${index}`,
      style: {
        position: "absolute",
        right: 0,
        left: 0,
        top: `${index * 56}px`,
        height: "1px",
        background: "#1a1a1d",
      },
    })
  );

  return h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        padding: "64px 72px",
        background: "#101011",
        color: "#f5f7fa",
        fontFamily: "sans-serif",
      },
    },
    ...verticalGridLines,
    ...horizontalGridLines,
    h(
      "div",
      {
        style: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        },
      },
      h(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#aeb7c6",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          },
        },
        h("div", {
          style: {
            width: "38px",
            height: "8px",
            background: "#d5d7df",
          },
        }),
        `WerWolv / ${section}`
      ),
      h(
        "div",
        {
          style: {
            width: "850px",
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            marginTop: "112px",
          },
        },
        h(
          "div",
          {
            style: {
              display: "flex",
              fontSize: `${titleSize}px`,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.035em",
            },
          },
          title
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              maxWidth: "790px",
              maxHeight: "96px",
              overflow: "hidden",
              color: "#b5b5bb",
              fontSize: "27px",
              lineHeight: 1.35,
            },
          },
          description
        )
      )
    )
  );
}

async function renderPng(data) {
  const response = new ImageResponse(createImage(data), {
    width: 1200,
    height: 630,
  });
  return Buffer.from(await response.arrayBuffer());
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

await writeFile(
  path.join(root, "public", "og.png"),
  await renderPng({
    title: "ImHex Documentation",
    description: "Documentation for ImHex and the ImHex Pattern Language.",
  })
);

for (const doc of docs) {
  const outputPath = path.join(outputDirectory, `${doc.slugAsParams}.png`);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(
    outputPath,
    await renderPng({
      title: doc.title,
      description: doc.description,
      slug: doc.slugAsParams,
    })
  );
}

console.log(`Generated ${docs.length + 1} Open Graph images.`);
