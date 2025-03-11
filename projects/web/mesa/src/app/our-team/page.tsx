import { Metadata } from "next";
import GradientHeading from "@/components/gradient-heading";
import MaxWidthContainer from "@/components/layout/max-width-container";
import MemberCard from "@/components/our-team/member-card";
import { METADATA } from "@/lib/constant";

export const metadata: Metadata = {
  ...METADATA,
  title: "Mesa - Our Team",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

function OurTeam() {
  return (
    <section className="relative z-0 bg-background/60">
      <MaxWidthContainer>
        <div className="mb-12 flex flex-col items-center gap-3 pt-24 text-center lg:mb-24 lg:pt-32">
          <GradientHeading className="text-2xl font-bold lg:text-[3rem]">
            Meet The Team
          </GradientHeading>
          <p className="max-w-3xl text-base lg:text-lg">
            At Mesanovas our success is driven by a team of innovative leaders
            and experts dedicated to transforming businesses through AI
            technology.
          </p>
        </div>

        <div className="mb-24">
          <div className="grid-col-1 mb-6 grid gap-6 lg:mb-12 lg:grid-cols-3 lg:items-start">
            <MemberCard
              icon="/images/box-17.png"
              name="Dhurba Raj Subedi"
              role="Managing Director"
              description="With extensive experience in business leadership and strategic planning, Dhurba spearheads Mesanovas operations, ensuring seamless implementation of AI solutions across industries."
            />
            <MemberCard
              icon="/images/box-18.png"
              name="Prakash Bhusal"
              role="Business Development Consultant "
              description="Prakash leads the charge in expanding Mesanovas’s footprint across Portugal, forging strong partnerships and identifying growth opportunities in the market."
            />
            <MemberCard
              icon="/images/box-17.png"
              name="Cláudio Silva"
              role="HR Manager - Talent Acquisition"
              description="Cláudio manages talent acquisition and employee development, ensuring Mesanovas builds a dynamic and high-performing team ready to lead the AI revolution."
            />
          </div>

          <div className="grid-col-1 mb-6 grid gap-6 lg:mb-12 lg:grid-cols-3 lg:items-end">
            <MemberCard
              icon="/images/box-16.png"
              name="Niruta Subedi"
              role="Country Manager"
              description="Niruta is a visionary strategist who oversees the successful integration of AI-powered systems. She ensures Mesanovas consistently delivers measurable outcomes for clients."
            />
            <MemberCard
              icon="/images/box-17.png"
              name="Manuel João Pereira"
              role="Technical Support Specialist"
              description="Manuel ensures seamless integration and operation of our AI-powered systems, providing expert technical support to our clients."
            />
            <MemberCard
              icon="/images/box-16.png"
              name="Cláudio Silva"
              role="Marketing Associate"
              description="Luísa drives customer engagement and enhances Mesanovas innovative campaigns that highlight the value of our AI solutions."
            />
          </div>

          <div className="mx-auto flex flex-col justify-center gap-8 lg:w-2/3 lg:flex-row">
            <div className="">
              <MemberCard
                icon="/images/box-18.png"
                name="Amrit Pahari"
                role="AI Implementation Specialist"
                description="Amrit specializes in deploying AI-driven systems tailored to client needs. His expertise ensures smooth transitions and maximum efficiency in integrating our solutions."
              />
            </div>
            <div className="">
              <MemberCard
                icon="/images/box-18.png"
                name="Carlos Mendes"
                role="Customer Success Manager"
                description="Carlos is dedicated to ensuring client satisfaction through personalized support and proactive solutions, helping businesses achieve their AI transformation goals."
              />
            </div>
          </div>
        </div>
      </MaxWidthContainer>

      <div className="absolute inset-0 -z-10 flex h-full items-center">
        <div className="ml-32 h-[827px] w-[827px] rounded-full bg-gradient-to-r from-[#FB3F55]/60 via-[#CC56EA]/60 to-[#FFB800]/60 blur-[300px]" />
      </div>
      <div className="absolute -right-1/2 bottom-0 -z-10 h-[827px] w-[827px] -translate-x-20 items-center rounded-full bg-gradient-to-r from-[#FB3F55] via-[#CC56EA] to-[#FFB800] p-4 blur-[300px]" />
    </section>
  );
}

export default OurTeam;
