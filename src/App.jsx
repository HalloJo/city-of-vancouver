import React from 'react';
import { GlobalStyle, Section, SectionInfo } from './styles';
import Button from './components/Button/Button';

const App = () => {
  return (
      <>
      <GlobalStyle />
      <div className="App">
        <Section className="Hero">
          <Button label="First button"  />
          <Button label="Second button" background="secondary" />
        </Section>
        <SectionInfo className="Info">
          <h1>Info stuff!</h1>
        </SectionInfo>
      </div>
      </>
  );
}

export default App;
