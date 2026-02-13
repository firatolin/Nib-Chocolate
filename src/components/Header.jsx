import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-20 flex items-stretch justify-between gap-5 max-w-7xl m-auto p-6">
        <div className="flex items-center justify-between bg-white rounded-xl w-full px-4 py-3">
          <img src={Logo} alt="" className="max-w-36" />
          <nav>
            <ul className="flex items-center gap-9 font-medium tracking-tight">
              <li>
                <a href="">Flavors</a>
              </li>
              <li>
                <a href="">The Story</a>
              </li>
              <li>
                <a href="">How it's Made</a>
              </li>
              <li>
                <a href="">For Your Loved one.</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
