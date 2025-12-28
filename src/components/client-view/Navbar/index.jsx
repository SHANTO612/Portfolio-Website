'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { FiHome, FiUser, FiMail } from "react-icons/fi";

const menuItems = [
  {
    id: "home",
    label: "Home",
    icon: <FiHome size={18} />,
  },
  {
    id: "about",
    label: "About",
    icon: <FiUser size={18} />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FiMail size={18} />,
  },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink, pathName }) {
  return getMenuItems.map((item) => {
    const className = `px-4 py-2 mx-2 cursor-pointer flex items-center gap-2 font-bold transition duration-200 ${
      activeLink === item.id
        ? "text-green-main"
        : "text-black hover:text-green-main"
    }`;

    if (item.id === "about") {
      return (
        <Link
          key={item.id}
          href="/about"
          onClick={() => setActiveLink(item.id)}
          className={className}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      );
    }

    if (item.id === "contact") {
      return (
        <Link
          key={item.id}
          href="/contact"
          onClick={() => setActiveLink(item.id)}
          className={className}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      );
    }

    if (pathName === "/") {
      return (
        <LinkScroll
          key={item.id}
          to={item.id}
          smooth
          duration={800}
          spy
          offset={-80}
          onSetActive={() => setActiveLink(item.id)}
          className={className}
        >
          {item.icon}
          <span>{item.label}</span>
        </LinkScroll>
      );
    }

    const href = item.id === "home" ? "/" : `/#${item.id}`;
    return (
      <Link
        key={item.id}
        href={href}
        onClick={() => setActiveLink(item.id)}
        className={className}
      >
        {item.icon}
        <span>{item.label}</span>
      </Link>
    );
  });
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const onScroll = () => setScrollActive(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===== TOP NAVBAR ===== */}
      <header
        className={`fixed top-0 w-full z-30 transition-all duration-300 ${
          scrollActive
            ? "bg-white/70 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 py-4 flex items-center justify-between">
          
          {/* LEFT: BRAND */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-green-main"
          >
            Al Fahad Shanto
          </Link>

          {/* RIGHT: MENU */}
          <ul className="hidden lg:flex items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
              pathName={pathName}
            />
          </ul>
        </nav>
      </header>

      {/* ===== MOBILE BOTTOM NAV ===== */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-md shadow-t">
        <ul className="flex justify-between items-center px-4 py-2">
          <CreateMenus
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            getMenuItems={menuItems}
            pathName={pathName}
          />
        </ul>
      </nav>
    </>
  );
}
