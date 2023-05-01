import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkBack = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 39px;
  border-radius: 10px;
  padding: 14px 28px;
  gap: 4px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #5cd3a8;
  }
  @media (max-width: 780px) {
    margin-left: 0;
    }
`;