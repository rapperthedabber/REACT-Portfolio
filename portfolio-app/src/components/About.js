import React from "react";
import dayjs from 'dayjs'
export default function Description({about, setAbout}){
    
    return (
        <div>
        {about ? (
            <>
              <a class="nav-link" href='#About' onClick ={()=> setAbout(!about)}>About</a>
              <div>
                
              </div>
        </> )
    : ( <a class="nav-link" href='#About' onClick = {()=> setAbout(!about)}>About</a> )
    }
    </div>)
      
    }


//export default myProject;