<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light blur px-lg-5 py-0 my-0 sticky-top" style="z-index: 100; height:60px; background-color:rgba(255, 255, 255, 0.5);">
    <a class="navbar-brand p-0 ml-5 ml-lg-none" href="#">
        <img src="static/svg/logo.svg" alt="" width="28px">
    </a>
    <button class="navbar-toggler mr-5 mr-lg-none" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse px-lg-5" id="navbarNavAltMarkup" >
      <div class="navbar-nav">
        <router-link class="nav-link hvr-sweep-to-left-custom px-5 h-100 mx-0" style="font-family: 'Inter', sans-serif; font-weight: 600; font-size:1.3rem; color: black" to="/">Home</router-link>
        <router-link class="nav-link hvr-sweep-to-right-custom px-5 h-100 mx-0" style="font-family: 'Inter', sans-serif; font-weight: 600; font-size:1.3rem; color: black" to="/fam">Fam</router-link>
      </div>
    </div>
    </nav>
    <transition name="pagefade">
      <router-view/>
    </transition>
  </div>
</template>

<style>
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #aaa;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #777;
  }

  @media (max-width: 991.98px) { 
    .navbar-nav {
      background-color: white!important;
      width: 100%;
      margin-right: 0!important;
      margin-left: 0!important;
      padding: 0!important
    }
  }



  html {
    scroll-behavior: smooth;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .pagefade-enter-active, .pagefade-leave-active {
    transition: opacity .4s;
  }
  .pagefade-enter, .pagefade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }


  .hvr-sweep-to-right-custom {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    background-color: black;
    color: white;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .hvr-sweep-to-right-custom:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-sweep-to-right-custom:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {
    color: white!important;
    background-color: black;
  }
  .hvr-sweep-to-right-custom:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .hvr-sweep-to-right-custom {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    background-color: black;
    color: white;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }

  .hvr-sweep-to-left-custom {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    background-color: black;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }

  .hvr-sweep-to-left-custom:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-sweep-to-left-custom:hover, .hvr-sweep-to-left:focus, .hvr-sweep-to-left:active {
    color: white!important;
    background-color: black;
  }
  .hvr-sweep-to-left-custom:hover:before, .hvr-sweep-to-left:focus:before, .hvr-sweep-to-left:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

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
