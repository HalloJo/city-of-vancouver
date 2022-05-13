import styled from "styled-components";

export const ButtonPrimary = styled.button`
  padding: 20px;
  background: ${({ background }) =>
    background === "secondary" ? "#0d008a" : "#0caa6d"};
  color: ${({ background }) =>
    background === "secondary" ? "#0caa6d" : "#0d008a"};
  border: none;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: white;
  }
`;
