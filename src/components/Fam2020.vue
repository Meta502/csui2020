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
                  <h5 class="text-center header-sub-text" style="font-family: 'Inter', sans-serif; font-size:1.3rem; font-weight: 500; color: #636363">Introducing the all new</h5>
                  <h1 class="text-bold text-center header-main-text">Fam 2020</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-sm input-group text-center justify-content-center">
                  <div :class="[expanded ? 'search-group-active' : 'search-group']" class="input-group" @focus="expanded = true" @blur="closeSearch" @mouseleave="closeSearch">
                    <input type="text" class="form-control search-bar" @change="resetPage()" v-model="search" aria-label="Text input with dropdown button" style="border-top-left-radius: 24px; border-bottom-left-radius: 24px; border: 1px solid #6c767e; border-right: none" :placeholder="searchBy" @focus="expanded=true" @blur="closeSearch">
                    <div class="input-group-append">
                      <button style="border-top-right-radius: 24px; border-bottom-right-radius: 24px; border-left: none" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-button" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggleSearch" @blur="closeSearch" ></button>
                        <div class="dropdown" v-if="searchDropped">
                          <div class="dropdown-content">
                            <div class="search-dropdown-button py-2" @click="setMode(0);">
                              <span class="">search by name</span>
                            </div>
                            <div class="search-dropdown-button py-2" @click="setMode(1);">
                              <span class="">search by nickname</span>
                            </div>
                            <div class="search-dropdown-button py-2" @click="setMode(2);">
                              <span class="">search by absen pmb</span>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="text-center col-sm mt-2">
                <a href="#" style="font-family: 'Inter', sans-serif;; font-weight: 600" class="advanced-search-toggle" :class=" { active: showAdvanced === true}" @click="toggleAdvanced()">browse by</a>
              </div>
            </div>
            <transition name="slide">
              <div v-if="showAdvanced" class="row">
                <div class="text-center col-sm mt-2">
                  <ul class="advanced-search-jurusan">
                    <li><a class="search-jurusan search-jurusan-all btn w-100 w-md-auto" :class="{ active: jurusanFilter === 0 }" href="#" @click="filterByJurusan(0)">All</a></li>
                    <li><a class="search-jurusan search-jurusan-ilkom btn w-100 w-md-auto" :class="{ active: jurusanFilter === 1 }" href="#" @click="filterByJurusan(1)">Computer Science</a></li>
                    <li><a class="search-jurusan search-jurusan-si btn w-100 w-md-auto" :class="{ active: jurusanFilter === 2 }" href="#" @click="filterByJurusan(2)">Information Systems</a></li>
                  </ul>
                  <ul style="font-family: 'Inter', sans-serif;" class="advanced-search-sort mt-2 mt-sm-1">
                    <li class="unselectable semibold">sort by:</li>
                    <li><span class="search-sort btn w-100 w-md-auto" :class="{ active: sort === 0 }" @click="sortBy(0)">Full Name</span></li>
                    <li><span class="search-sort btn w-100 w-md-auto" :class="{ active: sort === 1 }" @click="sortBy(1)">PMB Code</span></li>
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
              <div class="my-3 my-md-5 px-4 px-md-4" v-for="item in paginated('all')" v-bind:key="item.id">
                <a href="#" data-toggle="modal" data-target="#exampleModal" @click="openModal(item)" style="color: black; text-decoration: none" class="hvr-float-image">
                  <div class="image-card mx-auto text-left">
                      <img class="rounded-circle profile-image shadow-lg" v-lazy="`${item.foto}`">
                  </div>
                  <div class="profile-text text-center py-3 py-md-0 p-md-3">
                      <p>
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
              <h3 class='col-12 modal-title text-center semibold' style="font-family: 'Inter', sans-serif; font-size:2.4rem;">
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
      searchDropped: false,
      searchActive: 0
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
        return 'search by full name'
      }
      else if (this.mode == 1) {
        return 'search by nickname'
      }
      else {
        return 'search by absen pmb'
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
        this.search = ''
        this.closeSearch()
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
@import '../../public/static/css/fam/header.css';
@import '../../public/static/css/fam/search.css';
@import '../../public/static/css/fam/pagination.css';
@import '../../public/static/css/fam/animation.css';
@import '../../public/static/css/fam/profile.css';
@import '../../public/static/css/background.css';

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

.sistem-informasi-color {
  color: #00E7EF
}

.ilmu-komputer-color {
  color: #FF004F
}

</style>


