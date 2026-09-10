"use client";

import React from 'react';

function About() {
    return (
        <>
            {/* ============ INTRO / ABOUT ============ */}
            <section className="relative overflow-hidden  pb-16 pt-20 md:pt-24">
                <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="reveal">
                        {/* <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">
                            Since 2013
                        </p> */}
                        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                            A Luxury Studio Built on{" "}
                            <span className="italic">Experience &amp; Expertise</span>
                        </h2>

                        <p className="mt-5 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                            Since 2010
                        </p>
                        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                            Every service at KNK is delivered by senior stylists trained on
                            global techniques, using only premium products — so the result you
                            see today is the result you'll see next time too.
                        </p>
                        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                            <div>
                                <p className="font-display text-3xl text-gold-deep md:text-4xl">
                                    25k+
                                </p>
                                <p className="mt-1 text-[10px] tracking-[0.2em] uppercase text-muted">
                                    Happy Clients
                                </p>
                            </div>
                            <div>
                                <p className="font-display text-3xl text-gold-deep md:text-4xl">
                                    12+
                                </p>
                                <p className="mt-1 text-[10px] tracking-[0.2em] uppercase text-muted">
                                    Years Experience
                                </p>
                            </div>
                            <div>
                                <p className="font-display text-3xl text-gold-deep md:text-4xl">
                                    4.9
                                </p>
                                <p className="mt-1 text-[10px] tracking-[0.2em] uppercase text-muted">
                                    Average Rating
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="reveal relative">
                        <div className="relative overflow-hidden rounded-[10rem_10rem_2rem_2rem] border border-gold-soft/60 shadow-luxe animate-floatSoft">
                            <img
                                src="assets/images/new/about.webp"
                                alt="KNK Salon client with a glossy blow-dry finish"
                                className="h-[28rem] w-full object-cover md:h-[36rem]"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-2 rounded-2xl border border-border bg-card/90 px-6 py-5 shadow-soft backdrop-blur md:-left-10">
                            <p className="font-display text-2xl text-gold-deep">Open Today</p>
                            <p className="text-xs text-muted">10:00 AM – 8:30 PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
export default About;