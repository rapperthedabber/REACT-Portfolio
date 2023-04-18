import React, { useState } from "react";
//import project from './components/project'
// We import our HelloDiv from the components folder
import IntroDiv from "./components/HelloDiv";
//import myProject from "./components/project";

// App is our top-level main component that references other components
function App() {
  const[work, setWork] = useState(false)
  return <IntroDiv work={work} setWork={setWork}/>;
 
}

export default App;
