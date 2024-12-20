"use client";

import Link from "next/link";
import { siteConfig } from "../../config/site";

export function Navbar() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold ">{siteConfig.name}</span>
      </Link>
    </div>
  );
}
