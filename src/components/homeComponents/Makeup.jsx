"use client";

import React, { useEffect, useRef, useState } from 'react';
const services = [
    {
        name: 'Haircuts',
        file: '/assets/images/new/home/services/haircut.webp',
        direction: 'top-left'
    },
    {
        name: 'Hair Colour',
        file: '/assets/images/new/home/services/hair-color.webp',
        direction: 'top'
    },
    {
        name: 'Hair Spa',
        file: '/assets/images/new/home/services/hairspa.webp',
        direction: 'top-right'
    },
    {
        name: 'Facials',
        file: '/assets/images/new/home/services/facial.webp',
        direction: 'bottom-left'
    },
    {
        name: 'Nails',
        file: '/assets/images/new/home/services/nails.webp',
        direction: 'bottom'
    },
    {
        name: "Men's Grooming",
        file: '/assets/images/new/home/services/mensgrooming.webp',
        direction: 'bottom-right'
    },
];

// Pixel offsets for each entrance direction — applied via inline style,
// so the transform is guaranteed to render (not dependent on Tailwind's
// JIT scanner picking up dynamically-referenced arbitrary-value classes).
const directionOffsets = {
    'top-left': { x: -35, y: -35 },
    top: { x: 0, y: -35 },
    'top-right': { x: 35, y: -35 },
    'bottom-left': { x: -35, y: 35 },
    bottom: { x: 0, y: 35 },
    'bottom-right': { x: 35, y: 35 },
};

function Makeup() {
    const [visible, setVisible] = useState(() => services.map(() => false));
    const tileRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const idx = Number(entry.target.dataset.index);
                    if (entry.isIntersecting) {
                        // Wait two frames so the browser paints the initial
                        // (offset/hidden) state first — otherwise, for tiles
                        // already in view on page load, React + the browser
                        // can skip straight to the final state with no visible animation.
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                setVisible((prev) => {
                                    if (prev[idx]) return prev;
                                    const next = [...prev];
                                    next[idx] = true;
                                    return next;
                                });
                            });
                        });
                    } else {
                        // Leaving the viewport — reset so the animation
                        // replays the next time it scrolls back into view.
                        setVisible((prev) => {
                            if (!prev[idx]) return prev;
                            const next = [...prev];
                            next[idx] = false;
                            return next;
                        });
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
        );

        tileRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section
                id="makeup"
                className="relative overflow-hidden bg-[#f3ede5] py-20 sm:py-12 lg:py-24"
            >
                {/* Background Decorative Text */}
                <div className="pointer-events-none absolute -bottom-10 right-[-30px] select-none font-['Cormorant_Garamond'] text-[180px] leading-none text-[#d8c9b7]/40 sm:text-[240px] lg:text-[320px]">
                    FACE
                </div>
                <div className="mx-auto max-w-[1440px] items-center gap-14 px-4 sm:px-6 lg:gap-20 lg:px-10 xl:px-12">

                    <div className="mx-auto max-w-[1280px]">

                        {/* =================================================
                            HEADER — heading left, description right (parallel)
                        ================================================== */}
                        <div className="grid gap-10 text-left lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
                            <div>
                                {/* Eyebrow */}
                                <p className="font-['Inter'] text-[9px] font-medium uppercase tracking-[0.35em] text-[#a17b5a]">
                                    Makeup / Artistry
                                </p>
                                {/* Heading */}
                                <h2 className="mt-5 font-['Cormorant_Garamond'] text-[56px] font-medium leading-[0.9] tracking-[-0.03em] text-[#29231f] sm:text-[68px] md:text-[80px] lg:text-[84px]">
                                    Your face.
                                    <br />
                                    <span className="italic text-[#b58a52]">Your canvas.</span>
                                </h2>
                                {/* Gold divider */}
                                <div className="mt-7 flex items-center gap-3">
                                    <span className="h-[2px] w-16 bg-[#b58a52]" />
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#b58a52]" />
                                    <span className="h-px w-10 bg-[#d0bda4]" />
                                </div>
                            </div>
                            {/* Description */}
                            <p className="border-l border-[#d7cab9] pl-8 font-['Inter'] text-[13px] leading-[1.9] text-[#71665c] sm:text-[14px]">
                                Makeup should enhance what makes you uniquely beautiful. Our
                                artists create refined, personalised looks for brides,
                                celebrations, photoshoots and every occasion where you want to
                                feel your absolute best.
                            </p>
                        </div>

                        {/* =====================================================
                            REMAINING CONTENT (centered)
                        ====================================================== */}
                        <div className="mx-auto mt-14 max-w-[1280px] text-center">
                            {/* =================================================
                                SERVICES — photo tile gallery
                            ================================================== */}
                            <p className="font-['Cormorant_Garamond'] text-[26px] italic text-[#8e6e50]">
                                All things beauty &amp; grooming.
                            </p>
                            <div className="mx-auto mt-6 grid max-w-[1200px] grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:gap-5">
                                {services.map((service, idx) => {
                                    const offset = directionOffsets[service.direction];
                                    const isVisible = visible[idx];
                                    return (
                                        <a
                                            key={service.name}
                                            ref={(el) => (tileRefs.current[idx] = el)}
                                            data-index={idx}
                                            href="#services"
                                            className="service-tile group relative block w-full h-[450px] overflow-hidden"
                                            style={{
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible
                                                    ? 'translate(0px, 0px)'
                                                    : `translate(${offset.x}px, ${offset.y}px)`,
                                                transitionProperty: 'transform, opacity',
                                                transitionDuration: '800ms',
                                                transitionTimingFunction: 'ease-out',
                                                transitionDelay: isVisible ? `${idx * 120}ms` : '0ms',
                                                willChange: 'transform, opacity',
                                            }}
                                        >
                                            <img
                                                src={service.file}
                                                alt={service.name}
                                                loading="lazy"
                                                className="service-tile-photo h-full w-full object-cover"
                                            />
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211a15]/85 via-[#211a15]/10 to-transparent transition-opacity duration-500 group-hover:from-[#211a15]/90" />
                                            <span className="pointer-events-none absolute bottom-0 left-0 right-0 border-t border-white/0 p-2.5 text-left transition-all duration-500 group-hover:border-white/20">
                                                <span className="block font-['Cormorant_Garamond'] text-[15px] italic leading-tight text-white sm:text-[16px]">
                                                    {service.name}
                                                </span>
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                            {/* =================================================
                                    EXPERIENCE CARD
                                ================================================== */}
                            <div className="mx-auto mt-10 flex max-w-[520px] flex-col gap-5 border-y border-[#d7cab9] py-5 text-left sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="font-['Cormorant_Garamond'] text-[23px] italic text-[#8e6e50]">
                                        The KNK Experience
                                    </p>
                                    <p className="mt-1 font-['Inter'] text-[8px] uppercase tracking-[0.15em] text-[#91847a]">
                                        Personalised · Refined · Effortless
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] text-[#b58a52]">★★★★★</span>
                                    <span className="font-['Inter'] text-[8px] uppercase tracking-[0.15em] text-[#81766d]">
                                        Signature Glam
                                    </span>
                                </div>
                            </div>
                            {/* =================================================
                                CTA
                            ================================================== */}
                            <div className="mt-9 flex flex-wrap items-center justify-center gap-7">
                                <a
                                    href="#book"
                                    className="group inline-flex items-center gap-4 bg-[#29231f] px-7 py-4 font-['Inter'] text-[8px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#b58a52] hover:shadow-[0_15px_35px_rgba(181,138,82,0.25)]"
                                >
                                    <span>Book Your Makeup</span>
                                    <span className="text-[16px] transition-transform duration-300 group-hover:translate-x-2">
                                        ↗
                                    </span>
                                </a>
                                <a
                                    href="#services"
                                    className="group inline-flex items-center gap-3 font-['Inter'] text-[8px] font-medium uppercase tracking-[0.2em] text-[#806f61]"
                                >
                                    View Makeup Services
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n\n    /* ---------------------------------------------\n       SERVICE TILES — HOVER ZOOM\n    --------------------------------------------- */\n\n    .service-tile-photo {\n\n      transform: scale(1);\n\n      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n\n    }\n\n    .service-tile:hover .service-tile-photo {\n\n      transform: scale(1.08);\n\n    }\n\n\n    /* ---------------------------------------------\n       REDUCE MOTION\n    --------------------------------------------- */\n\n    @media (prefers-reduced-motion: reduce) {\n\n      .service-tile-photo {\n\n        transition: none;\n\n      }\n\n    }\n\n  "
                }}
            />
        </>

    );
}
export default Makeup;