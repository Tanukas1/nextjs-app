"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";

// Only Nails page is live right now — rest point to '#' until their pages are built.
const SERVICES_MENU = [
    { id: 'nails', label: 'Nails', href: '/services/nails' },
    { id: 'hair', label: 'Hair', href: '/services/nails' },
    { id: 'beauty', label: 'Beauty', href: '/services/nails' },
    { id: 'facial', label: 'Facial', href: '/services/nails' },
    { id: 'body', label: 'Body', href: '/services/nails' },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            id="siteHeader"
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/95 backdrop-blur text-primary shadow-sm' : 'bg-transparent text-white'
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 pt-4 pb-2 md:px-10">
                <a href="#top" className="leading-none">
                    <img
                        className="w-32"
                        src="/assets/images/new/logo.png"
                        alt="KNK Awadh"
                    />
                </a>
                <div className="hidden items-center gap-9 text-[11px] tracking-[0.22em] uppercase lg:flex">
                    <Link
                        href="/"
                        className="relative transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="relative transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
                    >
                        About Us
                    </Link>

                    {/* Services — with dropdown, opens on hover */}
                    <div className="group relative">
                        <span
                            className="relative flex cursor-default items-center gap-1 transition-colors group-hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all group-hover:after:w-full"
                        >
                            Services
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mt-px transition-transform duration-200 group-hover:rotate-180"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </span>

                        <div className="invisible absolute left-0 top-full mt-3 w-40 rounded-xl bg-cream py-2 text-primary opacity-0 shadow-luxe normal-case tracking-normal transition-all duration-200 group-hover:visible group-hover:opacity-100">
                            {SERVICES_MENU.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className="block px-4 py-2 text-xs tracking-[0.1em] uppercase hover:bg-secondary hover:text-gold-deep"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <Link
                        href="/makeup"
                        className="relative transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
                    >
                        Makeup
                    </Link>
                    <Link
                        href="/gallery"
                        className="relative transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
                    >   Gallery
                    </Link>
                    <Link
                        href="/academy"
                        className="relative transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
                    >
                        Academy
                    </Link>
                    <Link
                        href="/skkin"
                        className="relative transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
                    >
                        SKKIN
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/book"
                        className="hidden rounded-full bg-gradient-gold px-6 py-3 text-[11px] tracking-[0.2em] uppercase text-primary shadow-luxe transition-transform hover:scale-105 sm:inline-block"
                    >
                        Book Now
                    </Link>
                    <button
                        id="menuBtn"
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="rounded-full border border-border p-2 lg:hidden"
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 5h16" />
                                <path d="M4 12h16" />
                                <path d="M4 19h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
            {/* mobile menu */}
            <div
                id="mobileMenu"
                className={`${menuOpen ? 'flex' : 'hidden'
                    } flex-col gap-1 border-t border-border bg-cream/95 backdrop-blur px-5 py-4 text-xs tracking-[0.2em] uppercase text-primary lg:hidden`}
            >
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-2 py-3 hover:bg-secondary"
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-2 py-3 hover:bg-secondary"
                >
                    About Us
                </Link>

                {/* Services — accordion on mobile */}
                <div>
                    <button
                        type="button"
                        onClick={() => setServicesOpen((prev) => !prev)}
                        aria-expanded={servicesOpen}
                        className="flex w-full items-center justify-between rounded-lg px-2 py-3 hover:bg-secondary"
                    >
                        Services
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>
                    {servicesOpen && (
                        <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                            {SERVICES_MENU.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => {
                                        setServicesOpen(false);
                                        setMenuOpen(false);
                                    }}
                                    className="rounded-lg px-2 py-2 text-[11px] hover:bg-secondary"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <Link
                    href="/makeup"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-2 py-3 hover:bg-secondary"
                >
                    Makeup
                </Link>
                <Link
                    href="/gallery"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-2 py-3 hover:bg-secondary"
                >
                    Gallery
                </Link>
                <Link
                    href="/academy"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-2 py-3 hover:bg-secondary"
                >
                    Academy
                </Link>
                <Link
                    href="/skkin"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-2 py-3 hover:bg-secondary"
                >
                    SKKIN
                </Link>
                <Link
                    href="/book"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 rounded-full bg-gradient-gold px-6 py-3 text-center text-primary"
                >
                    Book Now
                </Link>
            </div>
        </header>
    );
}
export default Navbar;