"use client";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Leftnavlinks = [
  { label: "Home", tilte: "Home", href: "/" },
  { label: "Our Menu", tilte: "Our Menu", href: "/menu" },
  { label: "Private Event", tilte: "Private Event", href: "/privateEvent" },
];

const RightnavLinks = [
  { label: "Gallery", tilte: "Gallery", href: "/gallery" },

  { label: "Our History", tilte: "Our History", href: "/history" },
  { label: "Contact Us", tilte: "Contact Us", href: "/contactUs" },
];

const Navbar = () => {
  const rightLinksRef = useRef<(HTMLLIElement | null)[]>([]);
  const leftLinksRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.from(rightLinksRef.current, {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power3.inOut",
    });
    gsap.from(leftLinksRef.current, {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power3.Out",
    });
  }, []);
  return (
    <nav className="flex items-center justify-between mx-[150px] backdrop-blur-3xl mt-4 fixed top-0 left-0 right-0 z-40">
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        {Leftnavlinks.map((link, i) => (
          <li key={link.href} ref={(el) => { rightLinksRef.current[i] = el; }}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Image
        src={"/logo.gif"}
        width={90}
        height={90}
        alt=""
        className="rounded-lg "
      />
      <div className="flex justify-center items-center gap-3">
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          {RightnavLinks.map((link, i) => (
            <li key={link.href} ref={(el) => { rightLinksRef.current[i] = el; }}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
