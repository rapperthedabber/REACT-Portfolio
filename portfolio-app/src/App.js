import React, { useState } from "react";
//import project from './components/project'
// We import our HelloDiv from the components folder
import IntroDiv from "./components/HelloDiv";
import Description from './components/About'
//import  Description from './components/About'
//import myProject from "./components/project";

// App is our top-level main component that references other components
function App() {
  const[work, setWork] = useState(false)

  return (
  <div>
    <IntroDiv work={work} setWork={setWork} />
  </div>
  )
 
}

export default App;
