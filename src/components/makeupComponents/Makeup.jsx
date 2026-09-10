"use client";

import React from "react";
import HeroSection from "./HeroSection";
import LooksGallery from "./LooksGallery";
import TrendyIntro from "./TrendyIntro";
import LookSpotlight from "./LookSpotlight";
import BannerImage from "./BannerImage";
import Services from "./Services";
import ServiceGrid from "./ServiceGrid";
import BeautyTips from "./BeautyTips";
import BookingSection from "./BookingSection";
import Testimonials from "./Testimonials";
import MakeupCTA from "./MakeupCTA";
import { bridalLooks, bannerImage, weddingImage } from "./Makeupdata";

function Makeup() {
    return (
        <div className="bg-[#fbf7f0]">
            <HeroSection />
            <LooksGallery />
            <TrendyIntro />

            {bridalLooks.map((look, i) => (
                <LookSpotlight key={look.title} look={look} shaded={i % 2 === 0} />
            ))}

            <BannerImage src={bannerImage} alt="KNK Makeup Studio banner" />

            <Services />
            <ServiceGrid />

            <BannerImage src={weddingImage} alt="Wedding makeup artist Lucknow" />

            <BookingSection />
            <Testimonials />
            <MakeupCTA />
        </div>
    );
}

export default Makeup;