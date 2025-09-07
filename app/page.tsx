import AiNativeSection from "@/components/AINative";
import ClientSlider from "@/components/ClientSlider";
import LogosMarquee from "@/components/Companies";
import EndlessPossibilities from "@/components/EndlessPossibilities";
import FeatureTrioSection from "@/components/FeatureTrioSection";
import { HeroWithVideo } from "@/components/HeroWithVideo";
import { WhyFormsSection } from "@/components/Highlighter";
import InputLo from "@/components/InputLo";
import IntegrationsMinimal from "@/components/IntegrationMinimal";
import MainVisual from "@/components/MainVisual";
import LogoMarquee from "@/components/Partner";
import SocialProofCta from "@/components/SocialProof";
import { StatsCta } from "@/components/StatsCTA";
import TestimonialsSection from "@/components/TestimonialSectionBottom";
import TransformHero from "@/components/TransformHero";
import TrustTestimonials from "@/components/TrustedBy";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroWithVideo />
      <SocialProofCta />

      <FeatureTrioSection />
      <WhyFormsSection />
      <AiNativeSection />
      <EndlessPossibilities />
      <IntegrationsMinimal />
      {/* <ClientSlider /> */}
      <MainVisual />
      <StatsCta />
      <TestimonialsSection />
      <InputLo />
      {/* <TransformHero /> */}
      {/* <LogoMarquee /> */}
      <LogosMarquee />
      {/* <TrustTestimonials /> */}
    </div>
  );
};

export default page;
