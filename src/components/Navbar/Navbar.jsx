import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      // Determine active section based on scroll position
      const sections = ["home", "about", "menu", "awards", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          return scrollTop >= offsetTop && scrollTop < offsetBottom;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setToggleMenu(false);
  };

  return (
    <nav className={`app__navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="app__navbar-logo">
        <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
          <img src={images.gericht} alt="app__logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li className="p__opensans">
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "#about")}
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li className="p__opensans">
          <a
            href="#menu"
            onClick={(e) => handleLinkClick(e, "#menu")}
            className={activeSection === "menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li className="p__opensans">
          <a
            href="#awards"
            onClick={(e) => handleLinkClick(e, "#awards")}
            className={activeSection === "awards" ? "active" : ""}
          >
            Awards
          </a>
        </li>
        <li className="p__opensans">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a
          href="#login"
          className="p__opensans"
          onClick={(e) => handleLinkClick(e, "#login")}
        >
          Log In / Registration
        </a>
        <div />
        <a
          href="#contact"
          className="p__opensans"
          onClick={(e) => handleLinkClick(e, "#contact")}
        >
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          className="hamburger-icon"
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "#home")}
                  className={activeSection === "home" ? "active" : ""}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "#about")}
                  className={activeSection === "about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleLinkClick(e, "#menu")}
                  className={activeSection === "menu" ? "active" : ""}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#awards"
                  onClick={(e) => handleLinkClick(e, "#awards")}
                  className={activeSection === "awards" ? "active" : ""}
                >
                  Awards
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className={activeSection === "contact" ? "active" : ""}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
