"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "./navigation";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Ana menü" className="hidden lg:block">
      <ul className="flex items-center gap-9">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(`${item.href}/`));

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative block py-2 text-[0.82rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
                  isActive
                    ? "text-gold-700"
                    : "text-ink-soft hover:text-gold-600"
                }`}
              >
                {item.label}
                {/* Altın çizgi — aktif menüde sürekli, hover'da soldan açılır */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gold-500 transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
