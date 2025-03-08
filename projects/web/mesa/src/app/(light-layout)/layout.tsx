import React from "react";
import Header from "@/components/layout/header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header mode="light" />
      {children}
    </>
  );
}

export default Layout;
