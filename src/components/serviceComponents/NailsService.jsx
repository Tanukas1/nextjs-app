"use client";

import React, { useState } from "react";
import { Eyebrow, GoldDivider } from "./ServiceUI";
import { services } from "./servicesData";
import ProcessSteps from "./ProcessSteps";
import ServicesCTA from "./ServicesCTA";

const nailServices = services.filter((s) => s.category === "Nails");

const nailMenu = {
    "Nail Extensions": {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M9 3c-2 3-3 7-3 10a6 6 0 0 0 12 0c0-3-1-7-3-10" />
                <path d="M9 3c1 1.5 1.5 3.2 1.5 5" />
            </svg>
        ),
        items: [
            "Nail Cut",
            "Nail Filing",
            "Nail Paint Application",
            "Gel Paint Removal",
            "Gel Paint Application",
            "Temporary Nail Extensions",
            "Gel Nail Extensions",
            "Acrylic Nail Extensions",
        ],
    },
    "Mani / Pedi": {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M12 3c-3 2-5 5-5 8a5 5 0 0 0 10 0c0-3-2-6-5-8Z" />
                <path d="M12 12v9" />
            </svg>
        ),
        items: ["Basic", "O3", "Alga", "Bombini", "Biscotti"],
    },
};


function NailCard({ service, index }) {
    return (
        <div className="group relative aspect-[3/4] overflow-hidden rounded-sm border-t-2 border-gold shadow-sm transition-shadow duration-500 hover:shadow-luxe">
            <img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />

            {/* index number, top-right */}
            <span className="absolute right-4 top-4 font-display text-xs italic text-cream/70">
                {String(index + 1).padStart(2, "0")}
            </span>

            <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="h-px w-8 bg-gold block mb-3 transition-all duration-500 group-hover:w-14" />
                <h3 className="font-display text-2xl italic font-medium leading-tight text-cream">
                    {service.title}
                </h3>
                <p className="mt-2 max-w-[26ch] font-sans text-[12px] leading-relaxed text-cream/75">
                    {service.desc}
                </p>
                <a
                    href="tel:+919559321711"
                    className="mt-4 inline-flex max-h-0 items-center gap-2 overflow-hidden font-sans text-[10px] tracking-[0.2em] uppercase text-gold opacity-0 transition-all duration-300 group-hover:max-h-6 group-hover:opacity-100"
                >
                    Book This
                    <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    );
}

function TreatmentMenu() {
    const categories = Object.keys(nailMenu);
    const [active, setActive] = useState(categories[0]);
    const activeData = nailMenu[active];

    return (
        <div className="relative mx-auto mt-20 max-w-4xl">
            <div className="relative border border-gold/40 bg-cream px-6 py-12 sm:px-10 md:px-16 md:py-16">
                <span aria-hidden="true" className="absolute left-0 top-0 h-6 w-6 border-l border-t border-gold" />
                <span aria-hidden="true" className="absolute right-0 top-0 h-6 w-6 border-r border-t border-gold" />
                <span aria-hidden="true" className="absolute left-0 bottom-0 h-6 w-6 border-l border-b border-gold" />
                <span aria-hidden="true" className="absolute right-0 bottom-0 h-6 w-6 border-r border-b border-gold" />

                <p className="text-center font-display italic text-3xl text-gold-deep">
                    The full menu
                </p>
                <GoldDivider center />

                {/* Tabs */}
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => {
                        const isActive = cat === active;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`group flex items-center gap-2 rounded-full border px-5 py-2.5 font-sans text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${
                                    isActive
                                        ? "border-gold bg-gold text-cream shadow-luxe"
                                        : "border-border text-muted hover:border-gold hover:text-gold-deep"
                                }`}
                            >
                                <span className={`h-4 w-4 ${isActive ? "text-cream" : "text-gold"}`}>
                                    {nailMenu[cat].icon}
                                </span>
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {/* Editorial list */}
                <div className="mt-12 grid gap-x-12 gap-y-1 sm:grid-cols-2">
                    {activeData.items.map((item, i) => (
                        <div
                            key={item}
                            className="group relative flex items-baseline gap-4 py-4"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-0 h-px w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full"
                            />
                            <span className="font-display text-sm italic text-gold-deep">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-display text-lg text-ink transition-colors duration-300 group-hover:text-gold-deep sm:text-xl">
                                {item}
                            </span>
                            <span
                                aria-hidden="true"
                                className="ml-auto text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            >
                                &#10022;
                            </span>
                            <span
                                aria-hidden="true"
                                className="absolute inset-x-0 bottom-0 h-px bg-border/60"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="tel:+919559321711"
                        className="inline-flex items-center justify-center bg-gold text-cream font-sans text-[11px] tracking-[0.2em] uppercase px-8 py-4 rounded-full shadow-luxe transition-transform duration-300 hover:scale-105"
                    >
                        Book {active}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function NailsService() {
    return (
        <div className="bg-cream">
            {/* Hero */}
            <section className="relative overflow-hidden px-6 pt-20 pb-20 md:pt-28 md:pb-24">
                <div
                    aria-hidden="true"
                    className="fixed inset-x-0 top-0 h-24 bg-primary z-40 pointer-events-none"
                />
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full text-ink opacity-[0.05]"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <pattern id="nailsJaali" width="60" height="52" patternUnits="userSpaceOnUse">
                            <path d="M30 4 L56 26 L30 48 L4 26 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#nailsJaali)" />
                </svg>

                <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                    <div className="relative z-10 max-w-[600px]">
                        <Eyebrow>Nails</Eyebrow>
                        <h1 className="mt-6 font-display text-[64px] font-medium leading-[0.8] tracking-[-0.05em] text-ink sm:text-[78px] md:text-[92px] lg:text-[88px] xl:text-[105px]">
                            Nails,
                            <br />
                            <span className="italic text-gold">done right.</span>
                        </h1>
                        <GoldDivider />
                        <p className="mt-7 max-w-[500px] font-sans text-[13px] leading-[1.9] text-muted sm:text-[14px]">
                            Gel, acrylic, extensions or a simple mani-pedi — every nail
                            service handled by an artist trained for precision and finish.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="tel:+919559321711"
                                className="inline-flex items-center justify-center bg-gold text-cream font-sans text-[11px] tracking-[0.2em] uppercase px-8 py-4 rounded-full shadow-luxe transition-transform duration-300 hover:scale-105"
                            >
                                Book Now
                            </a>
                            <a
                                href="#nail-services"
                                className="inline-flex items-center justify-center border border-gold text-gold-deep font-sans text-[11px] tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-colors hover:bg-gold/10"
                            >
                                View Nail Services
                            </a>
                        </div>
                    </div>

                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxe border border-border">
                        <img
                            src="/assets/images/new/home/NAILS.webp"
                            alt="KNK Awadh nail artist at work"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Our nail services */}
            <section id="nail-services" className="px-6 py-20 md:py-28 bg-secondary">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-[600px] mx-auto text-center mb-14">
                        <Eyebrow>What We Do</Eyebrow>
                        <h2 className="mt-6 font-display text-[48px] font-medium leading-[0.9] tracking-[-0.05em] text-ink sm:text-[60px] md:text-[68px]">
                            Our nail <span className="italic text-gold">services.</span>
                        </h2>
                        <GoldDivider center />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {nailServices.map((service, i) => (
                            <NailCard key={service.title} service={service} index={i} />
                        ))}
                    </div>

                    <TreatmentMenu />
                </div>
            </section>

            <ProcessSteps />
            <ServicesCTA />
        </div>
    );
}