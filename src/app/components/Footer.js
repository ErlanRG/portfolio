import Image from "next/image";
import SocialList from "./SocialList";

const Footer = () => {
  return (
    <footer className="bg-cat-surface0 text-cat-text py-3">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <Image
            className="transition-transform duration-300 ease-in-out transform hover:scale-110" // Clases de Tailwind
            src="/icons/logoerlanrangel.webp"
            alt="logo"
            width={45}
            height={45}
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-400 transition-colors">About me</a>
          <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-gray-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Contact me</a>
        </div>
        <div className="mb-4">
          <SocialList />
        </div>
        <div className="text-center">
          <p className="text-sm">© {new Date().getFullYear()} Erlan Rangel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
