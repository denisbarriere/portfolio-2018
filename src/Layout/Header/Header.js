import React from "react";
import { NavLink, Link } from "react-router-dom";

import { HeaderWrapper, Logo, NavLinks, ContactLinks } from "./styled";
import { Icon } from "Elements";

const GITHUB_ACCOUNT = "//github.com/denisbarriere";
const LINKEDIN_ACCOUNT = "//www.linkedin.com/in/denisbarriere/";
const CONTACT_EMAIL = "denis.barriere@gmail.com";

const Header = () => (
  <HeaderWrapper>
    <Logo>
      <Link to="/">
        <Icon name="logo" color="white" />
      </Link>
    </Logo>
    <NavLinks>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </NavLinks>
    <ContactLinks>
      <a href={GITHUB_ACCOUNT} target="_blank" rel="noreferrer noopener">
        <Icon name="github" />
      </a>
      <a href={LINKEDIN_ACCOUNT} target="_blank" rel="noreferrer noopener">
        <Icon name="linkedin" />
      </a>
      <a href={`mailto:${CONTACT_EMAIL}`}>
        <Icon name="envelope-open" />
      </a>
    </ContactLinks>
  </HeaderWrapper>
);

export default Header;
