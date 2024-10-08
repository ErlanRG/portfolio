import Image from "next/image";
import SocialList from "./SocialList";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About me" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact me" },
  ];

  return (
    <footer className="bg-cat-surface0 text-cat-text py-3">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <Image
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
            src="/icons/logoerlanrangel.webp"
            alt="Erlan Rangel Logo"
            width={45}
            height={45}
          />
        </div>
        <nav className="flex space-x-4 mb-4">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="block px-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-cat-teal">
              {label}
            </a>
          ))}
        </nav>
        <div className="mb-4">
          <SocialList />
        </div>
        <div className="text-center">
          <p className="text-sm">© {currentYear} Erlan Rangel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
