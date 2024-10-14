type FooterLinkProps = {
  href: string;
  ariaLabel: string;
  name: string;
};
const FooterLink = ({ href, ariaLabel, name }: FooterLinkProps) => {
  return (
    <a
      href={href}
      className="py-1 px-3 text-slate-500 text-base hover:text-white hover:bg-blazingRed"
      aria-label={ariaLabel}
    >
      {name}
    </a>
  );
};

export default FooterLink;
