"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  GithubIcon,
  HamburgerIcon,
  ChevronRight,
} from "lucide-react";
import { marketingConfig } from "@/config/marketing.config";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeToggler from "@/components/theme/toggler";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsConfig, type DocsNavItem } from "@/config/docs.config";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

function isCurrentPath(href: string | undefined, pathname: string) {
  if (!href) return false;

  const normalizedHref = href.replace(/\/$/, "") || "/";
  const normalizedPathname = pathname.replace(/\/$/, "") || "/";
  return normalizedHref === normalizedPathname;
}

function containsCurrentPath(item: DocsNavItem, pathname: string): boolean {
  return isCurrentPath(item.href, pathname)
    || item.items?.some((child) => containsCurrentPath(child, pathname))
    || false;
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const space = pathname.split("/").filter(Boolean)[0];
  const sections = docsConfig[space] ?? [];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="block md:hidden size-8">
        <HamburgerIcon className="mx-1" />
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle className="w-full text-left mb-2">
            <Link href="/">
              <h1 className="text-lg md:text-xl font-bold">
                {siteConfig.name}
              </h1>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col">
          {marketingConfig.map((item) => (
            <NavItemComponent
              key={item.title}
              title={item.title}
              href={item.href ?? ""}
              setOpen={setOpen}
            />
          ))}
        </div>
        <Separator className="my-2" />
        {sections.map((section) => (
          <MobileDocsSection
            key={section.title}
            title={section.title}
            items={section.items}
            pathname={pathname}
            setOpen={setOpen}
          />
        ))}
        {sections.length > 0 && <Separator className="my-2" />}
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            <a href={siteConfig.socials.github} target="_blank">
              <GithubIcon />
            </a>
          </Button>
          <ThemeToggler />
        </div>
      </SheetContent>
    </Sheet>
  );
}

const MobileDocsSection = ({
  title,
  items,
  pathname,
  setOpen,
}: {
  title: string;
  items: DocsNavItem[];
  pathname: string;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div className="flex flex-col">
      <p className="mt-3 py-1 text-xs font-semibold uppercase text-muted-foreground">
        {title}
      </p>
      {items.map((item) => (
        <MobileDocsItem
          key={item.href ?? item.segment}
          item={item}
          pathname={pathname}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
};

const MobileDocsItem = ({
  item,
  pathname,
  setOpen,
  depth = 0,
}: {
  item: DocsNavItem;
  pathname: string;
  setOpen: (open: boolean) => void;
  depth?: number;
}) => {
  const hasChildren = Boolean(item.items?.length);
  const isActiveBranch = hasChildren && containsCurrentPath(item, pathname);
  const [expanded, setExpanded] = useState(isActiveBranch);

  useEffect(() => {
    if (isActiveBranch) {
      setExpanded(true);
    }
  }, [isActiveBranch]);

  const row = item.href ? (
    <div className="relative">
      <NavItemComponent
        title={item.title}
        href={item.href}
        setOpen={setOpen}
        depth={depth}
        className={hasChildren ? "pr-8" : undefined}
      />
      {hasChildren && (
        <CollapsibleTrigger
          className="absolute top-0 right-0 flex size-7 items-center justify-center rounded-md hover:bg-accent [&[data-state=open]>svg]:rotate-90"
          aria-label={`${expanded ? "Collapse" : "Expand"} ${item.title}`}
        >
          <ChevronRight className="size-4 transition-transform" />
        </CollapsibleTrigger>
      )}
    </div>
  ) : hasChildren ? (
    <CollapsibleTrigger
      className="flex w-full items-center gap-1 py-1 text-sm font-semibold text-muted-foreground hover:text-foreground [&[data-state=open]>svg]:rotate-90"
      style={{ paddingLeft: `${depth * 0.75}rem` }}
    >
      <ChevronRight className="size-4 shrink-0 transition-transform" />
      <span className="truncate">{item.title}</span>
    </CollapsibleTrigger>
  ) : (
    <p
      className="py-1 text-sm font-semibold text-muted-foreground"
      style={{ paddingLeft: `${depth * 0.75}rem` }}
    >
      {item.title}
    </p>
  );

  if (!hasChildren) {
    return row;
  }

  return (
    <Collapsible open={expanded} onOpenChange={setExpanded}>
      {row}
      <CollapsibleContent className="flex flex-col">
        {item.items?.map((child) => (
          <MobileDocsItem
            key={child.href ?? `${item.segment}/${child.segment}`}
            item={child}
            pathname={pathname}
            setOpen={setOpen}
            depth={depth + 1}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

const NavItemComponent = ({
  title,
  href,
  setOpen,
  depth = 0,
  className,
}: {
  title: string;
  href: string;
  setOpen: (open: boolean) => void;
  depth?: number;
  className?: string;
}) => {
  const pathname = usePathname();
  const active =
    pathname === href || (pathname.startsWith(href) && href !== "/");

  return (
    <Link
      href={href}
      className={cn(
        "relative flex min-w-0 py-1 cursor-pointer",
        "transition-all duration-200 ease-out",
        className
      )}
      onClick={() => setOpen(false)}
      style={{ paddingLeft: `${depth * 0.75}rem` }}
      aria-current={isCurrentPath(href, pathname) ? "page" : undefined}
    >
      <span
        className={cn(
          "relative z-10 mix-blend-difference text-background dark:text-foreground/70",
          active ? "text-background dark:text-foreground font-semibold" : ""
        )}
      >
        {title}
      </span>
    </Link>
  );
};
