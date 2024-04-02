import React from 'react';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';
import SectionOne  from './components/SectionOne';
import SectionFive from './components/SectionFive';
import SectionSix  from './components/SectionSix';
import SectionSeven  from './components/SectionSeven';

import ManagerSection  from './components/ManagerSection';






const App = () => {
  return (
    <>
      <Navbar />
      <div className="mt-4 mx-8"> 
      <SectionOne/>
      </div>
      <div className="mt-4 mx-8"> 
      <ManagerSection />
      </div>
      <div className="mt-4 mx-8">
      <SectionFive/>
      </div>
      <div className="mt-4 mx-8">
      <SectionSix/>
      </div>
      <div className="mt-4 mx-8">
      <SectionSeven/>
      </div>
      <div className="mt- mx-8">
      </div>
      <Footer />
      
    </>
  );
};

export default App;



