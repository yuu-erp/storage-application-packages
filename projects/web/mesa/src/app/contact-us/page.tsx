import { Metadata } from "next";
import ContactForm from "@/components/contact/contact-form";
import LandingBackground from "@/components/contact/landing-background";
import { METADATA } from "@/lib/constant";

export const metadata: Metadata = {
  ...METADATA,
  title: "Mesa - Contact Us",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

function ContactUs() {
  return (
    <>
      <section className="relative z-10">
        <LandingBackground />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="max-w-[363px] pb-4 text-center text-lg font-bold leading-snug text-secondary-foreground lg:pb-12 lg:text-[3rem]">
            Transform
            <br />
            your store now
          </h1>
        </div>
      </section>

      <section className="relative">
        <div className="relative z-30 pb-36 pt-12">
          <ContactForm />
        </div>

        <div className="absolute -top-12 left-1/2 z-20 h-[400px] w-[800px] -translate-x-1/2 rounded-[50%] bg-secondary-background blur-md lg:-top-40 lg:h-[663px] lg:w-[2738px] lg:blur-xl" />
      </section>
    </>
  );
}

export default ContactUs;
