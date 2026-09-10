"use client";

import React from 'react';

function Faq() {
    return (
        <>
            <section
                id="faq"
                className="relative overflow-hidden bg-[#f8f6f1] py-20 sm:py-24 lg:py-28"
            >
                {/* Decorative background */}
                <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#c49a4d]/5 blur-3xl" />
                <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#9e7785]/5 blur-3xl" />
                <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
                    {/* ================= HEADER ================= */}
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                        <div className="reveal">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#c49a4d]" />
                                <span className="font-['Inter'] text-[10px] font-medium uppercase tracking-[0.35em] text-[#a47a59]">
                                    FAQ
                                </span>
                            </div>
                            <h2 className="font-['Cormorant_Garamond'] text-[52px] font-medium leading-[0.9] tracking-[-0.04em] text-[#29231f] sm:text-[68px] lg:text-[82px]">
                                Questions,
                                <br />
                                <span className="italic text-[#c49a4d]">answered.</span>
                            </h2>
                        </div>
                        <div className="max-w-xl lg:ml-auto lg:pb-2">
                            <p className="font-['Inter'] text-[13px] leading-[1.9] text-[#6d645d]">
                                Everything you need to know before your visit. From appointments
                                and services to timings and salon experience — we've got you
                                covered.
                            </p>
                        </div>
                    </div>
                    {/* ================= FAQ LIST ================= */}
                    <div className="mt-14 border-t border-[#d8cbbd]">
                        {/* FAQ 01 */}
                        <div className="faq-item border-b border-[#d8cbbd]">
                            <button
                                type="button"
                                className="faq-question group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                                aria-expanded="false"
                            >
                                <div className="flex items-start gap-5">
                                    <span className="mt-1 font-['Inter'] text-[9px] tracking-[0.25em] text-[#b49a7b]">
                                        01
                                    </span>
                                    <span className="font-['Cormorant_Garamond'] text-[22px] font-medium text-[#332c27] transition-colors duration-300 group-hover:text-[#a47a59] sm:text-[25px]">
                                        Do I need to book an appointment?
                                    </span>
                                </div>
                                <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#cdbda9] text-[#8f6d4d] transition-all duration-300 group-hover:border-[#c49a4d] group-hover:bg-[#c49a4d] group-hover:text-white">
                                    <svg
                                        className="h-4 w-4 transition-transform duration-300"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </span>
                            </button>
                            <div className="faq-answer grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                <div className="overflow-hidden">
                                    <p className="max-w-3xl pb-7 pl-10 font-['Inter'] text-[13px] leading-[1.9] text-[#70665e] sm:pl-14">
                                        We recommend booking an appointment in advance, especially for
                                        bridal services, hair treatments and other premium services.
                                        This helps us reserve the right stylist and time specifically
                                        for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* FAQ 02 */}
                        <div className="faq-item border-b border-[#d8cbbd]">
                            <button
                                type="button"
                                className="faq-question group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                                aria-expanded="false"
                            >
                                <div className="flex items-start gap-5">
                                    <span className="mt-1 font-['Inter'] text-[9px] tracking-[0.25em] text-[#b49a7b]">
                                        02
                                    </span>
                                    <span className="font-['Cormorant_Garamond'] text-[22px] font-medium text-[#332c27] transition-colors duration-300 group-hover:text-[#a47a59] sm:text-[25px]">
                                        What hair services do you offer?
                                    </span>
                                </div>
                                <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#cdbda9] text-[#8f6d4d] transition-all duration-300">
                                    <svg
                                        className="h-4 w-4 transition-transform duration-300"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </span>
                            </button>
                            <div className="faq-answer grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                <div className="overflow-hidden">
                                    <p className="max-w-3xl pb-7 pl-10 font-['Inter'] text-[13px] leading-[1.9] text-[#70665e] sm:pl-14">
                                        Our hair menu includes professional styling, hair colour,
                                        balayage, keratin, hair spa, smoothening and other
                                        personalised hair treatments based on your hair needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* FAQ 03 */}
                        <div className="faq-item border-b border-[#d8cbbd]">
                            <button
                                type="button"
                                className="faq-question group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                                aria-expanded="false"
                            >
                                <div className="flex items-start gap-5">
                                    <span className="mt-1 font-['Inter'] text-[9px] tracking-[0.25em] text-[#b49a7b]">
                                        03
                                    </span>
                                    <span className="font-['Cormorant_Garamond'] text-[22px] font-medium text-[#332c27] transition-colors duration-300 group-hover:text-[#a47a59] sm:text-[25px]">
                                        Do you provide bridal makeup services?
                                    </span>
                                </div>
                                <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#cdbda9] text-[#8f6d4d] transition-all duration-300">
                                    <svg
                                        className="h-4 w-4 transition-transform duration-300"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </span>
                            </button>
                            <div className="faq-answer grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                <div className="overflow-hidden">
                                    <p className="max-w-3xl pb-7 pl-10 font-['Inter'] text-[13px] leading-[1.9] text-[#70665e] sm:pl-14">
                                        Yes. We offer bridal and occasion makeup designed around your
                                        features, outfit and overall look. We recommend scheduling
                                        bridal appointments ahead of your event date.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* FAQ 04 */}
                        <div className="faq-item border-b border-[#d8cbbd]">
                            <button
                                type="button"
                                className="faq-question group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                                aria-expanded="false"
                            >
                                <div className="flex items-start gap-5">
                                    <span className="mt-1 font-['Inter'] text-[9px] tracking-[0.25em] text-[#b49a7b]">
                                        04
                                    </span>
                                    <span className="font-['Cormorant_Garamond'] text-[22px] font-medium text-[#332c27] transition-colors duration-300 group-hover:text-[#a47a59] sm:text-[25px]">
                                        How long does a salon appointment take?
                                    </span>
                                </div>
                                <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#cdbda9] text-[#8f6d4d]">
                                    <svg
                                        className="h-4 w-4 transition-transform duration-300"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </span>
                            </button>
                            <div className="faq-answer grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                <div className="overflow-hidden">
                                    <p className="max-w-3xl pb-7 pl-10 font-['Inter'] text-[13px] leading-[1.9] text-[#70665e] sm:pl-14">
                                        Appointment duration depends on the service. Simple styling
                                        can be completed quickly, while colour, keratin, smoothening
                                        and bridal services may require more time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* FAQ 05 */}
                        <div className="faq-item border-b border-[#d8cbbd]">
                            <button
                                type="button"
                                className="faq-question group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                                aria-expanded="false"
                            >
                                <div className="flex items-start gap-5">
                                    <span className="mt-1 font-['Inter'] text-[9px] tracking-[0.25em] text-[#b49a7b]">
                                        05
                                    </span>
                                    <span className="font-['Cormorant_Garamond'] text-[22px] font-medium text-[#332c27] transition-colors duration-300 group-hover:text-[#a47a59] sm:text-[25px]">
                                        What are your salon timings?
                                    </span>
                                </div>
                                <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#cdbda9] text-[#8f6d4d]">
                                    <svg
                                        className="h-4 w-4 transition-transform duration-300"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </span>
                            </button>
                            <div className="faq-answer grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                <div className="overflow-hidden">
                                    <p className="max-w-3xl pb-7 pl-10 font-['Inter'] text-[13px] leading-[1.9] text-[#70665e] sm:pl-14">
                                        KNK Salon is open from Monday to Sunday, 10:00 AM to 8:30 PM.
                                        For special appointments, please contact the salon team in
                                        advance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* FAQ 06 */}
                        <div className="faq-item border-b border-[#d8cbbd]">
                            <button
                                type="button"
                                className="faq-question group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                                aria-expanded="false"
                            >
                                <div className="flex items-start gap-5">
                                    <span className="mt-1 font-['Inter'] text-[9px] tracking-[0.25em] text-[#b49a7b]">
                                        06
                                    </span>
                                    <span className="font-['Cormorant_Garamond'] text-[22px] font-medium text-[#332c27] transition-colors duration-300 group-hover:text-[#a47a59] sm:text-[25px]">
                                        How can I book my appointment?
                                    </span>
                                </div>
                                <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#cdbda9] text-[#8f6d4d]">
                                    <svg
                                        className="h-4 w-4 transition-transform duration-300"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </span>
                            </button>
                            <div className="faq-answer grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                <div className="overflow-hidden">
                                    <p className="max-w-3xl pb-7 pl-10 font-['Inter'] text-[13px] leading-[1.9] text-[#70665e] sm:pl-14">
                                        You can book your appointment through the booking form on this
                                        website or contact the KNK Salon team directly to discuss your
                                        preferred service and time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================= BOTTOM CTA ================= */}
                    <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-[#d8cbbd] bg-[#f2ece3] px-7 py-7 sm:flex-row sm:items-center sm:px-9">
                        <div>
                            <p className="font-['Cormorant_Garamond'] text-2xl italic text-[#493e37]">
                                Still have a question?
                            </p>
                            <p className="mt-1 font-['Inter'] text-[11px] text-[#756b63]">
                                Our team will be happy to help you.
                            </p>
                        </div>
                        <a
                            href="#book"
                            className="group inline-flex items-center gap-4 rounded-full bg-[#29231f] px-7 py-3.5 font-['Inter'] text-[9px] font-medium uppercase tracking-[0.22em] text-[#fffaf3] transition-all duration-300 hover:bg-[#c49a4d] hover:shadow-lg"
                        >
                            <span>Book Appointment</span>
                            <span className="text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>

    );
}
export default Faq;