import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
    
    body {
        margin: 0;
        font-family: 'Syne', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
  
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export const Section = styled.section`
  background-color: #d2d2d3;
  width: 100vw;
  padding: 10vh 0;
`;

export const SectionInfo = styled(Section)`
  background-color: #0caa6d;
`;
