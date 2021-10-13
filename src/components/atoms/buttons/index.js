import styled from "styled-components";
import { COLOR } from "../../constants/color";

const RoundButton = styled.button`
  background-color: transparent; /* Green */
  border: 3px solid ${COLOR.google[red]};
  height: 3rem;
  min-width: 12rem;
  padding: 0 3rem;
  color: ${COLOR.google[red]};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 65px;
  margin: auto auto;

  &:hover {
    background-color: ${COLOR.primary[500]};
    color: white;
    transition-duration: 0.3s;
  }
`;

export default RoundButton;
