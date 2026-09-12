"use client"

import { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { docsConfig, documentationRoots, type DocsNavItem } from "@/config/docs.config";

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

function SidebarNavItem({
  item,
  pathname,
  nested = false,
}: {
  item: DocsNavItem;
  pathname: string;
  nested?: boolean;
}) {
  const hasChildren = Boolean(item.items?.length);
  const isActive = isCurrentPath(item.href, pathname);
  const isActiveBranch = hasChildren && containsCurrentPath(item, pathname);
  const [open, setOpen] = useState(isActiveBranch);

  useEffect(() => {
    if (isActiveBranch) {
      setOpen(true);
    }
  }, [isActiveBranch]);

  const children = hasChildren ? (
    <CollapsibleContent asChild>
      <SidebarMenuSub className="mr-0 ml-3 px-0 pl-2">
      {item.items?.map((child) => (
        <SidebarNavItem
          key={child.href ?? `${item.segment}/${child.segment}`}
          item={child}
          pathname={pathname}
          nested
        />
      ))}
      </SidebarMenuSub>
    </CollapsibleContent>
  ) : null;

  if (nested) {
    const content = (
      <SidebarMenuSubItem>
        {item.href ? (
          <>
            <SidebarMenuSubButton
              asChild
              isActive={isActive}
              className={hasChildren ? "pr-8" : undefined}
            >
              <Link href={item.href} aria-current={isActive ? "page" : undefined}>
                <span>{item.title}</span>
              </Link>
            </SidebarMenuSubButton>
            {hasChildren && (
              <CollapsibleTrigger asChild>
                <SidebarMenuAction
                  className="top-1 right-0 [&[data-state=open]>svg]:rotate-90"
                  aria-label={`${open ? "Collapse" : "Expand"} ${item.title}`}
                >
                  <ChevronRight className="transition-transform" />
                </SidebarMenuAction>
              </CollapsibleTrigger>
            )}
          </>
        ) : hasChildren ? (
          <SidebarMenuSubButton asChild>
            <CollapsibleTrigger className="[&[data-state=open]>svg]:rotate-90">
              <ChevronRight className="transition-transform" />
              <span>{item.title}</span>
            </CollapsibleTrigger>
          </SidebarMenuSubButton>
        ) : (
          <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">
            {item.title}
          </div>
        )}
        {children}
      </SidebarMenuSubItem>
    );

    return hasChildren ? (
      <Collapsible asChild open={open} onOpenChange={setOpen}>
        {content}
      </Collapsible>
    ) : content;
  }

  const content = (
    <SidebarMenuItem>
      {item.href ? (
        <>
          <SidebarMenuButton asChild isActive={isActive}>
            <Link href={item.href} aria-current={isActive ? "page" : undefined}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
          {hasChildren && (
            <CollapsibleTrigger asChild>
              <SidebarMenuAction
                className="[&[data-state=open]>svg]:rotate-90"
                aria-label={`${open ? "Collapse" : "Expand"} ${item.title}`}
              >
                <ChevronRight className="transition-transform" />
              </SidebarMenuAction>
            </CollapsibleTrigger>
          )}
        </>
      ) : hasChildren ? (
        <SidebarMenuButton asChild>
          <CollapsibleTrigger className="[&[data-state=open]>svg]:rotate-90">
            <ChevronRight className="transition-transform" />
            <span>{item.title}</span>
          </CollapsibleTrigger>
        </SidebarMenuButton>
      ) : (
        <div className="flex h-8 items-center px-2 text-sm font-medium text-muted-foreground">
          {item.title}
        </div>
      )}
      {children}
    </SidebarMenuItem>
  );

  return hasChildren ? (
    <Collapsible asChild open={open} onOpenChange={setOpen}>
      {content}
    </Collapsible>
  ) : content;
}

function SidebarSection({
  title,
  items,
  pathname,
}: {
  title: string;
  items: DocsNavItem[];
  pathname: string;
}) {
  return (
    <SidebarGroup className="px-2 py-0.5">
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarNavItem
              key={item.href ?? item.segment}
              item={item}
              pathname={pathname}
            />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function AppSidebar() {
  const pathname = usePathname();
  const space = pathname.split("/").filter(Boolean)[0];
  const sections = [
    { title: "Documentation", items: documentationRoots },
    ...(docsConfig[space] ?? []),
  ];

  return (
    <Sidebar>
      <SidebarContent>
        {sections.map((section) => (
          <SidebarSection
            key={section.title}
            title={section.title}
            items={section.items}
            pathname={pathname}
          />
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
