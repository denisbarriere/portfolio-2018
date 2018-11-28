import styled from "styled-components";
import { colors, transition } from "Utilities";

export const HeaderWrapper = styled.header`
  height: 3.125rem;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    height: 4.75rem;
  }
`;

export const Logo = styled.div`
  height: 3.125rem;
  width: 4.375rem;

  @media (min-width: 768px) {
    height: 4.75rem;
    width: 11rem;
  }

  > a {
    margin-left: 1.25rem;
    height: 2.125rem;
    width: 2.125rem;
    padding: 0.5rem;
    background-color: ${colors.black};
    display: inline-block;

    @media (min-width: 480px) {
      margin-left: 2.5rem;
    }
    @media (min-width: 768px) {
      margin-left: 3.75rem;
      height: 2.75rem;
      width: 2.75rem;
      padding: 1rem;
    }
    @media (min-width: 1200px) {
      margin-left: 6.25rem;
    }
  }
`;

export const NavLinks = styled.nav`
  text-align: center;
  width: 6rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 480px) {
    width: 8.75rem;
  }

  > a {
    border-bottom: 3px solid ${colors.lightGrey};
    padding-bottom: 0.375rem;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    color: ${colors.black};
    ${transition({ property: "border-bottom-color" })};

    @media (min-width: 480px) {
      padding-bottom: 0.5rem;
      font-size: 1rem;
    }
  }
  > a:hover,
  > a.active {
    border-bottom-color: ${colors.black};
  }
`;

export const ContactLinks = styled.nav`
  width: 4.5rem;
  margin-right: 1.25rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 480px) {
    margin-right: 0;
  }
  @media (min-width: 576px) {
    width: 5.25rem;
  }
  @media (min-width: 768px) {
    width: 6.5rem;
  }

  > a > svg {
    height: 1.25rem;

    @media (min-width: 576px) {
      height: 1.5rem;
    }
    @media (min-width: 768px) {
      height: 1.75rem;
    }
  }
  > a path {
    ${transition({})};
  }
  > a:hover path {
    fill: ${colors.grey};
  }
`;
