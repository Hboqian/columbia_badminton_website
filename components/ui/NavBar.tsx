"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
 
export const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/schedule">
          Schedule
        </Link>
        <Link href="/team">
          Team
        </Link>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact-us">Contact Us</HoveredLink>
            <HoveredLink href="/board">Executive Board</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}