import React from "react";

export default function Description({about, setAbout}){
    return (
        <div>
        {about ? (
            <>
              <a class="nav-link" href='#About' onClick ={()=> setAbout(!about)}>About</a>
              <h1>Hello</h1>
        </> )
    : ( <a class="nav-link" href='#About' onClick = {()=> setAbout(!about)}>About</a> )
    }
    </div>)
      
    }


//export default myProject;