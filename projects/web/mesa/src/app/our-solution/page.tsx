import { Metadata } from "next";
import Image from "next/image";
import GradientHeading from "@/components/gradient-heading";
import MaxWidthContainer from "@/components/layout/max-width-container";
import RadialCard from "@/components/radial-card";
import AllInOneCard from "@/components/solution/all-in-one-card";
import AnimatedText from "@/components/solution/animated-text";
import LandingBackground from "@/components/solution/landing-background";
import MeanwhileCard from "@/components/solution/meanwhile-card";
import SolutionCard from "@/components/solution/solution-card";
import { METADATA } from "@/lib/constant";

export const metadata: Metadata = {
  ...METADATA,
  title: "Mesa - Our Solution",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

function OurSolution() {
  return (
    <>
      <section className="relative z-0">
        <LandingBackground />

        <div className="absolute inset-0 flex w-full items-center">
          <MaxWidthContainer className="w-full pt-6 lg:pt-0">
            <GradientHeading
              variant="secondary"
              className="mx-auto mb-3 pt-6 text-center text-xl font-bold !leading-tight lg:mx-0 lg:mt-0 lg:text-start lg:text-4.5xl"
            >
              Platform For
              <br />
              AI-Driven Store Revenue
            </GradientHeading>
            <p className="max-w-md text-center text-xs text-secondary-foreground lg:text-left lg:text-xl lg:opacity-50">
              AI and digital menus boost sales by recognizing returning
              customers, fostering loyalty, converting them into repeat buyers,
              and measuring price acceptance.
            </p>
          </MaxWidthContainer>
        </div>
      </section>

      <section className="relative min-h-[260px] lg:mt-[-310px] lg:min-h-[380px]">
        <Image
          src="/images/box-8.png"
          alt="box"
          width={1440}
          height={720}
          className="w-full"
        />

        <div className="absolute top-0 h-full w-full bg-gradient-to-b from-white/0 to-background lg:h-[300px]" />
        <div className="absolute top-[300px] h-[10px] w-full bg-background" />
        <div className="absolute bottom-0 h-[300px] w-full bg-gradient-to-t from-background to-white/0 lg:h-[399px]" />
        <div className="absolute bottom-0 w-full pb-14 lg:pb-40">
          <h1 className="w-full text-center text-lg font-bold leading-tight text-white lg:text-4.5xl">
            True Technology Means No Interruptions.
            <br />
            We Ensure Smooth Service
            <br />
            Without Internet Or Power
          </h1>
        </div>
      </section>

      <section className="mb-12 lg:mb-32">
        <MaxWidthContainer>
          <GradientHeading
            tag="h3"
            className="mb-4 text-xl font-bold lg:text-4.5xl"
          >
            Our Solution
          </GradientHeading>

          <div className="flex flex-col lg:flex-row">
            <SolutionCard>
              <Image
                src="/images/menu-ai.png"
                width={70}
                height={70}
                alt="icon"
                className="-ml-3 -mt-3"
              />
              <h3 className="my-4 text-lg font-bold">Menu AI</h3>
              <ul className="list-disc space-y-2 pl-3 opacity-80">
                <li>
                  <strong>Cross-selling:</strong> Suggest side dishes or combo
                  deals for specific groups like students, seniors, office
                  workers, or families
                </li>
                <li>
                  <strong>Up selling:</strong> Offer upgraded options (like
                  larger sizes or premium versions) for high-end customers.
                </li>
                <li>
                  <strong>Real-time menu updates:</strong>Adjust the menu based
                  on busy hours, holidays, or seasonal items.
                </li>
              </ul>
            </SolutionCard>

            <SolutionCard>
              <Image
                src="/images/camera-sensor.png"
                width={70}
                height={70}
                alt="icon"
                className="-ml-3 -mt-3"
              />
              <h3 className="my-4 text-lg font-bold">Camera Sensor AI</h3>
              <ul className="list-disc space-y-2 pl-3 opacity-80">
                <li>
                  <strong>Track conversion rates:</strong> Know what they’ve
                  eaten before and their favorite flavors.
                </li>
                <li>
                  <strong>Understand customer:</strong> Offer upgraded options
                  (like larger sizes or premium versions) for high-end
                  customers.
                </li>
                <li>
                  <strong>Customer classification:</strong> Group customers into
                  categories like premium, mid-range, male, female, age group,
                  families, seniors, kids, or students.
                </li>
              </ul>
            </SolutionCard>

            <SolutionCard>
              <Image
                src="/images/processing-device.png"
                width={70}
                height={70}
                alt="icon"
                className="-ml-3 -mt-3"
              />
              <h3 className="my-4 text-lg font-bold">AI processing device </h3>
              <ul className="list-disc space-y-2 pl-3 opacity-80">
                <li>
                  <strong>Security & GDPR:</strong> Encrypt data, process
                  locally, ensure GDPR compliance, and protect privacy
                </li>
                <li>
                  <strong>Reporting:</strong> Remote reporting, automatic
                  updates, and data management.
                </li>
              </ul>
            </SolutionCard>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="mb-12 lg:mb-32">
        <MaxWidthContainer>
          <div className="mb-4 flex w-full justify-center">
            <GradientHeading
              tag="h3"
              className="text-xl font-bold lg:text-4.5xl"
            >
              Our Story
            </GradientHeading>
          </div>
          <div className="mb-4 flex w-full flex-col gap-4 lg:flex-row">
            <RadialCard className="flex h-[140px] w-full flex-col justify-end lg:h-[260px] lg:w-3/5">
              <GradientHeading
                tag="h5"
                className="text-2xl font-bold lg:text-4xl"
              >
                100 Daily Customers
              </GradientHeading>
              <p className="text-sm lg:text-lg">
                If your store has 100 customers each day
              </p>

              <div className="rouded-full absolute bottom-0 left-72 -z-20 h-44 w-64 -rotate-45 rounded-[50%] bg-[#FE00D5]/40 blur-xl" />
              <Image
                src="/images/box-9.png"
                width={323}
                height={318}
                alt="box"
                className="absolute right-4 top-0 h-auto w-32 lg:w-[323px]"
              />
            </RadialCard>

            <RadialCard className="flex h-[140px] w-full flex-col justify-end lg:h-[260px] lg:w-2/5">
              <p className="text-sm lg:text-lg">A month</p>
              <GradientHeading
                tag="h5"
                className="text-2xl font-bold lg:text-4xl"
              >
                3.000 Customers
              </GradientHeading>
              <p className="text-sm lg:text-lg">
                Then you have 3,000 customers each month.
              </p>

              <Image
                src="/images/box-10.png"
                width={285}
                height={236}
                alt="box"
                className="absolute right-0 top-0 h-auto w-32 lg:w-[285px]"
              />
              <Image
                src="/images/cube.png"
                width={62}
                height={62}
                alt="box"
                className="absolute right-6 top-4 h-auto w-14 lg:right-16 lg:top-16 lg:w-[62px]"
              />
            </RadialCard>
          </div>

          <div className="flex w-full flex-col gap-4 lg:flex-row">
            <RadialCard className="flex h-[140px] w-full flex-col justify-end lg:h-[260px] lg:w-2/5">
              <GradientHeading
                tag="h5"
                className="text-2xl font-bold lg:text-4xl"
              >
                36.000 Customer/Year
              </GradientHeading>
              <p className="text-sm lg:text-lg">
                In total, you have 36,000 customers in a year
              </p>

              <div className="rouded-full absolute -right-8 bottom-0 -z-20 h-32 w-64 rotate-45 rounded-[50%] bg-[#FE00D5]/40 blur-xl lg:h-48 lg:w-80" />
              <Image
                src="/images/box-11.png"
                width={92}
                height={103}
                alt="box"
                className="w-124 absolute -right-2 -top-4 h-auto lg:right-8 lg:top-8 lg:w-[92px]"
              />
            </RadialCard>

            <RadialCard className="flex h-[140px] w-full flex-col justify-end lg:h-[260px] lg:w-3/5">
              <p className="text-sm lg:text-xl">After 3 year,</p>
              <GradientHeading
                tag="h5"
                className="text-2xl font-bold lg:text-4xl"
              >
                €5,4Million
              </GradientHeading>
              <p className="max-w-[410px] text-sm lg:text-lg">
                After 3 years, your customer value reaches €5.4 million with
                over 100,000 customers.
              </p>

              <div className="rouded-full absolute -right-8 -top-8 -z-20 h-40 w-80 -rotate-45 rounded-[50%] bg-[#FE00D5]/40 blur-xl lg:h-56 lg:w-[600px]" />
              <Image
                src="/images/box-12.png"
                width={335}
                height={352}
                alt="box"
                className="absolute right-0 top-0 h-auto w-32 lg:w-[335px]"
              />
            </RadialCard>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="mb-12 lg:mb-32">
        <MaxWidthContainer>
          <GradientHeading
            tag="h3"
            className="mb-2 text-xl font-bold lg:text-4.5xl"
          >
            Meanwhile
          </GradientHeading>

          <div className="flex flex-col items-center lg:flex-row lg:items-stretch">
            <div className="relative">
              <Image
                src="/images/box-13.png"
                width={389}
                height={389}
                alt="box"
                className="h-auto w-[700px]"
              />
              <div className="absolute left-1/2 top-24 -z-10 aspect-square w-2/3 -translate-x-1/2 rounded-full bg-primary blur-3xl" />
            </div>

            <div>
              <MeanwhileCard>
                <GradientHeading
                  tag="span"
                  className="text-2xl font-bold !leading-none lg:text-4xl"
                >
                  65%{" "}
                </GradientHeading>
                <span className="text-sm lg:text-lg">
                  of a brand&apos;s sales come from loyal customers{" "}
                  <small>(1)</small>
                </span>
              </MeanwhileCard>
              <MeanwhileCard>
                <GradientHeading
                  tag="span"
                  className="text-2xl font-bold !leading-none lg:text-4xl"
                >
                  5%{" "}
                </GradientHeading>
                <span className="text-sm lg:text-lg">
                  of customer retention rate can extremely increase store
                  revenue from 25% to 95%, according to Forbes{" "}
                  <small>(2)</small>
                </span>
              </MeanwhileCard>
              <MeanwhileCard>
                <GradientHeading
                  tag="span"
                  className="text-2xl font-bold !leading-none lg:text-4xl"
                >
                  91%{" "}
                </GradientHeading>
                <span className="text-sm lg:text-lg">
                  customers won’t share reason for dissatisfaction; simply leave
                  and never return <small>(3)</small>
                </span>
              </MeanwhileCard>
            </div>

            <MeanwhileCard className="flex flex-col items-center text-center lg:px-16">
              <h5 className="mb-6 text-sm font-bold lg:text-lg">
                Estimated human resource cost reduction <small>(7)</small>
              </h5>
              <GradientHeading
                tag="h6"
                className="text-nowrap text-2xl font-bold lg:text-4xl"
              >
                €900 - €1.200
              </GradientHeading>
              <p className="text-sm lg:text-lg">monthly for 1 order staff</p>

              <div className="my-4 h-[1px] w-full bg-gradient-to-r from-[#221F3A]/0 via-primary to-[#221F3A]/0" />

              <GradientHeading
                tag="h6"
                className="text-nowrap text-2xl font-bold lg:text-4xl"
              >
                €32.400 - €43.200
              </GradientHeading>
              <p className="text-sm lg:text-lg">
                at least store can save 2-3 staffs salary every year
              </p>
            </MeanwhileCard>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="mb-12 hidden lg:mb-32 lg:block">
        <AnimatedText />
      </section>

      <section className="mb-12 lg:mb-32">
        <MaxWidthContainer>
          <div className="mb-8 flex w-full justify-center">
            <GradientHeading
              tag="h3"
              className="text-xl font-bold lg:text-4.5xl"
            >
              Mesanovas All-in-one
            </GradientHeading>
          </div>

          <div className="flex w-full flex-col gap-16 lg:flex-row lg:items-center">
            <div className="lg:w-2/5">
              <h5 className="mb-3 text-xl font-bold text-secondary">
                ADMIN PANEL
              </h5>

              <AllInOneCard>
                <ul className="w-full list-disc space-y-1 pl-4">
                  <li>Administration</li>
                  <li>Campaign</li>
                  <li>Segmentation</li>
                  <li>Promotions</li>
                  <li>Insights</li>
                </ul>
              </AllInOneCard>
              <div className="flex justify-center">
                <div className="h-16 w-14 border-l-2 border-r-2 border-primary lg:h-24" />
              </div>

              <AllInOneCard>
                <ul className="w-full list-disc space-y-1 pl-4">
                  <li>Branded experience</li>
                  <li>Partner websites</li>
                  <li>Retailer brick-and-mortar store</li>
                </ul>
              </AllInOneCard>
              <h5 className="mt-3 text-xl font-bold text-secondary">
                CONSUMER EXPERIENCE
              </h5>
            </div>
            <div className="flex flex-col items-center lg:w-3/5">
              <Image
                src="/images/box-14.png"
                width={590}
                height={421}
                alt="building"
              />
              <div className="-mt-16 grid grid-cols-2 gap-4 lg:grid-cols-3">
                <AllInOneCard className="flex aspect-square flex-col items-center gap-4 text-center">
                  <div className="pt-4">
                    <Image
                      src="/images/location.png"
                      width={64}
                      height={64}
                      alt="location"
                      className="h-12 w-auto lg:h-16"
                    />
                  </div>
                  <p className="text-sm lg:text-lg">Languages & Location</p>
                </AllInOneCard>

                <AllInOneCard className="flex aspect-square flex-col items-center gap-4 text-center">
                  <div className="pt-4">
                    <Image
                      src="/images/gift.png"
                      width={64}
                      height={64}
                      alt="gift"
                      className="h-12 w-auto lg:h-16"
                    />
                  </div>
                  <p className="text-sm lg:text-lg">Tip & Ratung Anonymously</p>
                </AllInOneCard>

                <AllInOneCard className="flex aspect-square flex-col items-center gap-4 text-center">
                  <div className="pt-4">
                    <Image
                      src="/images/card.png"
                      width={64}
                      height={64}
                      alt="card"
                      className="h-12 w-auto lg:h-16"
                    />
                  </div>
                  <p className="text-sm lg:text-lg">
                    Pay on phone - Phone as POS
                  </p>
                </AllInOneCard>

                <AllInOneCard className="flex aspect-square flex-col items-center gap-4 text-center">
                  <div className="pt-4">
                    <Image
                      src="/images/cart.png"
                      width={64}
                      height={64}
                      alt="cart"
                      className="h-12 w-auto lg:h-16"
                    />
                  </div>
                  <p className="text-sm lg:text-lg">Shop with Points</p>
                </AllInOneCard>

                <AllInOneCard className="flex aspect-square flex-col items-center gap-4 text-center">
                  <div className="pt-4">
                    <Image
                      src="/images/custom.png"
                      width={64}
                      height={64}
                      alt="custom box"
                      className="h-12 w-auto lg:h-16"
                    />
                  </div>
                  <p className="text-sm lg:text-lg">
                    Connect Customer Online & Offline
                  </p>
                </AllInOneCard>

                <AllInOneCard className="flex aspect-square flex-col items-center gap-4 text-center">
                  <div className="pt-4">
                    <Image
                      src="/images/heart-user.png"
                      width={64}
                      height={64}
                      alt="user"
                      className="h-12 w-auto lg:h-16"
                    />
                  </div>
                  <p className="text-sm lg:text-lg">Donate to Charity</p>
                </AllInOneCard>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
    </>
  );
}

export default OurSolution;
