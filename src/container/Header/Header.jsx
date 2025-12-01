import React, { useEffect, useRef } from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => {
  const headerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleExploreMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      const offsetTop = menuSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info" ref={headerRef}>
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
          morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
          tellus{" "}
        </p>
        <button type="button" className="custom__button" onClick={handleExploreMenu}>
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img" ref={imgRef}>
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
