import styled from "styled-components";
import { colors, transition } from "Utilities";

export const HeaderWrapper = styled.header`
  height: 4.75rem;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  height: 4.75rem;
  width: 11rem;

  > a {
    margin-left: 100px;
    height: 2.75rem;
    width: 2.75rem;
    padding: 1rem;
    background-color: ${colors.black};
    display: inline-block;
  }
`;

export const NavLinks = styled.nav`
  text-align: center;
  width: 8.75rem;
  display: flex;
  justify-content: space-between;

  > a {
    font-size: 1rem;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    padding-bottom: 0.5rem;
    color: ${colors.black};
    border-bottom: 3px solid ${colors.lightGrey};
    ${transition({})};
  }
  > a:hover,
  > a.active {
    border-bottom-color: ${colors.black};
  }
`;

export const ContactLinks = styled.nav`
  width: 6.5rem;
  display: flex;
  justify-content: space-between;
  > a > svg {
    height: 1.75rem;
  }
  > a path {
    ${transition({})};
  }
  > a:hover path {
    fill: ${colors.grey};
  }
`;
