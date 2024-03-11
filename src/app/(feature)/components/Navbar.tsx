"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

const siteConfig = {
  name: "Sittipong",
  description: "Sittipong Hemloun's personal website",
  navItems: [
    {
      label: "หลักสูตร",
      href: "/curriculum",
    },
    {
      label: "เช็คโดยใช้ Transcript",
      href: "/upload-transcript",
    },
    {
      label: "เช็คโดยไม่ใช้ Transcript",
      href: "/fill-in",
    },
  ],
  navMenuItems: [
    {
      label: "หลักสูตร",
      href: "/curriculum",
    },
    {
      label: "เช็คโดยใช้ Transcript",
      href: "/upload-transcript",
    },
    {
      label: "เช็คโดยไม่ใช้ Transcript",
      href: "/fill-in",
    },
  ],
};

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu when a NavbarMenuItem is clicked
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // Open the menu when the NavbarMenu is opened
  const handleMenuToggleClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      position="sticky"
      className="bg-gradient-to-r from-green-700 to-green-900 text-white"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle onClick={handleMenuToggleClick} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href={"/"} className="font-bold text-xl text-inherit">
            KU Transcript
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        <NavbarBrand>
          <Link href={"/"} className="font-bold text-xl text-inherit">
            KU Transcript
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link href="/curriculum" className="relative">
            <div className="z-10">หลักสูตร</div>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/upload-transcript" className="relative">
            <div className="z-10">เช็คโดยใช้ Transcript</div>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/fill-in" className="relative">
            <div className="z-10">เช็คโดยไม่ใช้ Transcript</div>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              onClick={handleMenuItemClick}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
