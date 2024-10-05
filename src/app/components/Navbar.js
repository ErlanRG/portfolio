"use client"

import Image from "next/image";
import NavLink from "./NavLink";

const smoothScroll = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-cat-base fixed-top border-body" data-bs-theme="dark">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fs-4" href="#home" onClick={smoothScroll}>
          <Image
            src="/icons/logoerlanrangel.webp"
            alt="logo"
            width={75}
            height={75}
          />
        </a>

        {/* Toggle btn */}
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* SideBar */}
        <div className="sidebar offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header text-cat-text border-bottom border-white">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Portfolio</h5>
            <button type="button" className="btn-close btn-close-cat-text shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          {/* SideBar Body */}
          <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
            <ul className="nav navbar-nav nav-underline justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
              <NavLink onClick={smoothScroll} href="#home">Home</NavLink>
              <NavLink onClick={smoothScroll} href="#projects">Projects</NavLink>
              <NavLink onClick={smoothScroll} href="#about">About me</NavLink>
            </ul>

            {/* Contact */}
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
              <a className="text-decoration-none text-xl px-3 py-1 bg-cat-red rounded-3 text-cat-base" href="#contact" onClick={smoothScroll}>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
