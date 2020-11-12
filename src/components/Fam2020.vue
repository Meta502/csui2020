<template>
  <div>
      <img src="static/svg/background-1.svg" class="background-1 d-none d-sm-block absolute">
      <img src="static/svg/background-2.svg" class="background-2 d-none d-xl-block absolute">
      <img src="static/svg/background-3.svg" class="background-3 d-none d-sm-block absolute">
      <div class="container-fluid" id="app">
        <div class="jumbotron-fluid" style="min-height: 250px; margin-top: 40px">
            <div class="col-sm">
                <h5 class="text-muted text-center" style="font-family: 'San Francisco'; font-weight: 300; font-size:1.3rem">Introducing the all new</h5>
                <h1 class="text-bold text-center" style="font-family: 'San Francisco'; font-weight: 700; letter-spacing: 0; font-size:4.5rem">Fam 2020</h1>
                <paginate-links class="text-center" for="all"></paginate-links>
            </div>
            <div class="text-center">
              <div>
                <input class="rounded-pill" type="text" v-model="search" size="8" placeholder="search">
              </div>
            </div>
        </div>
        <keep-alive>
        <paginate class="row justify-content-center p-0 mx-0 mx-md-4" name="all" :list="fData" :per="50">
            <div class="my-5 px-4" v-for="item in paginated('all')" v-bind:key="item">
              <a href="#" data-toggle="modal" data-target="#exampleModal" v-on:click="selected = item" style="color: black; text-decoration: none">
                <div class="image-card mx-auto text-left">
                    <img class="rounded-circle profile-image" v-lazy="`${item.foto}`">
                </div>
                <div class="name-subtitle text-center p-3">
                    <p style="font-family: 'San Francisco'; font-weight: 700; letter-spacing: 0; font-size:1.1rem">
                      <small class="text-muted">[{{item.absen_pmb}}] </small>
                      <br>
                      <span>{{item.panggilan}}</span>
                    </p>
                </div>
              </a>
            </div>
        </paginate>
        </keep-alive>
        <div class="row">
          <div class="col-sm mx-auto">
            <paginate-links class="text-center" for="all"></paginate-links>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="card-modal modal-dialog-centered" role="document">
          <div class="modal-content" style="background-color: transparent; border: none">
            <div class="modal-header" style="background-color: transparent">
              <h3 class='col-12 modal-title text-center' style="font-family: 'San Francisco'; font-weight: 800; font-size:2.4rem;">
                {{selected.full_name}}
              </h3>
            </div>
            <div class="modal-body p-0" style="background-color: white; border-radius: 40px;">
              <img v-bind:src="`${selected.foto}`" class="d-none d-xl-block" style="position: absolute; top:0; right:0; height: 100%;  border-radius: 40px;">
              <div class="row m-0 p-5 card-row">
                <div class="col-lg-6 text-center my-auto order-lg-2">
                  <img class="rounded-circle card-image" v-bind:src="`${selected.foto}`">
                </div>
                <div class="col-lg-6 order-lg-1">
                  <h1 class="card-jurusan" v-bind:style="[selected.jurusan.toLowerCase().startsWith('il') ? {color: '#FF004F'} : {color: '#34a1eb'}]">{{selected.jurusan}}</h1>
                  <br>
                  <div>
                    <table>
                      <tr>
                        <td><i class="fas fa-graduation-cap"></i></td>
                        <td>{{selected.asal_sma}}</td>
                      </tr>
                      <tr>
                        <td><i class="fas fa-birthday-cake"></i></td>
                        <td>{{selected.tanggal_lahir}}</td>
                      </tr>
                      <tr>
                        <td><i class="fas fa-gamepad"></i></td>
                        <td>{{selected.hobi}}</td>
                      </tr>
                      <tr>
                        <td><i class="fas fa-hashtag"></i></td>
                        <td>{{selected.sosmed}}</td>
                      </tr>
                    </table>
                  </div>
                  <br>
                  <div class="text-center">
                    <h4>Expectations:</h4>
                    <p>{{selected.harapan}}</p>
                  </div>
                  <br>
                  <br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import json from '../../public/static/json/keseluruhan.json'

export default {
  name: 'Fam2020',
  data: function(){
    return {
      data: json,
      selected: {
        full_name: '',
        panggilan: '',
        absen_pmb: '',
        tanggal_lahir: '',
        jurusan: '',
        asal_sma: '',
        sosmed: '',
        harapan: '',
        foto: ''
      },
      paginate: ["all"],
      search: ''
    }
  },
  computed: {
    fData() {
      const re = new RegExp(this.search, "i")
      return this.data.filter(item => item.full_name.match(re))
    }
  }
}
</script>

<style>
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
  max-width:300px;
  max-height: 300px;
  object-fit: cover
}

.card-modal {
  margin: 0 16vw
}

.card-jurusan {
  font-family: 'San Francisco'; 
  font-weight: 800; 
  font-size:2.4rem;
}

.card-row {
  background: transparent linear-gradient(90deg, #FFFFFF 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;
  border-radius: 40px;
  opacity: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  min-height: 100%;
  min-width: 100%;
}

.card-text {
  font-family: 'San Francisco'; 
  font-weight: 800; 
  font-size:1.1rem;
}

.sistem-informasi-color {
  color: #34a1eb
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
  display: inline-block;
  margin: 4px 2px;
  border-radius: 24px;
  outline:none;
  transition: padding 0.2s;
}

.rounded-pill:hover {
  padding: 5px 75px;
  transition: padding 0.2s
}

.rounded-pill:focus {
  padding: 5px 75px;
  transition: padding 0.2s
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


</style>

