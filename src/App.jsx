import React from 'react';
import { GlobalStyle, Section, SectionInfo } from './styles';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

const App = () => {
  return (
      <>
      <GlobalStyle />
      <div className="App">
      <Header />
        <Section className="Hero">
          <Button label="Primary button"  />
          <Button label="Secondary button" background="secondary" />
        </Section>
        {/* <SectionInfo className="Info">
          <h1>Info stuff!</h1>
        </SectionInfo> */}
      </div>
      </>
  );
}

export default App;
