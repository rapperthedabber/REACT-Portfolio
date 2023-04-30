import PDF from '../Images/icons8-pdf.gif'
import TS from '../Images/TS.png'
import Sql from '../Images/sql.png'
import React from "react";
import HTML from '../Images/HTML.png'
import Mongo from '../Images/Mongo.png'
import ReactPic from '../Images/React.png'
import Javascript from '../Images/Javascript.png'
export default function Description(){
    return (
      <>
  <container class = "aboutMe">
  <div  id = "Contact"class="card" style={{width: '50rem'}}>
    <div class="card-body">
      <h5 class="card-title">Jerry Dong</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">About Me</h6>
      <p class="card-text">I am a fullstack JavaScript web developer and have experience with HTML,CSS,
      JavaScript, React, Node.js, express, API, MongoDB, MySQL, and GraphQL. I am currently living in Philadelphia, Pennslyvania
      and I am currently looking for a remote position or a onsite position in Philadelphia. For more Information, please contact me here </p>
      <a href="#" class="card-link">Email: Jamesharold1738@gmail.com</a>
      <a href="#" class="card-link">Phone: 215-607-4658</a>
    </div>
  </div>
  <img  id = "Jerry"src="https://user-images.githubusercontent.com/116526260/233241846-409dd838-81f5-414b-900b-8512a271c6ff.jpg"/>
  </container>
  <div id = 'languages'>
    <img src ={TS}></img>
    <img src = {Javascript}></img>
    <img src = {Sql}></img>
    <img src = {Mongo}></img>
    <img src = {HTML}></img>
    <img src = {ReactPic}></img>
    
  </div>
<>

  <a id='googleDocs' href = {'https://docs.google.com/document/d/1bG9mDY7WSsQkJD-94X7HFfQz-7Qt1w2Z/edit?usp=sharing&ouid=111873614210822284542&rtpof=true&sd=true'} ><img id ="pdf"src= {PDF}></img> Download Resume</a>
  </>
  
  </>)}
//export default myProject;