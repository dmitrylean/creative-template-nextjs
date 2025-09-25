"use client";

import { useState } from "react";
// import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import Link from "next/link";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <div className="navbar">
        {/* Burger: Show only when menu is closed */}
        <button
          className="burger"
          aria-label="Open Menu"
          onClick={openMenu}
          style={{ display: isOpen ? "none" : undefined }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Cross: show only when menu is open */}
        <button
          className="close"
          aria-label="Close Menu"
          onClick={closeMenu}
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Logo */}
        <Link href="/" className="logo">
          Music Artist
        </Link>

        {/* Navigation */}
        <nav className={`menu ${isOpen ? "active" : ""}`}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/discography" onClick={closeMenu}>
            Music
          </Link>
          <Link href="/video" onClick={closeMenu}>
            Video
          </Link>
          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>
          <a href="#tour" onClick={closeMenu}>
            Tour
          </a>
          <a href="#store" onClick={closeMenu}>
            Store
          </a>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        {/* Icons 
        <div className="icon">
          <div className="search-icon">
            <FaSearch />
          </div>
          <div className="bag-icon">
            <FaShoppingBag />
            <span>$0.00</span>
          </div>
          <div className="login-icon">
            <FaUser />
            <span>Log In</span>
          </div>
        </div>
      </div> */}

        {/* Overlay */}
        <div
          className={`overlay ${isOpen ? "active" : ""}`}
          onClick={closeMenu}
        />
      </div>
    </header>
  );
};

export default NavBar;
