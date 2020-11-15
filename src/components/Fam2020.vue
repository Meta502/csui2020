<template>
  <div>
      <img src="static/svg/background-1.svg" class="background-1 d-none d-sm-block absolute">
      <img src="static/svg/background-2.svg" class="background-2 d-none d-xl-block absolute">
      <img src="static/svg/background-3.svg" class="background-3 d-none d-sm-block absolute">
      <transition name="fade">
        <div class="container-fluid" id="app">
          <div class="jumbotron-fluid" style="min-height: 250px; margin-top: 40px">
            <div class="row">
              <div class="col-sm">
                  <h5 class="text-center" style="font-family: 'Inter', sans-serif; font-size:1.3rem; font-weight: 500; color: #636363">Introducing the all new</h5>
                  <h1 class="text-bold text-center header-main-text">Fam 2020</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-sm input-group text-center justify-content-center">
                  <div :class="[expanded ? 'search-group-active' : 'search-group']" class="input-group">
                    <input type="text" class="form-control search-bar" @change="resetPage()" v-model="search" aria-label="Text input with dropdown button" style="border-top-left-radius: 24px; border-bottom-left-radius: 24px; border: 1px solid #6c767e; border-right: none" :placeholder="searchBy" @focus="expanded = true" @blur="expanded = false">
                    <div class="input-group-append">
                      <button style="border-top-right-radius: 24px; border-bottom-right-radius: 24px; border-left: none" class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggleSearch" @blur="closeSearch"></button>
                      <div class="dropdown" v-show="searchDropped">
                        <div class="dropdown-content">
                          <div class="search-dropdown-button py-2" @click="setMode(0)">
                            <span class="">Search by Name</span>
                          </div>
                          <div class="search-dropdown-button py-2" @click="setMode(1)">
                            <span class="">Search by Nickname</span>
                          </div>
                          <div class="search-dropdown-button py-2" @click="setMode(2)">
                            <span class="">Search by PMB</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="row">
              <div class="text-center col-sm mt-2">
                <a href="#" style="font-family: 'Inter', sans-serif;; font-weight: 600" class="advanced-search-toggle" :class=" { active: showAdvanced === true}" @click="toggleAdvanced()">browse by</a>
              </div>
            </div>
            <transition name="slide">
              <div v-if="showAdvanced" class="row">
                <div class="text-center col-sm mt-2">
                  <ul class="advanced-search-jurusan">
                    <li><a class="search-jurusan search-jurusan-all btn" :class="{ active: jurusanFilter === 0 }" href="#" @click="filterByJurusan(0)">All</a></li>
                    <li><a class="search-jurusan search-jurusan-ilkom btn" :class="{ active: jurusanFilter === 1 }" href="#" @click="filterByJurusan(1)">Computer Science</a></li>
                    <li><a class="search-jurusan search-jurusan-si btn" :class="{ active: jurusanFilter === 2 }" href="#" @click="filterByJurusan(2)">Information Systems</a></li>
                  </ul>
                  <ul style="font-family: 'Inter', sans-serif;" class="advanced-search-sort">
                    <li>Sort By:</li>
                    <li><span class="search-sort" :class="{ active: sort === 0 }" @click="sortBy(0)">Full Name</span></li>
                    <li><span class="search-sort" :class="{ active: sort === 1 }" @click="sortBy(1)">PMB Code</span></li>
                  </ul>
                </div>
              </div>
            </transition>
          </div>
          <paginate-links class="text-center d-none d-lg-block large-page" :class="{ 'hide-page-number': shown == 0 }" for="all" :async="true"></paginate-links>
          <paginate-links class="text-center d-block d-lg-none small-page" :class="{ 'hide-page-number': shown == 0 }" for="all" :async="true" :simple="{
            prev: 'Back',
            next: 'Next'
          }"></paginate-links>
          <keep-alive>  
          <paginate v-if="shown" ref="paginator" class="" name="all" :list="fData" :per="50" tag="div">
            <transition-group class="row justify-content-center p-0 mx-0 mx-md-4" name="imagefade">
              <div class="my-5 px-4" v-for="item in paginated('all')" v-bind:key="item.id">
                <a href="#" data-toggle="modal" data-target="#exampleModal" @click="openModal(item)" style="color: black; text-decoration: none" class="hvr-float-image">
                  <div class="image-card mx-auto text-left">
                      <img class="rounded-circle profile-image shadow-lg" v-lazy="`${item.foto}`">
                  </div>
                  <div class="name-subtitle text-center p-3">
                      <p style="font-family: 'Inter', sans-serif; letter-spacing: 0; font-size:1.1rem">
                        <small class="text-muted">[{{item.absen_pmb}}] </small>
                        <br>
                        <span style="font-weight: 500">{{item.panggilan}}</span>
                      </p>
                  </div>
                </a>
              </div>
            </transition-group>
          </paginate>
          </keep-alive>
          <div class="row">
            <div class="col-sm mx-auto mb-3">
              <paginate-links class="text-center d-none d-lg-block large-page" :class="{ 'hide-page-number': shown == 0 }" for="all"></paginate-links>
            </div>
          </div>
        </div>
      </transition>

      <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="card-modal modal-dialog-centered shadow-lg" role="document">
          <div class="modal-content" style="background-color: transparent; border: none">
            <div class="modal-header" style="background-color: transparent; border: none;">
              <h3 class='col-12 modal-title text-center' style="font-family: 'Inter', sans-serif; font-weight: 600; font-size:2.4rem;">
                {{selected.full_name}}
              </h3>
            </div>
            <div class="modal-body p-0" style="background-color: white; border-radius: 40px;">
              <img v-bind:src="`${selected.foto}`" class="d-none d-xl-block" style="position: absolute; top:0; right:0; height: 100%;  border-top-right-radius: 40px; border-bottom-right-radius: 40px;">
              <div class="row m-0 px-0 px-lg-3 py-5 py-sm-5 card-row">
                <div class="col-lg-6 text-center my-auto order-lg-2 pb-3 pb-lg-0">
                  <img class="rounded-circle card-image" v-bind:src="`${selected.foto}`">
                </div>
                <div class="col-lg-6 order-lg-1">
                  <h1 class="card-jurusan text-center" v-bind:style="[selected.jurusan.toLowerCase().startsWith('il') ? {color: '#FF004F'} : {color: '#34a1eb'}]">{{jurusan}}</h1>
                  <br>
                  <div class="my-2">
                    <h5 style="font-family: 'inter', sans-serif; text-align: center; font-weight:600">Information</h5>
                    <div class="row justify-content-center">
                      <table class="mx-auto mx-lg-0 col-auto" style="max-width: 85%">
                        <tr>
                          <td><img src="static/icons/highschool.svg"></td>
                          <td style="font-family: 'inter', sans-serif; font-weight: 400">{{selected.asal_sma}}</td>
                        </tr>
                        <tr>
                          <td><img src="static/icons/birthday.svg"></td>
                          <td style="font-family: 'inter', sans-serif; font-weight: 400">{{selected.tanggal_lahir}}</td>
                        </tr>
                        <tr>
                          <td><img src="static/icons/hobbies.svg"></td>
                          <td style="font-family: 'inter', sans-serif; font-weight: 400">{{selected.hobi}}</td>
                        </tr>
                        <!---
                        <tr>
                          <td><i class="fas fa-hashtag"></i></td>
                          <td>{{selected.sosmed}}</td>
                        </tr>
                        --->
                      </table>
                    </div>
                  </div>
                  <br>
                  <div class="text-center">
                    <h5 style="font-family: 'Inter', sans-serif; font-weight: 600">Expectations</h5>
                    <p style="font-family: 'Inter', sans-serif; font-weight: 400">{{selected.harapan}}</p>
                  </div>
                  <div class="text-center">
                    <h5 style="font-family: 'Inter', sans-serif; font-weight: 600">Social Media</h5>
                    <span v-clipboard:copy="selected.line" v-clipboard:success="copySuccess" class="tooltip-img mx-3" style="max-height: 50px"><img src="static/icons/line.svg" style="width: 3.5rem"><span class="tooltip-imgtext">{{ copiedLine ? 'Copied!' : selected.line }}</span></span>
                    <a class="tooltip-img mx-3 hvr-slide-down" v-bind:href="`https://www.instagram.com/${selected.instagram}`" target="_blank"><img src="static/icons/instagram.svg" style="width: 3.5rem"><span class="tooltip-imgtext">{{selected.instagram}}</span></a>
                    </div>
                  <br>
                </div>
              </div>
            </div>
            <div class="modal-footer text-center" style="border: none;">
              <button type="button" class="btn btn-md btn-light btn-circle mx-auto" data-dismiss="modal" id="close"><i class="fas fa-times"></i></button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import all from '../../public/static/json/keseluruhan.json'
import ilkom from '../../public/static/json/ilkom.json'
import insys from '../../public/static/json/insys.json'
import all_name from '../../public/static/json/keseluruhan_alphabetical.json'
import ilkom_name from '../../public/static/json/ilkom_alphabetical.json'
import insys_name from '../../public/static/json/insys_alphabetical.json'

const data_array = [[all_name, ilkom_name, insys_name], [all, ilkom, insys]]

export default {
  name: 'Fam2020',
  data: function(){
    return {
      data: data_array[0][0],
      selected: {
        full_name: '-',
        panggilan: '-',
        absen_pmb: '-',
        tanggal_lahir: '-',
        jurusan: '-',
        asal_sma: '-',
        sosmed: '-',
        line: '-',
        instagram: '-',
        harapan: '-',
        foto: '-',
      },
      paginate: ["all"],
      search: '',
      showModal: false,
      showAdvanced: true,
      jurusanFilter: 0,
      sort: 0,
      shown: false,
      imageLoaded: false,
      copiedLine: false,
      expanded: false,
      mode: 0,
      searchDropped: false
    }
  },
  computed: {
    fData() {
      if (this.mode == 0) {
        const re = new RegExp(this.search, "i")
        return this.data.filter(item => item.full_name.match(re))
      }
      else if (this.mode == 1) {
        const re = new RegExp(this.search, "i")
        return this.data.filter(item => item.panggilan.match(re))
      }
      else if (this.mode == 2) {
        const re = new RegExp(this.search, "i")
        return this.data.filter(item => item.absen_pmb.match(re))
      } 
      else {
        return null
      }
    },
    jurusan() {
      if(this.selected.jurusan.toLowerCase().startsWith('il')) {
        return 'Computer Science'
      }
      else {
        return 'Information Systems'
      }
    },
    searchBy() {
      if (this.mode == 0) {
        return 'search by name'
      }
      else if (this.mode == 1) {
        return 'search by nickname'
      }
      else {
        return 'search by pmb absen'
      }
    }

  },
  methods: {
      openModal: function(item) {
        this.selected = item
      },
      toggleAdvanced: function() {
        this.showAdvanced = !this.showAdvanced
      },
      filterByJurusan: function(id) {
        this.jurusanFilter = id
        this.data = data_array[this.sort][this.jurusanFilter]
      },
      sortBy: function(id) {
        this.sort = id
        this.data = data_array[this.sort][this.jurusanFilter]
      },
      copySuccess: async function() {
          this.copiedLine = true
          setTimeout(() => {
            this.copiedLine = false
          }, 1000)
      },
      setMode: function(id) {
        this.mode = parseInt(id)
        console.log(this.mode)
      },
      expandSearch() {
        this.expanded = true; 
        this.searchDropped = true;
      },
      toggleSearch() {
        this.expanded = !this.expanded; 
        this.searchDropped = !this.searchDropped;
      },
      closeSearch() {
        setTimeout(() => {
          this.expanded = false;
          this.searchDropped = false
        }, 100) 
      }
  }, 
  mounted () {
    setTimeout(() => {
      this.shown = true
    }, 500)
  },
  watch: {
    fData: function () {
      if (this.fData.length == 0) {
        this.shown = 0
      }
      else {
        this.shown = 1
      }
    }
  }
}
</script>

<style>
.search-bar:focus, .search-bar:active {
  outline: none!important;
}

.search-dropdown-button {
  transition: all 0.2s
}

.search-dropdown-button:hover {
  background-color: #6691ff;
  color: white;
  cursor: pointer;
  transition: all 0.2s
}

.dropdown {
    position: absolute;
    display: block;
    left: 1rem;
    top: 2.35rem;
}

.dropdown-content {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  width:16rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 0px 0px;
  z-index: 1;
}

.search-group {
  width: 14rem;
  transition: width 0.2s
}
.search-group-active, .search-group:hover {
  width: 18rem;
  transition: width 0.2s
}

.profile-table {
   margin: auto;
   width: 50% !important; 
}

.tooltip-img > textarea {
  display: none
}

.imagefade-enter-active, .imagefade-leave-active {
  transition: opacity 0.6s;
}

.imagefade-enter, .imagefade-leave-to {
  transition: opacity 0.6s;
  opacity: 0;
}

.header-main-text {
  font-family: 'Inter', sans-serif;
  font-weight: 600; 
  letter-spacing: 0; 
  font-size:4.5rem
}

.hide-page-number {
  display: none!important
}

.slide-enter-active {
   -moz-transition-duration: 0.5s;
   -webkit-transition-duration: 0.5s;
   -o-transition-duration: 0.5s;
   transition-duration: 0.5s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-leave-active {
   -moz-transition-duration: 0.5s;
   -webkit-transition-duration: 0.5s;
   -o-transition-duration: 0.5s;
   transition-duration: 0.5s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}

.hvr-float-image > div.image-card > img.profile-image {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 0.8rem rgb(0 0 0 / 41%);
    -webkit-transition-duration: .1s;
    transition-duration: .1s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-float-image:hover > div.image-card > img.profile-image {
      transition-duration: .1s;
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
}

.search-jurusan {
font-family: 'Inter', sans-serif;
  font-weight: 600
}

.advanced-search-toggle {
  text-decoration: none;
  color: gray
}

.advanced-search-toggle:hover, .advanced-search-toggle.active {
  text-decoration: none;
  color: black
}

.search-jurusan-all {
  color: #9A519D
}
.search-jurusan-ilkom {
  color: #FF004F
}
.search-jurusan-si {
  color: #34a1eb
}

.search-sort {
  color: gray;
  font-family: 'Inter', sans-serif;
  font-weight: 600
}

.search-sort.active, .search-sort:hover {
  color: #FFFFFF;
  background-color: gray
}

.search-jurusan-all.active, .search-jurusan-all:hover {
  color: #FFFFFF;
  background-color: #9A519D
}

.search-jurusan-ilkom.active, .search-jurusan-ilkom:hover {
  color: #FFFFFF;
  background-color: #FF004F
}
.search-jurusan-si.active, .search-jurusan-si:hover {
  color: #FFFFFF;
  background-color: #34a1eb
}

ul.advanced-search-jurusan {
    padding: 0;
    list-style-type: none;
    margin-bottom: 0
}

ul.advanced-search-jurusan > li {
    display: inline-block;
    cursor: pointer;
    margin: 0 0.5rem;
    zoom:1;
    *display:inline;
    /* this fix is needed for IE7- */
}

ul.advanced-search-jurusan > li > a {
    padding: 3px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    border-radius: 24px;
    outline:none;
}

ul.paginate-links.large-page > li > a {
    border-radius: 1000%;
    padding:5px 10px;/* this instead of a set width and height just change this to change how much bigger the circle is than the link*/
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    text-align:center;
    vertical-align:center;
    color: black;
    transition: all 0.2s;
    cursor: pointer
}

ul.paginate-links.large-page > li.active > a {
    border-radius: 1000%;
    padding:5px 10px;/* this instead of a set width and height just change this to change how much bigger the circle is than the link*/
    background:black;
    text-align:center;
    vertical-align:center;
    color: white;
    transition: all 0.2s;
    cursor: pointer
}

ul.paginate-links.large-page > li > a:hover {
    border-radius: 1000%;
    padding:5px 10px;/* this instead of a set width and height just change this to change how much bigger the circle is than the link*/
    background:#696969;
    text-align:center;
    vertical-align:center;
    color: white!important;
    transition: all 0.2s;
    cursor: pointer
}

ul.advanced-search-sort {
    padding: 0;
    list-style-type: none;
}

ul.advanced-search-sort > li {
    display: inline-block;
    cursor: pointer;
    margin: 0 0.5rem;
    zoom:1;
    *display:inline;
    /* this fix is needed for IE7- */
}

ul.advanced-search-sort > li > span {
    padding: 3px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    border-radius: 24px;
    outline:none;
}


.btn-circle.btn-md { 
    width: 50px; 
    height: 50px; 
    padding: 7px 10px; 
    border-radius: 25px; 
    font-size: 10px; 
    text-align: center; 
    border: solid 1px gray;
} 


table {
  border-collapse: separate;
  border-spacing: 10px 0;
}

td {
  word-break: break-word
}


ul.paginate-links {
    list-style-type: none;
    padding: 0
}
ul.paginate-links li {
    display: inline-block;
    margin: 0 10px 0 10px
}

ul.paginate {
    list-style-type: none;
    padding: 0;
}

.profile-image {
  width:160px;
  height: 160px;
  object-fit: cover
}

.card-image {
  width:300px;
  height: 300px;
  object-fit: cover
}

.card-modal {
  margin: 0 16vw
}

.card-jurusan {
  font-family: 'Inter', sans-serif;
  font-weight: 700; 
  font-size:2.4rem;
  z-index: 9999;
}

.card-row {
  background: transparent linear-gradient(90deg, #FFFFFF 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;
  border-radius: 40px;
  opacity: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  min-height: 100%;
  min-width: 100%;
  border: solid 0.5px gray;
}

.card-text {
font-family: 'Inter', sans-serif;
  font-weight: 800; 
  font-size:1.1rem;
}

.sistem-informasi-color {
  color: #00E7EF
}

.ilmu-komputer-color {
  color: #FF004F
}

.rounded-pill {
  background-color: transparent;
  border: solid 1px;
  color: gray;
  padding: 5px 0px;
  text-align: center;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  display: inline-block;
  margin: 4px 2px;
  border-radius: 24px;
  outline:none;
  transition: padding 0.2s;
}

.rounded-pill:hover, .rounded-pill:focus {
  padding: 5px 75px;
  transition: padding 0.2s;
  outline: none;
}


@media (max-width: 576px) { 
    .background-1 {
        top: 190px;
        left: 0;
        width: 80px!important;
        position: absolute;
    }
    .card-image {
      max-width:190px!important;
      max-height: 190px!important;
      object-fit: cover
    }
    
    .background-3 {
        top:60px; right:0; width:130px!important; position: absolute;
    }

    
    .card-modal {
      margin: 0 2vw
    }

    .rounded-pill:hover {
      padding: 5px 45px;
      transition: padding 0.2s
    }

    .header-main-text {
    font-family: 'Inter', sans-serif;
      font-weight: 700; 
      letter-spacing: 0; 
      font-size:4.0rem
    }

    ul.advanced-search-jurusan > li {
      display: block;
      cursor: pointer;
      margin: 0 0.5rem;
      zoom:1;
      *display:inline;
      /* this fix is needed for IE7- */
  }
}


@media (min-width: 576px) {  
    .background-1 {
        top: 155px;
        left: 0;
        width: 110px!important;
        position: absolute;
    }
    
    .background-2 {
        top:0px; 
        left:270px;
        width:30px!important;
        position: absolute;
    }
    
    .background-3 {
        top:40px; right:0; width:190px!important; position: absolute;
    }
}


@media (min-width: 991px) {  

.background-1 {
    width: 250px!important;
    left: 0;
    position: absolute;
}

.background-2 {
    width:160px!important;
    top: 30px;
    display: block;
    position: absolute;
}

.background-3 {
  top: 35px;
   width:340px!important;
   position: absolute;
}


}


.modal-backdrop {
  background-color: rgba(255,255,255,0.1)!important;
  opacity: 1!important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Tooltip container */
.tooltip-img {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* Tooltip text */
.tooltip-img .tooltip-imgtext {
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  visibility: hidden;
  min-width: 100px;
  background-color: #434343;
  color: #fff;
  text-align: center;
  padding: 0 0;
  border-radius: 15px;
 
  position: absolute;
  top: 55px;
  left: -22px;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip-img:hover .tooltip-imgtext {
  visibility: visible;
}


</style>


