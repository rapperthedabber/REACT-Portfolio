// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
import React, { useState } from "react";
import './web.css'
import Description from './About';
//import myProject from './project';

export default function Navbar({work, setWork}){
  const[about, setAbout] = useState(false)
  return (
    <div>
    {work ? (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Jerry's Homepage</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
          <Description about = {about} setAbout ={setAbout}/>
              <a class="nav-link" href='#Works' onClick={()=>setWork(!work)}>Works</a>
              <a class="nav-link" href ="#Contact">Contact</a>
        
            </div>
          </div>
        </div>
      </nav>
  <div id = 'Works'>
  <div class="container">
    <div class="card-deck">
      <div class="col-12 col-lg-3 col-md-6">
        <div class="card text-center">
          <div class="card-body">
           <h5 class="card-title1" >Social Media App</h5>
            <img src="https://user-images.githubusercontent.com/116526260/226284966-3467d693-b604-4421-8d4c-527f792acd00.png" alt ='stuff'/>
            <p class="card-text">Skills: JavaScript, HandleBars, CSS, node.js, MySQL, express, npm, Heroku</p>
            <a href="https://afternoon-coast-30019.herokuapp.com/login" class="btn btn-primary">Go To</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3 col-md-6">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title2">Dictionary Website</h5>
            <img src="https://user-images.githubusercontent.com/106128188/213545277-d11bd79d-e280-42f0-ad70-85fc3c5ea893.png" alt = 'stuff'/>
            <p class="card-text">Skils: API, local Storage, JavaScript, HTML, CSS</p>
            <a href="https://rapperthedabber.github.io/Daring-Dinoursars/" class="btn btn-primary">Go To</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3 col-md-6">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title3">Shape Generator</h5>
            <img src="https://user-images.githubusercontent.com/116526260/217990514-77433b90-4110-44ef-9675-7fb6afe1a182.png" alt = 'stuff'/>
            <p class="card-text">Skills: Npm, node.js, Inquirer, JavaScript</p>
            <a href="https://github.com/rapperthedabber/Shape-Generator.git" class="btn btn-primary">Go To</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3 col-md-6">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title4">Note Taker App</h5>
            <img src = 'https://user-images.githubusercontent.com/116526260/219551298-fbc61332-6e5f-481b-beb0-728e9ee716bf.png' alt = 'stuff'/>
            <p class="card-text">Skills: Node.js, express, npm, mySQL</p>
            <a href=" https://notetaker-jerry.herokuapp.com/notes" class="btn btn-primary">Go To</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>)
: (
  <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Jerry's Homepage</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <Description about = {about} setAbout ={setAbout}/>
       <a class="nav-link" href='#Works' onClick={()=>setWork(!work)}>Works</a>
        <a class="nav-link" href ="#Contact">Contact</a>
      </div>
    </div>
  </div>
</nav>
<h1 id ='welcome'>Welcome to my Page</h1>
</>
)
}
</div>)
  
}

// function IntroDiv() {
//   return ( 
//     <>
//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//     <div class="container-fluid">
//       <a class="navbar-brand" href="#">Jerry's Homepage</a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div class="navbar-nav">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//           <a class="nav-link" id= "Profile" >About</a>
//           <a class="nav-link" href='#Works' onClick={myProject}>Works</a>
//           <a class="nav-link" href ="#Contact">Contact</a>
//         </div>
//       </div>
//     </div>
//   </nav>
//   {/* <div class="Time-container">
//     <h1 id="Date"></h1>
//     <h2 id = "Time"></h2>
//   </div>
//   <div id = 'Works'>
//   <div class="container">
//     <div class="card-deck">
//       <div class="col-12 col-lg-3 col-md-6">
//         <div class="card text-center">
//           <div class="card-body">
//            <h5 class="card-title1" >Social Media App</h5>
//             <img src="https://user-images.githubusercontent.com/116526260/226284966-3467d693-b604-4421-8d4c-527f792acd00.png" alt ='stuff'/>
//             <p class="card-text">Skills: JavaScript, HandleBars, CSS, node.js, MySQL, express, npm, Heroku</p>
//             <a href="https://afternoon-coast-30019.herokuapp.com/login" class="btn btn-primary">Go To</a>
//           </div>
//         </div>
//       </div>
//       <div class="col-12 col-lg-3 col-md-6">
//         <div class="card text-center">
//           <div class="card-body">
//             <h5 class="card-title2">Dictionary Website</h5>
//             <img src="https://user-images.githubusercontent.com/106128188/213545277-d11bd79d-e280-42f0-ad70-85fc3c5ea893.png" alt = 'stuff'/>
//             <p class="card-text">Skils: API, local Storage, JavaScript, HTML, CSS</p>
//             <a href="https://rapperthedabber.github.io/Daring-Dinoursars/" class="btn btn-primary">Go To</a>
//           </div>
//         </div>
//       </div>
//       <div class="col-12 col-lg-3 col-md-6">
//         <div class="card text-center">
//           <div class="card-body">
//             <h5 class="card-title3">Shape Generator</h5>
//             <img src="https://user-images.githubusercontent.com/116526260/217990514-77433b90-4110-44ef-9675-7fb6afe1a182.png" alt = 'stuff'/>
//             <p class="card-text">Skills: Npm, node.js, Inquirer, JavaScript</p>
//             <a href="https://github.com/rapperthedabber/Shape-Generator.git" class="btn btn-primary">Go To</a>
//           </div>
//         </div>
//       </div>
//       <div class="col-12 col-lg-3 col-md-6">
//         <div class="card text-center">
//           <div class="card-body">
//             <h5 class="card-title4">Note Taker App</h5>
//             <img src = 'https://user-images.githubusercontent.com/116526260/219551298-fbc61332-6e5f-481b-beb0-728e9ee716bf.png' alt = 'stuff'/>
//             <p class="card-text">Skills: Node.js, express, npm, mySQL</p>
//             <a href=" https://notetaker-jerry.herokuapp.com/notes" class="btn btn-primary">Go To</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}
// <h1 id = 'welcome'>Welcome to my Page </h1>

//   </>
//   )

// }

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file

