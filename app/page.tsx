import AiNativeSection from "@/components/AINative";
import ClientSlider from "@/components/ClientSlider";
import EndlessPossibilities from "@/components/EndlessPossibilities";
import FeatureTrioSection from "@/components/FeatureTrioSection";
import { HeroWithVideo } from "@/components/HeroWithVideo";
import IntegrationsMinimal from "@/components/IntegrationMinimal";
import MainVisual from "@/components/MainVisual";
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
      <AiNativeSection />
      <EndlessPossibilities />
      <IntegrationsMinimal />
      <ClientSlider />
      <MainVisual />
      <StatsCta />
      <TestimonialsSection />
      <TransformHero />
      {/* <TrustTestimonials /> */}
    </div>
  );
};

export default page;
