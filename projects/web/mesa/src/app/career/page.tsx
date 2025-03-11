import { Search } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import ApplyCvForm from "@/components/career/apply-cv-form";
import BehindTheScenesCard from "@/components/career/behind-the-scenes-card";
import BenefitCard from "@/components/career/benefit-card";
import LandingBackground from "@/components/career/landing-background";
import OtherJobCard from "@/components/career/other-job-card";
import RiskComplianceManager from "@/components/career/risk-compliance-manager";
import GradientHeading from "@/components/gradient-heading";
import MaxWidthContainer from "@/components/layout/max-width-container";
import RadialCard from "@/components/radial-card";
import { Input } from "@/components/ui/input";
import { METADATA } from "@/lib/constant";

export const metadata: Metadata = {
  ...METADATA,
  title: "Mesa - Career",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

function Career() {
  return (
    <>
      <section className="relative mb-12 lg:mb-24">
        <LandingBackground />

        <MaxWidthContainer className="absolute inset-0 z-10 w-full pt-10 lg:pt-44">
          <div className="flex flex-col items-center gap-10 pt-6 lg:gap-12 lg:pt-0">
            <GradientHeading
              tag="h2"
              className="mb-3 pt-6 text-center text-xl font-bold !leading-tight lg:mt-0 lg:text-[3rem]"
            >
              Join Mesanovas team!
              <br />
              Let’s changing the world together
            </GradientHeading>

            <div className="mx-auto w-full max-w-3xl space-y-8 lg:space-y-16">
              <Input
                rightIcon={Search}
                placeholder="Search..."
                className="w-full placeholder:text-secondary-foreground"
              />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <RadialCard className="rounded-xl border border-primary/20">
                    <Image
                      src="/images/decentralize-2.png"
                      alt="decentralize"
                      width={24}
                      height={24}
                    />
                  </RadialCard>
                  <div>
                    <h6 className="ext-base font-bold lg:text-xl">
                      Software Development Manager
                    </h6>
                    <p className="text-sm lg:text-lg">
                      Mesanovas - Technical Department - Full Time
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <RadialCard className="rounded-xl border border-primary/20">
                    <Image
                      src="/images/shield-security.png"
                      alt="decentralize"
                      width={24}
                      height={24}
                    />
                  </RadialCard>
                  <div>
                    <h6 className="text-base font-bold lg:text-xl">
                      Risk & Compliance Manager
                    </h6>
                    <p className="text-sm lg:text-lg">
                      Mesanovas - Operation Department - Full Time
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <RadialCard className="rounded-xl border border-primary/20">
                    <Image
                      src="/images/chart-pie.png"
                      alt="decentralize"
                      width={24}
                      height={24}
                    />
                  </RadialCard>
                  <div>
                    <h6 className="ext-base font-bold lg:text-xl">
                      Business Relationship Management
                    </h6>
                    <p className="text-sm lg:text-lg">
                      Mesanovas - Technical Department - Full Time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="relative mb-12 lg:mb-24">
        <MaxWidthContainer>
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative">
              <Image
                src="/images/group-people-standing.png"
                alt="group-people-standing"
                width={507}
                height={404}
                className="rounded-md"
              />
              <div className="absolute right-16 top-0 -z-10 h-[400px] w-[500px] rounded-full bg-primary/40 blur-3xl" />
            </div>
            <div className="space-y-8">
              <GradientHeading
                tag="h2"
                className="text-3xl font-bold lg:text-[3rem]"
              >
                Our Value
              </GradientHeading>
              <p className="text-base lg:text-lg">
                Our Values are not some corporate tick box but the beating heart
                of our organisation.
                <br />
                <br />
                The glue that holds us all together, acting as our guide as we
                live and breathe them every day.
              </p>
            </div>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="relative mb-12 lg:mb-24">
        <MaxWidthContainer>
          <GradientHeading
            tag="h2"
            className="mb-2 text-3xl font-bold lg:text-[3rem]"
          >
            Benefits & Perks
          </GradientHeading>
          <p className="mb-4 text-base lg:mb-8 lg:text-lg">
            We are truly care to our employees. We offer a range of perks and
            benefits that make Metanium an amazing place to do your best work
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              image="/images/fiat-cash.png"
              label="Competitive Salary"
              border="br"
            />
            <BenefitCard
              image="/images/swap-exchange.png"
              label="Flexible Working"
              border="b"
            />
            <BenefitCard
              image="/images/liquidity-stake.png"
              label="Company Pension"
              border="bl"
            />
            <BenefitCard
              image="/images/cyborg.png"
              label="Professional Development"
              border="tr"
            />
            <BenefitCard
              image="/images/light.png"
              label="Knowledge Sharing"
              border="t"
            />
            <BenefitCard
              image="/images/reward.png"
              label="Dynamic Environment"
              border="tl"
            />
          </div>
        </MaxWidthContainer>
      </section>

      <section className="relative mb-12 lg:mb-24">
        <RiskComplianceManager />
      </section>

      <section className="mb-12 lg:mb-24">
        <MaxWidthContainer>
          <div className="flex h-full flex-col gap-8 lg:flex-row lg:gap-16">
            <Image
              src="/images/digital-lock.png"
              width={508}
              height={580}
              alt="digital lock"
              className="h-auto w-full rounded-md"
            />

            <div className="space-y-6">
              <GradientHeading
                tag="h2"
                className="text-2xl font-bold lg:text-[3rem]"
              >
                What Can We Offer
              </GradientHeading>
              <div>
                <p className="mb-4 text-lg">
                  As well as the opportunity to make this role your own and
                  really shape the future of Mesanovas, we offer a market
                  leading compensation package which includes (but not limited
                  to):
                </p>
                <ul className="list-disc space-y-2 pl-4 text-lg">
                  <li>Pension scheme (5% Company contribution)</li>
                  <li>Private Medical Insurance</li>
                  <li>15 Days Annual Leave + 8 Swappable Public Holidays</li>
                  <li>Quarterly paid Well-being days + Birthday off</li>
                  <li>Values and Outcomes way of working (flexibility)</li>
                  <li>
                    Once in a generation opportunity to shape a dynamic business
                    model on the cutting edge of start-up company
                  </li>
                </ul>
              </div>
              <ApplyCvForm />
            </div>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="mb-12 lg:mb-24">
        <MaxWidthContainer>
          <div className="mb-4 flex justify-center lg:mb-8">
            <GradientHeading
              tag="h2"
              className="text-3xl font-bold lg:text-[3rem]"
            >
              Other Jobs Opening
            </GradientHeading>
          </div>

          <div className="mb-6 flex flex-col gap-4 lg:mb-12 lg:flex-row">
            <OtherJobCard
              image="/images/code.png"
              title="Software Development Manager"
              descriptions={["Mesanovas - Technical Department", "Full Time"]}
            />
            <OtherJobCard
              image="/images/landing-9.png"
              title="Software Development Manager"
              descriptions={["Business Relationship Management", "Full Time"]}
            />
          </div>
          <div className="flex justify-center">
            <button className="group rounded-xl bg-gradient-to-r from-[#7B51F1] to-[#CC5FFF] p-[2px]">
              <div className="min-w-72 rounded-[10px] bg-black px-8 py-4 text-lg font-bold text-secondary-foreground group-hover:opacity-90">
                MORE JOB
              </div>
            </button>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="mb-12 lg:mb-24">
        <MaxWidthContainer>
          <GradientHeading
            tag="h2"
            className="text-3xl font-bold lg:text-[3rem]"
          >
            Behind the scenes
          </GradientHeading>
          <p className="mb-4 text-base lg:mb-6 lg:text-lg">
            We have product managers, compliance experts, regulatory gurus,
            financial whizzes, and marketing geniuses - all working hard to
            bring your solutions to life. These are our teams.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-4 lg:mb-16 lg:grid-cols-3">
            <BehindTheScenesCard
              image="/images/peoples.png"
              title="The Sale Team"
              description="This team is full of ambitious, dedicated experts who back our prospects and clients to power their bold aspirations. The team is clever, driven, and spans across all our geographies."
            />
            <BehindTheScenesCard
              image="/images/money-bag.png"
              title="The Finance & Operations Team"
              description="Budgeting, invoicing, financial planning, investment; all part of the pipes that keep our customers’ money moving is an average day’s work for this team."
            />
            <BehindTheScenesCard
              image="/images/paper.png"
              title="The Compliance Team"
              description="To ensure we remain compliant across jurisdictions, this team helps onboard new clients, monitor transactions, and keep us all above board."
            />
            <BehindTheScenesCard
              image="/images/community-speaker.png"
              title="The Marketing Team"
              description="Our marketing team pushes us forward in both new and existing markets, telling the Mesanovas story."
            />
            <BehindTheScenesCard
              image="/images/decentralize-4.png"
              title="The Product & Technology Team"
              description="Check out any page on this website and you’ll see how important technology is to our clients. It’s what sets us apart from others, and all thanks to the excellent work that comes from this team."
            />
            <BehindTheScenesCard
              image="/images/vr-headset.png"
              title="The People Team"
              description="If you’re thinking about joining Mesanovas, you’re likely to interact with this team before anyone else. This is the team that looks after Mesanovas’ people, from HR to talent management, this team has it covered."
            />
          </div>

          <div className="flex justify-center">
            <ApplyCvForm />
          </div>
        </MaxWidthContainer>
      </section>
    </>
  );
}

export default Career;
