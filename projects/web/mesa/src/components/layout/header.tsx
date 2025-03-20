import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import Navigation from "./navigation";

function Header() {
  const links = [
    { path: "/", label: "Your Problems" },
    { path: "/our-solution", label: "Our Solution" },
    { path: "/case-study", label: "Case Study" },
    { path: "/tech-assurance", label: "Tech Assurance" },
    { path: "/career", label: "Career" },
    { path: "/contact-us", label: "Contact Us" },
    { path: "/our-team", label: "Our Team" },
  ];

  return (
    <>
      {/* mobile hamburger menu */}
      <header className="absolute left-0 top-2 z-50 flex w-full justify-between px-4 lg:hidden">
        <Logo />

        <MobileMenu links={links} />
      </header>
      {/* large device navigation */}
      <header className="absolute left-0 right-0 top-0 z-50 hidden h-20 bg-[#01001C]/10 lg:block">
        <Navigation links={links} />
      </header>
    </>
  );
}

export default Header;
