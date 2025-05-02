"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Leftnavlinks = [
  { label: "Home", href: "/" },
  { label: "Our Menu", href: "/menu" },
  { label: "Private Event", href: "/privateEvent" },
];

const RightnavLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Our History", href: "/history" },
  { label: "Contact Us", href: "/contactUs" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-[150px] py-4 fixed top-0 left-0 right-0 z-40 bg-white/60 backdrop-blur-xl bg-blue-200">
        {/* Left Nav (Desktop) */}
        <ul className="hidden md:flex gap-6 list-none">
          {Leftnavlinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Image
          src="/logo.gif"
          width={70}
          height={70}
          alt="Logo"
          className="rounded-lg"
        />

        {/* Right Nav (Desktop) */}
        <ul className="hidden md:flex gap-6 list-none">
          {RightnavLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Burger Menu Icon (Mobile + md only) */}
        <button
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={`fixed top-20 left-4 right-4 bg-white rounded-xl shadow-xl p-6 z-30 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-center text-lg">
          {[...Leftnavlinks, ...RightnavLinks].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
