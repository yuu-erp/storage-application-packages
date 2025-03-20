import Image from "next/image";
import Link from "next/link";

const code = "Avbc6755hj";

function GetCode() {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("The code has been copied to the clipboard.");
  };

  return (
    <div className="flex flex-col items-center gap-6 px-4 text-center">
      <Image src="/images/box-3.png" alt="box" width={180} height={180} />

      <div className="relative flex w-full max-w-xl justify-center overflow-hidden rounded-2xl bg-radial-[at_50%_75%] from-[#FF00FF] to-[#00DAEA]/10 py-4">
        <div className="absolute inset-0 bg-[#393d5e]/70" />
        <span className="z-10 text-lg font-bold lg:text-2xl">{code}</span>

        <button
          onClick={handleCopy}
          className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
        >
          <Image
            draggable={false}
            src="/images/copy.png"
            alt="copy"
            width={24}
            height={24}
          />
        </button>
      </div>

      <h3 className="text-xl font-bold lg:text-3xl">
        Metanode Activation Code
      </h3>
      <p className="text-foreground/80 max-w-3xl">
        Enter your unique activation code to access Metanode&apos;s full
        features. Unlock the future of mobile cryptocurrency management with
        ease.
      </p>

      <Link
        href="https://play.google.com/store/apps/details?id=com.metanode.main"
        target="_blank"
        className="flex h-12 cursor-pointer items-center rounded-2xl bg-gradient-to-br from-[#cb5dff] to-[#1d41be] px-20 text-base font-bold hover:opacity-90 lg:h-16 lg:text-lg"
      >
        DOWNLOAD APP
      </Link>
    </div>
  );
}

export default GetCode;
