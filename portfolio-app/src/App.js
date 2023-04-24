import React, { useState } from "react";
import About from "./components/About";
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio'
import Header from './components/Header';
import Footer from './components/Footer';
//import project from './components/project'
// We import our HelloDiv from the components folder
import IntroDiv from "./components/HelloDiv";
import Description from './components/About'
//import  Description from './components/About'
//import myProject from "./components/project";

// App is our top-level main component that references other components
function App() {
  const[work, setWork] = useState(false)
  const [currentPage, setCurrentPage] = useState('About');


  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        // return <Resume />;
      default:
        return <About />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
    <div className="bgColor">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderCurrentPage()}
      <Footer />
    </div>
  </>
  )
 
}

export default App;
