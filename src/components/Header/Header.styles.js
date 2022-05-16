import styled from "styled-components";
import { ReactComponent as LogoCOV } from "../../assets/cov_logo.svg";

export const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(LogoCOV)`
  width: 30%;
`;
