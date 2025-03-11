import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const links = [
  {
    href: "https://www.facebook.com/chainlink.smartcontract",
    icon: "/images/facebook.png",
  },
  { href: "https://x.com/chainlink", icon: "/images/x.png" },
  { href: "https://www.youtube.com/@chainlink", icon: "/images/youtube.png" },
  { href: "https://t.me/chainlinkofficial", icon: "/images/telegram.png" },
  {
    href: "https://github.com/smartcontractkit/chainlink",
    icon: "/images/github.png",
  },
  { href: "https://medium.com/chainlink", icon: "/images/medium.png" },
];

function SocialLink({
  href,
  icon,
  smallButton = false,
}: {
  href: string;
  icon: string;
  smallButton?: boolean;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "items-self-end flex aspect-square items-center justify-center rounded-full bg-white/30",
        smallButton ? "size-10" : "size-20",
      )}
    >
      <Image
        src={icon}
        alt={icon}
        width={40}
        height={40}
        className={cn(smallButton ? "size-5" : "lg:size-7")}
      />
    </Link>
  );
}

function SocialSidebar() {
  return (
    <>
      {/* on mobile */}
      <div className="absolute top-28 left-4 z-10 flex flex-col gap-3 lg:hidden">
        {links.slice(0, 2).map((link) => (
          <SocialLink key={link.href} smallButton {...link} />
        ))}
        <Dialog>
          <DialogTrigger className="flex aspect-square size-10 items-center justify-center rounded-full bg-white/30">
            <Ellipsis className="size-5" />
          </DialogTrigger>

          <DialogContent className="flex h-full max-h-screen w-full max-w-screen items-center rounded-none border-none bg-black/50 text-white backdrop-blur-xl">
            <DialogTitle> </DialogTitle>
            <DialogDescription> </DialogDescription>
            <div className="flex h-full items-center justify-center">
              <div className="grid w-full grid-cols-3 gap-y-6">
                {links.map((link) => (
                  <div key={link.href} className="flex justify-center">
                    <SocialLink key={link.href} {...link} />
                  </div>
                ))}
              </div>
            </div>
            <DialogClose />
          </DialogContent>
        </Dialog>
      </div>

      {/* on desktop */}
      <div className="absolute inset-y-0 right-0 z-10 hidden h-full flex-col justify-center gap-8 lg:flex">
        {links.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </div>
    </>
  );
}

export default SocialSidebar;
