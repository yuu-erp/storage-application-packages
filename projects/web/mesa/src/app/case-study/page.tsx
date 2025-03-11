import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import OrderingFlowChart from "@/components/case-study/ordering-flow-chart";
import GradientHeading from "@/components/gradient-heading";
import MaxWidthContainer from "@/components/layout/max-width-container";
import RadialCard from "@/components/radial-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mesa - Case Study",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

function CaseStudy() {
  const faqs = [
    {
      question: "What is Waiting List?",
      answer:
        "Waiting list is a list of customers who want to contribute a refundable investment to improve the store and receive a profit back within 3 to 6 months.",
    },
    {
      question: "How to set up the product?",
      answer:
        "You can set up the product by following the instructions in the manual. If you have any questions, please contact our support team.",
    },
    {
      question: "Is there a subscription plan, and what does it include?",
      answer:
        "Yes, we offer a subscription plan that includes a free trial. You can cancel at any time.",
    },
    {
      question: "Are there any additional fees?",
      answer:
        "No, there are no additional fees. You only pay the price of the product.",
    },
    {
      question: "Does it work offline?",
      answer: "No, the product requires an internet connection to work.",
    },
    {
      question: "How is my data protected?",
      answer:
        "Your data is protected by encryption and secure servers. We do not share your data with third parties.",
    },
  ];

  return (
    <>
      <section className="relative z-20 w-screen pt-20 lg:pt-36">
        <div className="mb-4 flex w-full flex-col items-center gap-2">
          <GradientHeading tag="h3" className="text-xl font-bold lg:text-4.5xl">
            Seamless Dining Experience with AI
          </GradientHeading>
          <p className="px-4 text-center text-sm text-foreground/70 lg:text-lg">
            Uninterruped AI-Powered & Reliable Technology, Even Offline
          </p>
        </div>

        <MaxWidthContainer>
          <OrderingFlowChart />
        </MaxWidthContainer>
      </section>

      <section className="relative z-10 -mt-4 mb-12 w-screen overflow-hidden pb-12 lg:-mt-24 lg:h-[1200px]">
        <MaxWidthContainer>
          <div className="relative grid grid-cols-1 items-center gap-8 pb-12 pt-32 lg:mb-32 lg:grid-cols-2 lg:gap-16 lg:pt-60">
            <RadialCard className="z-30 flex aspect-square h-auto w-full items-center overflow-visible text-xl font-bold text-secondary-foreground lg:w-[445px]">
              IMG/Video
              <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-secondary/60 blur-3xl" />
            </RadialCard>
            <div>
              <GradientHeading
                tag="h5"
                className="mb-2 text-2xl font-bold lg:text-4.5xl"
              >
                Customer 1
              </GradientHeading>
              <h6 className="mb-4 text-xl">
                Indian Cuisine Restaurant Chain with 7 Branches in Lisbon and
                Porto
              </h6>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-lg">
                  <Image
                    src="/images/tick.png"
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  Saved €15.000/ every month
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <Image
                    src="/images/tick.png"
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  Attract more 5% new customer
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <Image
                    src="/images/tick.png"
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  Increase 30% revenue with more returned customer
                </li>
              </ul>
            </div>
          </div>

          <div className="relative flex w-full flex-col gap-8 overflow-hidden py-14 lg:flex-row lg:gap-0">
            <div className="flex flex-col items-center lg:w-1/2">
              <GradientHeading
                tag="h6"
                className="text-[56px] font-bold text-primary"
              >
                30%
              </GradientHeading>
              <p className="text-xl font-bold">revenue up in just 2 months</p>
              <p className="italic">(compare to the same period last year)</p>
            </div>
            <div className="hidden min-h-0 w-[2px] bg-gradient-to-b from-white/0 via-white to-white/0 lg:block" />
            <div className="flex flex-col items-center lg:w-1/2">
              <GradientHeading
                tag="h6"
                className="text-[56px] font-bold text-primary"
              >
                85%
              </GradientHeading>
              <p className="text-xl font-bold">1st time customer return</p>
              <p className="italic">(compare to the same period last year)</p>
            </div>

            <div className="absolute bottom-1/2 left-1/2 -z-10 h-[434px] w-[789px] -translate-x-1/2 -translate-y-4 rounded-[50%] bg-secondary/30 blur-2xl" />
            <div className="absolute left-1/2 top-1/2 -z-10 h-[434px] w-[789px] -translate-x-1/2 translate-y-4 rounded-[50%] bg-secondary/30 blur-2xl" />
          </div>
        </MaxWidthContainer>
        <div className="absolute left-1/2 top-0 -z-30 h-full w-[2800px] -translate-x-1/2 rounded-[50%] bg-secondary-background lg:h-[1200px]" />
      </section>

      <section className="mb-12 lg:mb-36">
        <MaxWidthContainer>
          <div className="flex flex-col items-end justify-between gap-6 lg:flex-row">
            <div>
              <GradientHeading
                tag="h5"
                className="mb-4 text-2xl font-bold lg:text-4.5xl"
              >
                Customer 2
              </GradientHeading>

              <p className="max-w-[490px] text-lg">
                Nestled in the heart of Portugal, a seafood restaurant chain
                celebrates the country&apos;s rich maritime heritage. Since
                opening in 2022, they have grown to 7 branches across Lisbon and
                Porto, offering fresh, sustainable seafood dishes crafted with
                love and local flavors.
                <br />
                <br />
                Their owner saved up{" "}
                <span className="text-2xl font-bold">50%</span> management time
                at the store.
              </p>
            </div>

            <RadialCard className="z-30 hidden aspect-square h-auto w-full items-center overflow-visible text-xl font-bold text-secondary-foreground lg:flex lg:w-[445px]">
              IMG/Video
              <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-secondary/30 blur-3xl" />
            </RadialCard>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="mb-12 lg:mb-36">
        <MaxWidthContainer>
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <RadialCard className="z-30 hidden aspect-square h-auto w-full items-center overflow-visible text-xl font-bold text-secondary-foreground lg:flex lg:w-[445px]">
              IMG/Video
            </RadialCard>
            <div>
              <GradientHeading
                tag="h5"
                className="mb-2 text-2xl font-bold lg:text-4.5xl"
              >
                Customer 3
              </GradientHeading>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-lg">
                  <Image
                    src="/images/tick.png"
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  Engage with more than 300 one-time customers and 60% of them
                  return
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <Image
                    src="/images/tick.png"
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  Reducing average wait times by 20 minutes
                </li>
              </ul>
            </div>

            <div className="absolute -right-1/4 -top-8 -z-10 h-[700px] w-[700px] rounded-full bg-secondary/20 blur-[100px]" />
          </div>
        </MaxWidthContainer>
      </section>

      <section className="mb-12 lg:mb-36">
        <MaxWidthContainer>
          <div className="mb-4 flex w-full justify-center">
            <GradientHeading
              tag="h3"
              className="text-xl font-bold lg:text-4.5xl"
            >
              FAQ
            </GradientHeading>
          </div>

          <div className="mx-auto w-full max-w-5xl lg:px-4">
            <Accordion type="multiple" className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={index.toString()}>
                  <AccordionTrigger>
                    <div className="flex gap-4">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="py-4 pl-12 pr-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="mb-12 lg:mb-36">
        <MaxWidthContainer>
          <div className="mb-5 flex w-full justify-center">
            <GradientHeading
              tag="h3"
              className="text-xl font-bold lg:text-4.5xl"
            >
              Our Customer
            </GradientHeading>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-gradient-to-tr from-[#7B51F1]/30 to-[#CC5FFF]/30">
              <Image
                src="/images/fashion-retail.png"
                width={354}
                height={368}
                alt="shop"
                className="absolute inset-0 -z-10 object-cover"
              />
              <div className="rounded-lg bg-black/40 p-5 text-3xl font-bold text-secondary-foreground">
                Fashion Retail
              </div>
            </div>

            <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-gradient-to-tr from-[#7B51F1]/30 to-[#CC5FFF]/30">
              <Image
                src="/images/food-and-beverage.png"
                width={387}
                height={376}
                alt="shop"
                className="absolute inset-0 -z-10 object-cover"
              />
              <div className="rounded-lg bg-black/40 p-5 text-3xl font-bold text-secondary-foreground">
                Food and Beverage
              </div>
            </div>

            <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-gradient-to-tr from-[#7B51F1]/30 to-[#CC5FFF]/30">
              <Image
                src="/images/nail-and-hair.png"
                width={382}
                height={359}
                alt="shop"
                className="absolute inset-0 -z-10 object-cover"
              />
              <div className="rounded-lg bg-black/40 p-5 text-3xl font-bold text-secondary-foreground">
                Nail and hair
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="pb-12">
        <MaxWidthContainer>
          <div className="flex flex-col items-start justify-between gap-3 lg:flex-row lg:items-center">
            <GradientHeading
              tag="h3"
              className="text-xl font-bold lg:text-4.5xl"
            >
              Up Sale Now
            </GradientHeading>
            <Button asChild>
              <Link href="#">JOIN THE WAITING LIST</Link>
            </Button>
          </div>
        </MaxWidthContainer>
      </section>
    </>
  );
}

export default CaseStudy;
