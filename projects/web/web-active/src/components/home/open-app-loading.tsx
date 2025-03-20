"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import loading from "@/components/lottie/loading.json";

function OpenAppLoading({ onNext }: { onNext: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onNext();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [onNext]);

  return (
    <div className="flex flex-col items-center py-12">
      <Lottie animationData={loading} className="h-64 w-64" />
      <h3 className="text-xl font-bold lg:text-3xl">Checking ...</h3>
    </div>
  );
}

export default OpenAppLoading;
