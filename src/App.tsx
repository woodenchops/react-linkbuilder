import React from 'react';
import Header from './components/Header';
import './sass/styles.scss';
import Intro from './components/Intro';
import RequiredFields from './components/RequiredFields';
import OptionalFields from './components/OptionalFields';
import Result from './components/Result';
import PDFSection from './components/PDFSection';
import { MasterProvider } from './contexts/MasterContext';



function App() {
  return (
    <div className="App">
      <main className="main-wrapper">
        <MasterProvider>
          <Header/>
          <Intro/>
          <RequiredFields/>
          <OptionalFields/>
          <Result/>
          <PDFSection/>
        </MasterProvider>
      </main>
    </div>
  );
}

export default App;
