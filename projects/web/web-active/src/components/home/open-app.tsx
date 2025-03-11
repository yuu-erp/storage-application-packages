"use client";

import { useState } from "react";
import GetCode from "./get-code";
import GoToMetaNodePage from "./go-to-metanode-page";
import OpenAppLoading from "./open-app-loading";

function OpenApp() {
  const [step, setStep] = useState(0);

  return (
    <div className="rounded-3xl py-12">
      {step === 0 && <GoToMetaNodePage onNext={() => setStep(1)} />}
      {step === 1 && <OpenAppLoading onNext={() => setStep(2)} />}
      {step === 2 && <GetCode />}
    </div>
  );
}

export default OpenApp;
