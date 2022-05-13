import React from 'react';
import { GlobalStyle, Section, SectionInfo } from './styles';

const App = () => {
  return (
      <>
      <GlobalStyle />
      <div className="App">
        <Section className="Hero">
          <h1>Hero stuff!</h1>
        </Section>
        <SectionInfo className="Info">
          <h1>Info stuff!</h1>
        </SectionInfo>
      </div>
      </>
  );
}

export default App;
