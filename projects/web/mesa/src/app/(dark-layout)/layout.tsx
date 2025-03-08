import React from "react";
import Header from "@/components/layout/header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header mode="dark" />
      {children}
    </>
  );
}

export default Layout;
