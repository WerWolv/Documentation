"use client";

import React from "react";
import { marketingConfig } from "@/config/marketing.config";
import ThemeToggler from "@/components/theme/toggler";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { CommandMenu } from "./command-menu";
import MobileNav from "./mobile";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full py-3 px-2 border-b">
      <MobileNav />
      <div className="flex items-center">
        <div className="relative items-center hidden md:flex gap-2">
          <SidebarTrigger />
          {marketingConfig.map((item) => (
            <NavItemComponent
              key={item.title}
              title={item.title}
              href={item.href ?? ""}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <CommandMenu />
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" asChild>
            <a href={siteConfig.socials.github} target="_blank">
              <GithubIcon />
            </a>
          </Button>
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
}

const NavItemComponent = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  const pathname = usePathname();
  const active =
    pathname === href || (pathname.startsWith(href) && href !== "/");

  return (
    <Link
      href={href}
      className={cn(
        "shrink-0 whitespace-nowrap px-3 py-2 text-sm transition-colors",
        active
          ? "text-foreground font-semibold"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {title}
    </Link>
  );
};
