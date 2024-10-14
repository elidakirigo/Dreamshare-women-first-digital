// Import the Image component from Next.js
import Image from "next/legacy/image";
// Import Footer Link Conponent
import FooterLink from "./FooterLink";

// Create the Footer component
const Footer = () => {
  const links = [
    { id: 1, href: "#", ariaLabel: "About Us Page", name: "About" },
    { id: 2, href: "#", ariaLabel: "Contact Us Page", name: "Contact" },
    { id: 3, href: "#", ariaLabel: "Press Page", name: "Press" },
    { id: 4, href: "#", ariaLabel: "Blog Page", name: "Blog" },
    {
      id: 5,
      href: "#",
      ariaLabel: "Terms and Privacy Page",
      name: "Terms and Privacy",
    },
    { id: 6, href: "#", ariaLabel: "Help Page", name: "Help" },
  ];
  return (
    // Footer container with a border
    <footer className="border-t-4 py-5 mt-10 border-blazingRed" role="contentinfo">
      <div className="xs:w-[94%] lg:w-[70%] mx-auto flex justify-between flex-wrap">
        {/* Company information section */}
        <div className="w-full md:w-[25%] lg:w-[25%] mb-2 text-center md:text-left relative">
          <p className="font-montserrat uppercase text-blazingRed text-xl">
            Dreamshare
          </p>
        </div>
        {/* Links section */}
        <div className="w-full md:w-[25%] lg:w-[25%]  relative">
          <p className="font-montserrat font-bold Capitalize text-center md:text-left text-gray-700 text-xl">
            Company
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center  md:gap-0 md:flex-col font-roboto font-light my-5">
            {links.map((link) => (
              <FooterLink
                key={link.id}
                href={link.href}
                ariaLabel={link.ariaLabel}
                name={link.name}
              />
            ))}
          </div>
        </div>
        {/* Partners section (placeholder for now) */}
        <div className="w-full md:w-[30%] lg:w-[30%] , relative">
          <p className="font-montserrat font-bold capitalize text-center md:text-left text-gray-700 text-xl">
            Partners
          </p>
        </div>
        {/* Logo section */}
        <div className="w-full md:w-[10%] lg:w-[15%] mb-10 mt-5 relative flex flex-col items-center">
          <div className="">
            <p className="font-montserrat font-bold uppercase text-slate-500 text-xs">
              Designed By
            </p>
          </div>
          <div className="py-2">
            <Image
              src="/images/layout/footer/web-designer-logo.svg"
              alt="designer-logo"
              width="113"
              height="43"
              quality={100}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
