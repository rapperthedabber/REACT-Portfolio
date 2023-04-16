// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
import React from 'react';
import './web.css'

function IntroDiv() {
  return ( 
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Welcome to Jerry's profile</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Introduction</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Projects</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
  )

}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default IntroDiv;
