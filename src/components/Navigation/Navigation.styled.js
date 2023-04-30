import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1100;
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.3s ease-in-out;
  &.active {
    color: #5cd3a8;
  }
`;
