import Image from "next/image";

function GoToMetaNodePage({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <Image src="/images/box-3.png" alt="box" width={180} height={180} />
      <h3 className="text-xl font-bold lg:text-3xl">Mở đến trang Metanode</h3>
      <p className="text-foreground/80 mb-8 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur. Diam arcu odio tempor elit
        semper feugiat id morbi purus. Neque purus ut aliquet vitae quis in cras
        ut dui.
      </p>

      <button
        onClick={onNext}
        className="h-12 cursor-pointer rounded-2xl bg-gradient-to-br from-[#cb5dff] to-[#1d41be] px-20 font-bold hover:opacity-90 lg:h-16 lg:text-lg"
      >
        OPEN APP
      </button>
    </div>
  );
}

export default GoToMetaNodePage;
