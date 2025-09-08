import LogosMarquee from "@/components/Companies";
import CompetitiveComparison from "@/components/CompatativeComparison";
import EndlessPossibilities from "@/components/EndlessPossibilities";
import FAQSectionEqual from "@/components/FAQs";
// import FeaturesHeroAnimated from "@/components/FeatureHero";
import FormBuilderLanding from "@/components/FeatureHero";
import FeaturesHero from "@/components/FeatureHero";
import { HeroWithVideo } from "@/components/HeroWithVideo";
import { WhyFormsSection } from "@/components/Highlighter";
import InputLo from "@/components/InputLo";
import IntegrationsMinimal from "@/components/IntegrationMinimal";
import PricingComparison from "@/components/PricingSection";
import SocialProofCta from "@/components/SocialProof";
import { StatsCta } from "@/components/StatsCTA";
import TestimonialsSection from "@/components/TestimonialMain";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroWithVideo />
      <SocialProofCta />
      <FormBuilderLanding />
      <WhyFormsSection />
      <EndlessPossibilities />
      <IntegrationsMinimal />
      <PricingComparison />

      <StatsCta />
      <TestimonialsSection />
      <CompetitiveComparison />
      <InputLo />
      <LogosMarquee />
      <FAQSectionEqual />
    </div>
  );
};

export default page;
