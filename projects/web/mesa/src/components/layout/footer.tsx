import Image from "next/image";
import Link from "next/link";
import appleLogo from "@public/images/apple.png";
import chplayLogo from "@public/images/chplay.png";
import facebookLogo from "@public/images/facebook.png";
import instagramLogo from "@public/images/instagram.png";
import linkedinLogo from "@public/images/linkedin.png";
import logo from "@public/images/logo-footer.png";
import telegramLogo from "@public/images/telegram.png";
import { Button } from "../ui/button";
import MaxWidthContainer from "./max-width-container";

function Footer() {
  return (
    <footer className="bg-[#1B192E]/[.55]">
      <MaxWidthContainer>
        <div className="grid grid-cols-1 gap-4 gap-y-6 py-8 text-secondary-foreground lg:grid-cols-2 lg:py-16">
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold lg:mb-2 lg:text-2xl">
                About Mesanovas
              </h3>
              <p className="text-sm font-medium opacity-70 lg:text-base">
                Smart Changes, Big Gains
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-end">
              <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-white">
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt="logo mesa"
                  className="h-full w-full scale-125 object-cover"
                />
              </div>
              <div className="space-y-3">
                <p className="font-medium">Download App</p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-3 rounded-[4.5px] bg-white px-3 py-1 text-start text-xs text-[#01001C]">
                    <Image
                      src={appleLogo}
                      width={24}
                      height={24}
                      alt="apple logo"
                    />
                    <div>
                      <p>Avaiable on the</p>
                      <p className="font-semibold">APP STORE</p>
                    </div>
                  </button>

                  <button className="flex items-center gap-3 rounded-[4.5px] bg-white px-3 py-1 text-start text-xs text-[#01001C]">
                    <Image
                      src={chplayLogo}
                      width={24}
                      height={24}
                      alt="ch play logo"
                    />
                    <div>
                      <p>Get it on</p>
                      <p className="font-semibold">GOOGLE PLAY</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-y-12">
            <div>
              <h6 className="mb-3 text-xl font-bold text-white">Developer</h6>
              <Button variant="link" asChild>
                <Link href="#">Documentation</Link>
              </Button>
            </div>

            <div>
              <h6 className="mb-3 text-xl font-bold text-white">Contact us</h6>
              <Button variant="link" asChild>
                <Link href="mailto:info@mesanovas.com">info@mesanovas.com</Link>
              </Button>
            </div>

            <div className="flex flex-col items-start gap-1">
              <h6 className="mb-3 text-xl font-bold text-white">Resources</h6>
              <Button variant="link" asChild>
                <Link href="/case-study">Case study</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="#">FAQ</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="#">Privacy & Term</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="#">Cookie Settings</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="#">Legal Compliance</Link>
              </Button>
            </div>

            <div className="space-y-4 text-sm text-white/70">
              <span>
                Phone:{" "}
                <Button variant="link" asChild>
                  <Link href="tel:+351213433728">+351 21 343 3728</Link>
                </Button>
              </span>
              <p>Rua das Portas de Santo Antão, no 39, 30, 1150 - 264 Lisboa</p>
              <div className="flex gap-3 pt-2 lg:pt-6">
                <Link href="#" target="_blank">
                  <Image
                    src={facebookLogo}
                    width={32}
                    height={32}
                    alt="facebook"
                  />
                </Link>

                <Link href="#" target="_blank">
                  <Image
                    src={linkedinLogo}
                    width={32}
                    height={32}
                    alt="linkedin"
                  />
                </Link>

                <Link href="#" target="_blank">
                  <Image
                    src={telegramLogo}
                    width={32}
                    height={32}
                    alt="telegram"
                  />
                </Link>

                <Link href="#" target="_blank">
                  <Image
                    src={instagramLogo}
                    width={32}
                    height={32}
                    alt="instagram"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </footer>
  );
}

export default Footer;
