import Image from "next/image";
import HomeCarousel from "@/components/home/home-carousel";
import OpenApp from "@/components/home/open-app";
import SocialSidebar from "@/components/home/social-sidebar";
import Container from "@/components/ui/container";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[url(/images/mobile-background.png)] bg-cover bg-no-repeat lg:bg-[url(/images/desktop-background.png)]">
      <Container className="relative z-10 lg:py-16">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={275}
          height={40}
          className="absolute top-8 left-0 z-10 scale-80 lg:scale-100"
        />

        <div className="flex h-full items-end">
          <div className="w-full space-y-10 rounded-t-3xl bg-white/20 p-10 backdrop-blur-2xl lg:w-1/2 lg:rounded-3xl">
            <h1 className="max-se:text-[1.8em] mb-3 text-[2.5em] font-bold max-md:text-[2em]">
              Metanode: Mobile Mining & Smart Contract Platform
            </h1>

            <p className="mb-8 text-[1.2em] font-normal text-white/50 max-md:text-[1em]">
              Metanode is your mobile hub for cryptocurrency mining and smart
              contracts. Explore, mine, and transact with ease
            </p>

            <Dialog>
              <DialogTrigger className="px-auto w-full cursor-pointer rounded-2xl bg-gradient-to-br from-[rgb(203,93,255)] to-[rgb(29,65,190)] py-5 text-base font-bold outline-none hover:opacity-90 lg:w-fit lg:px-24 lg:text-2xl">
                OPEN APP
              </DialogTrigger>
              <DialogContent className="w-[95%] max-w-5xl rounded-2xl bg-black/10 text-white shadow-xl backdrop-blur-3xl">
                <DialogTitle> </DialogTitle>
                <DialogDescription> </DialogDescription>
                <OpenApp />
                <DialogClose />
              </DialogContent>
            </Dialog>
          </div>
          <div className="w-0 text-end lg:w-1/2">
            <HomeCarousel />
          </div>
        </div>
        <SocialSidebar />
      </Container>
    </main>
  );
}
