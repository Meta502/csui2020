<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light blur px-5 py-0 my-0 sticky-top" style="z-index: 100; height:60px; background-color:rgba(255, 255, 255, 0.5);">
    <a class="navbar-brand p-0" href="#">
        <img src="static/svg/logo.svg" alt="" width="28px">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse px-lg-5" id="navbarNavAltMarkup" >
      <div class="navbar-nav">
        <router-link class="nav-link px-5 h-100 mx-0" style="font-family: 'San Francisco'; font-weight: 800; font-size:1.3rem;" to="/">Home</router-link>
        <router-link class="nav-link px-5 h-100 mx-0" style="font-family: 'San Francisco'; font-weight: 800; font-size:1.3rem;" to="/fam">Fam</router-link>
      </div>
    </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
  .blur {
    opacity: 1;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  ul.nav.navbar-nav li a:link {
    line-height: 32px;
    vertical-align: center;
  }
  .router-link-exact-active   {
    background-color: black!important; 
    color:white!important;
  }
  .navbar-nav .nav-link {
    padding-top: 0;
    padding-bottom: 0;
    height: 60px;
    line-height: 60px;
    background-color:rgba(255, 255, 255, 0);  
  }
</style>
