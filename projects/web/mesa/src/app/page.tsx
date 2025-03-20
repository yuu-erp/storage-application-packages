import Image from "next/image";
import Link from "next/link";
import GradientHeading from "@/components/gradient-heading";
import JoinWaitingListForm from "@/components/home/join-waiting-list-form";
import QuestionCard from "@/components/home/question-card";
import RestaurantCard from "@/components/home/restaurant-card";
import MaxWidthContainer from "@/components/layout/max-width-container";
import RadialCard from "@/components/radial-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Home() {
  return (
    <>
      <section className="relative z-10 w-screen overflow-hidden pt-12 lg:pt-20">
        <MaxWidthContainer>
          <div className="mb-8 flex w-full justify-center pt-12">
            <h3 className="bg-gradient-to-r from-primary to-secondary bg-clip-text px-4 text-center text-lg font-bold leading-tight text-transparent lg:text-4.5xl">
              Fewer customers, more competition
              <br />
              How to Sell Better
            </h3>
          </div>

          <div className="relative flex w-full justify-center">
            <div className="relative">
              <div className="relative h-[612px] w-[355px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/phone2.png"
                  width={355}
                  height={612}
                  alt="phone"
                  priority
                  className="h-full w-full rounded-2xl"
                />
              </div>

              <QuestionCard
                title="Losing customers"
                description="How to attract more?"
                className="absolute -left-[50%] top-1/3 hidden lg:block"
              />

              <QuestionCard
                title="Higher cost"
                description="How to raise prices?"
                className="absolute -right-[55%] top-12 hidden lg:block"
              />

              <QuestionCard
                description="How to beat <br /> competitors?"
                className="absolute -right-[70%] top-1/2 hidden lg:block"
              />
            </div>

            <div className="absolute right-16 top-24">
              <Image
                src="/images/box-1.png"
                width={120}
                height={120}
                alt="phone"
                className="hidden rotate-[43.57deg] lg:block"
              />
            </div>
            <div className="absolute left-16 top-4">
              <Image
                src="/images/box-2.png"
                width={138}
                height={102}
                alt="phone"
                className="hidden rotate-[46.55deg] lg:block"
              />
            </div>
          </div>
        </MaxWidthContainer>

        <div className="absolute left-[-200px] top-[-200px] z-20 h-[400px] w-[400px] rounded-full bg-radial-primary blur-[200px] lg:left-[-500px] lg:top-[-600px] lg:h-[1066px] lg:w-[1066px]" />
        <div className="absolute bottom-[-150px] right-[-150px] z-20 h-[300px] w-[300px] rounded-full bg-radial-primary blur-[200px] lg:bottom-[-550px] lg:right-[-550px] lg:h-[958px] lg:w-[958px]" />
      </section>

      <section className="relative z-20 -mt-48 h-[1000px] w-screen overflow-hidden lg:h-[1200px]">
        <MaxWidthContainer>
          <div className="relative grid grid-cols-1 items-center gap-8 pb-12 pt-16 lg:grid-cols-2 lg:pt-32">
            <div>
              <h3 className="mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-lg font-bold leading-tight text-transparent lg:text-4.5xl">
                <span className="text-4xl lg:text-7xl">70%</span> Of Customers
                <br />
                Visit The Restaurant
                <br />
                Just One Time
              </h3>
              <p className="text-lg lg:text-xl">
                How Can We Thrive with{" "}
                <span className="text-xl font-bold lg:text-2xl">Just 30%</span>{" "}
                of Customers?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <RestaurantCard
                  iconUrl="/images/blockchain.png"
                  title="Disconnected Guest"
                  description="Customers come and go, leaving no connection with the restaurant"
                />
                <RestaurantCard
                  iconUrl="/images/award.png"
                  title="Unprofitable"
                  description="45% of operators foresee increased competition; 38% reported their restaurant was <strong>unprofitable</strong> last year."
                />
              </div>
              <div className="flex flex-col gap-4 lg:pt-12">
                <RestaurantCard
                  iconUrl="/images/nodes.png"
                  title="Unknown Customer"
                  description="Store owners don't know who their customers are"
                />
                <RestaurantCard
                  iconUrl="/images/decentralize.png"
                  title="Compete Online"
                  description="63% of global consumers shop online more, while 42% shop less in physical stores."
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 text-xs italic lg:bottom-6">
              <p>(1) National restaurant association</p>
              <p>(2) PwC</p>
            </div>

            <div className="absolute bottom-0 right-1/2">
              <Image
                src="/images/box-3.png"
                width={262}
                height={246}
                alt="box"
              />
            </div>
          </div>
        </MaxWidthContainer>

        <div className="absolute left-1/2 top-0 -z-10 h-[1200px] w-[2800px] -translate-x-1/2 rounded-[50%] bg-secondary-background" />
      </section>

      <section className="relative z-20 -mt-36 pb-20 lg:-mt-72">
        <MaxWidthContainer>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex aspect-[59/52] h-full items-end rounded-xl bg-[url('/images/box-4.png')] bg-cover bg-center px-4 py-6 lg:px-10">
              <div>
                <GradientHeading
                  tag="h6"
                  className="mb-4 text-lg font-bold lg:text-3xl"
                >
                  Unreasonable price
                </GradientHeading>
                <p className="text-sm text-secondary-foreground/[.68] lg:text-lg">
                  A favorite spaghetti dish suddenly costs more, or pizza has
                  less beef. Owners often raise prices due to inflation or
                  location.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <RadialCard className="h-1/2 w-full">
                <GradientHeading
                  tag="h6"
                  className="mb-4 text-xl font-bold lg:text-3xl"
                >
                  Rising Costs
                </GradientHeading>
                <p className="max-w-[65%] text-sm text-secondary-foreground/[.68] lg:text-base">
                  98% of store owners say higher labor costs are a challenge for
                  their business. 97% cite rising food costs
                </p>

                <div className="absolute bottom-0 right-0 -z-10">
                  <Image
                    src="/images/box-6.png"
                    width={590}
                    height={228}
                    alt="background"
                  />
                </div>
              </RadialCard>

              <RadialCard className="flex h-1/2 w-full items-end justify-end">
                <GradientHeading
                  tag="h6"
                  className="max-w-[65%] text-end text-xl font-bold lg:text-3xl"
                >
                  Will customers accept or quietly leave overpricing?
                </GradientHeading>

                <div className="absolute left-0 top-0">
                  <Image
                    src="/images/box-7.png"
                    width={590}
                    height={228}
                    alt="backgournd"
                  />
                </div>
              </RadialCard>
            </div>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="py-12 lg:py-24">
        <MaxWidthContainer>
          <div className="relative">
            <GradientHeading
              tag="h3"
              className="text-center text-xl font-bold !leading-tight lg:text-4.5xl"
            >
              Converting 5% Of Returning Customers Monthly <br />
              Can Earn $1,000,000 in A Year
            </GradientHeading>

            <Image
              src="/images/star-1.png"
              width={67}
              height={67}
              alt="box"
              className="absolute -top-20 left-0 h-12 w-12 lg:h-16 lg:w-16"
            />

            <Image
              src="/images/star-2.png"
              width={67}
              height={67}
              alt="box"
              className="absolute -bottom-16 right-0 h-12 w-12 lg:h-16 lg:w-16"
            />

            <div className="absolute left-1/2 top-1/2 -z-10 h-2/3 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gradient-to-r from-[#1558BD] via-[#E422C5] to-[#1558BD] blur-[80px]" />
          </div>
        </MaxWidthContainer>
      </section>

      <section className="py-12 lg:py-24">
        <MaxWidthContainer>
          <div className="relative flex flex-col items-start gap-4 lg:flex-row lg:items-center">
            <div className="w-full lg:w-[465px]">
              <GradientHeading
                tag="h3"
                className="text-lg font-bold !leading-tight lg:text-[40px]"
              >
                What Must A Store
                <br />
                Remove To Thrive?
              </GradientHeading>
            </div>
            <div className="relative flex w-full flex-col overflow-hidden lg:flex-1 lg:flex-row lg:pb-8">
              <div className="space-y-2 py-4 lg:w-1/2 lg:px-6">
                <p className="mb-2 text-3xl font-semibold text-[#CC5FFF]">+</p>
                <h6 className="text-xl font-bold">Remove paper menu</h6>
                <p className="text-lg text-foreground/[.68]">
                  Replace paper menus with digital ones to track customer
                  pricing acceptance and improve engagement.
                </p>
              </div>

              <div className="space-y-2 py-4 lg:w-1/2 lg:px-6">
                <p className="mb-2 text-3xl font-semibold text-[#CC5FFF]">+</p>
                <h6 className="text-xl font-bold">Cut-off Ordering staffs</h6>
                <p className="text-lg text-foreground/[.68]">
                  Staff may not build customer connections effectively; Use AI
                  and order systems to connect with customers and follow up
                  after visits.
                </p>
              </div>

              <div className="absolute bottom-0 left-1/2 hidden h-[2px] w-[568px] -translate-x-1/2 bg-gradient-to-r from-[#221F3A]/0 via-primary to-[#331F3A]/0 lg:block" />
              <div className="absolute bottom-0 left-1/2 hidden h-[270px] w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#221F3A]/0 via-primary to-[#331F3A]/0 lg:block" />
              <div className="absolute -bottom-[350px] left-1/2 hidden h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl lg:block" />
            </div>

            <div className="absolute -left-[400px] -top-[150px] h-[700px] w-[700px] rounded-full bg-primary/10 blur-3xl lg:block" />
          </div>
        </MaxWidthContainer>
      </section>

      <section className="py-12 lg:py-24">
        <MaxWidthContainer>
          <GradientHeading
            tag="h3"
            className="mb-4 text-2xl font-bold lg:mb-8 lg:text-4.5xl"
          >
            Upsell Touch Points
          </GradientHeading>

          <div className="mb-6 grid w-full grid-cols-1 gap-2 lg:mb-10 lg:grid-cols-3 lg:gap-0">
            <RadialCard className="bg-gradient-to-r from-[#221F3A]/0 to-primary/20 px-6 py-10 lg:px-10 lg:py-12">
              <div className="mb-4 flex items-end gap-4">
                <Image
                  src="/images/antenna.png"
                  width={48}
                  height={48}
                  alt="antenna"
                  className="h-8 w-8 lg:h-12 lg:w-12"
                />
                <p className="text-lg font-bold lg:text-2xl">Wifi</p>
              </div>
              <p className="lg:text-lg">
                One order grants 30 minutes of Wi-Fi access, encouraging
                customers to order more to extend usage.
              </p>
            </RadialCard>

            <RadialCard className="bg-gradient-to-r from-[#221F3A]/0 to-primary/20 px-6 py-10 lg:px-10 lg:py-12">
              <div className="mb-4 flex items-end gap-4">
                <Image
                  src="/images/antenna.png"
                  width={48}
                  height={48}
                  alt="antenna"
                  className="h-8 w-8 lg:h-12 lg:w-12"
                />
                <p className="text-lg font-bold lg:text-2xl">Orders</p>
              </div>
              <p className="lg:text-lg">
                AI identifies customer segments to recommend premium dishes.
              </p>
            </RadialCard>

            <RadialCard className="bg-gradient-to-r from-[#221F3A]/0 to-primary/20 px-6 py-10 lg:px-10 lg:py-12">
              <div className="mb-4 flex items-end gap-4">
                <Image
                  src="/images/antenna.png"
                  width={48}
                  height={48}
                  alt="antenna"
                  className="h-8 w-8 lg:h-12 lg:w-12"
                />
                <p className="text-lg font-bold lg:text-2xl">
                  Re-target marketing
                </p>
              </div>
              <p className="lg:text-lg">
                Customers visit the store. A week later, they see restaurant ads
                on Facebook, TikTok, and more.
              </p>
            </RadialCard>
          </div>

          <div className="flex justify-center">
            <Button asChild>
              <Link href="/our-solution">LEARN MORE</Link>
            </Button>
          </div>
        </MaxWidthContainer>
      </section>

      <section className="mb-8 pt-12 lg:pt-24">
        <MaxWidthContainer>
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <GradientHeading className="text-center text-2xl font-bold !leading-tight lg:text-start lg:text-4.5xl">
              Convert your
              <br /> existing customer now
            </GradientHeading>

            <Dialog>
              <DialogTrigger asChild>
                <Button>JOIN WAITING LIST NOW</Button>
              </DialogTrigger>
              <DialogContent
                hideCloseButton
                className="max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-[#221F3A8C]/80"
              >
                <DialogTitle />
                <DialogDescription />
                <div className="-mt-8">
                  <JoinWaitingListForm />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </MaxWidthContainer>
      </section>
    </>
  );
}

export default Home;
