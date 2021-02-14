import React from "react";
import { ReactComponent as LogoImage } from "../styles/images/logo.svg";
export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <LogoImage className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">react bp</span>
          <span className="heading-primary--sub">
            scalable react boilerplate
          </span>
        </h1>
        <a href="#section-packages" className="btn btn-white btn-animated">
          get started
        </a>
      </div>
    </header>
  );
}
