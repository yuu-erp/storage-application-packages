import { Metadata } from "next";
import GradientHeading from "@/components/gradient-heading";
import MaxWidthContainer from "@/components/layout/max-width-container";
import ComplianceCard from "@/components/tech-assurance/compliance-card";
import EdgeAiFlowChart from "@/components/tech-assurance/edge-ai-flow-chart";
import FeatureCard from "@/components/tech-assurance/feature-card";
import LandingBackground from "@/components/tech-assurance/landing-background";
import PrivacyCard from "@/components/tech-assurance/privacy-card";
import { Separator } from "@/components/ui/separator";
import { METADATA } from "@/lib/constant";

export const metadata: Metadata = {
  ...METADATA,
  title: "Mesa - Tech Assurance",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

function TechAssurance() {
  return (
    <>
      <section className="relative z-0">
        <LandingBackground />

        <div className="absolute inset-0 flex w-full items-center justify-center">
          <h1 className="max-w-md text-center text-xl font-bold leading-snug text-secondary-foreground lg:text-[3rem]">
            Transform Customer Experience Management
          </h1>
        </div>
      </section>

      <section className="relative mb-12 lg:mb-32">
        <div className="absolute -left-24 -top-24 -z-10 h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl" />
        <MaxWidthContainer>
          <div className="flex flex-col items-center gap-3 pt-12 text-center">
            <GradientHeading
              tag="h2"
              className="text-2xl font-bold lg:text-4.5xl"
            >
              Use Technology To Lighten, Not Burden
            </GradientHeading>
            <p className="mb-4 text-base lg:text-lg">
              Using 2 different types of signature technologies to ensure
              maximum security
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <FeatureCard
              icon="/images/box-15.png"
              content="Digital signature technology following 3DSecure standard"
            />
            <FeatureCard
              icon="/images/satellite.png"
              content="Collect 320 data fields from the user device to create a digital signature"
            />
            <FeatureCard
              icon="/images/license-key-4.png"
              content="Do not use accounts, passwords, and login sessions to avoid risks"
            />
            <FeatureCard
              icon="/images/open-ai.png"
              content="Encrypt digital signatures and transactions following international standard AES256, approved by the US National Security Agency (NSA) to protect confidential records"
            />
          </div>
        </MaxWidthContainer>
      </section>

      <section className="mb-12 lg:mb-32">
        <MaxWidthContainer>
          <EdgeAiFlowChart />
        </MaxWidthContainer>
      </section>

      <section className="relative mb-12 lg:mb-32">
        <div className="absolute -left-24 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/30 blur-3xl" />
        <MaxWidthContainer>
          <div className="mb-8 flex h-full flex-col justify-between gap-3 lg:mb-24 lg:flex-row lg:items-center">
            <GradientHeading
              tag="h2"
              className="text-2xl font-bold lg:text-4.5xl"
            >
              Adapt Smooth Operation
            </GradientHeading>
            <Separator
              orientation="vertical"
              className="hidden h-10 w-0.5 bg-white/30 lg:block"
            />
            <div className="text-sm lg:text-lg">
              <p>Allow offline order.</p>
              <p>Ensure order while store being electricity outage.</p>
            </div>
          </div>

          <div className="mb-8 flex flex-col justify-between gap-4 lg:mb-24 lg:flex-row">
            <ComplianceCard label="Adapt GDPR" />
            <ComplianceCard label="Distributed Server Ensure Internet Connection" />
            <ComplianceCard label="Smart user workflow with ISO 9241-210" />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-1">
            <PrivacyCard label="No personal information storage, no threats" />
            <PrivacyCard label="Using TLS and AES-256 to avoid MITM attack" />
            <PrivacyCard label="The international standard for user-centered design, emphasizing easy-to-use interfaces." />
          </div>
        </MaxWidthContainer>
      </section>
    </>
  );
}

export default TechAssurance;
