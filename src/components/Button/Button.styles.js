import styled from "styled-components";

export const ButtonPrimary = styled.button`
  padding: 1.5rem;
  background: ${({ background }) =>
    background === "secondary" ? "#0d008a" : "#0caa6d"};
  color: ${({ background }) =>
    background === "secondary" ? "#0caa6d" : "#0d008a"};
  border: none;
  transition: background 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  font-weight: 700;
  border-radius: 0 0 1rem 0;
  margin: 1em;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-family: "Syne", sans-serif;

  &:hover {
    background: white;
    transform: translateY(-0.25rem);
  }
`;
