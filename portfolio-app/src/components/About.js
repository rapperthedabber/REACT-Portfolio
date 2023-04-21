import React from "react";
import dayjs from 'dayjs'
export default function Description({about, setAbout}){
    
    return (
        <div>
        {about ? (
            <>
              <a class="nav-link" href='#About' onClick ={()=> setAbout(!about)}>Resume</a>
              <br>
    </br>
              <div class="card" style={{width: '18rem'}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" id = "linkedIn"><a href="https://www.linkedin.com/in/jerry-dong-002040226/">LinkedIn</a></li>
  </ul>
</div>
        </> )
    : ( <a class="nav-link" href='#About' onClick = {()=> setAbout(!about)}>Resume</a> )
    }
    </div>)
      
    }


//export default myProject;