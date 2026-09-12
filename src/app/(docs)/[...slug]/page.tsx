import { notFound } from "next/navigation";
import { docs } from "#site/content";

import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { siteConfig } from "@/config/site.config";
import { absoluteUrl, cn } from "@/lib/utils";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { DashboardTableOfContents } from "@/components/mdx/toc";

type DocPageProps = {
  slug: string[];
};

async function getDocFromParams({ params }: { params: Promise<DocPageProps> }) {
  const parameters = await params;
  const slug = parameters.slug?.join("/") || "";
  const doc = docs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: { params: Promise<DocPageProps> }): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  const ogImage = absoluteUrl(`/og/${doc.slugAsParams}.png`);

  return {
    title: `${doc.title} - ${siteConfig.name}`,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(`/${doc.slugAsParams}`),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${doc.title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams(): Promise<
  { slug: string[] }[]
> {
  return docs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({ params }: { params: Promise<DocPageProps> }) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  return (
    <main className="relative p-2 md:p-4 lg:py-6 lg:px-8 lg:gap-10 xl:grid xl:grid-cols-[1fr_200px]">
      <div className="w-full mx-auto min-w-0">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            {doc.slugAsParams.split("/").map((slug, index, segments) => {
              const href = `/${segments.slice(0, index + 1).join("/")}`;
              const isPage = index === segments.length - 1;
              const label = isPage
                ? doc.title
                : slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
              const hasPage = docs.some((candidate) => candidate.slugAsParams === href.slice(1));

              return (
                <div className="flex items-center gap-2" key={href}>
                  <BreadcrumbItem>
                    {!isPage && hasPage ? (
                      <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className={cn(!isPage && "text-muted-foreground")}>
                        {label}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {!isPage && <BreadcrumbSeparator />}
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight font-heading")}>
            {doc.title}
          </h1>
          {doc && (
            <p className="text-base text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <MDXContentRenderer code={doc.body} />
        </div>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-4">
          {doc.toc.visible && (
            <DashboardTableOfContents toc={doc.toc.content} />
          )}
        </div>
      </div>
    </main>
  );
}
