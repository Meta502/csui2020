<template>
  <div>
      <img src="static/svg/background-1.svg" class="background-1">
      <img src="static/svg/background-2.svg" class="background-2 d-none d-xl-block">
      <img src="static/svg/background-3.svg" class="background-3">
      <div class="container-fluid" id="app">
        <div class="jumbotron-fluid" style="min-height: 250px; margin-top: 75px">
            <div class="col-sm">
                <h5 class="text-muted text-center" style="font-family: 'San Francisco'; font-weight: 400; font-size:1.5rem">Introducing the all new</h5>
                <h1 class="text-bold text-center" style="font-family: 'San Francisco'; font-weight: 700; letter-spacing: 0; font-size:4.5rem">Fam 2020</h1>
                <paginate-links class="text-center" for="all"></paginate-links>
            </div>
            <div class="text-center">
              <div>
                <input class="rounded-pill" type="text" v-model="search" size="8" placeholder="Search">
              </div>
            </div>
        </div>
        <paginate class="row justify-content-center p-0 mx-0 mx-md-4" name="all" :list="fData" :per="50">
            <div class="my-5 px-4" v-for="item in paginated('all')" v-bind:key="item">
                <div class="image-card mx-auto text-left">
                    <img class="rounded-circle profile-image" v-bind:src="`https://drive.google.com/uc?export=view&id=${item.foto}`">
                </div>
                <div class="name-subtitle text-center p-3">
                    <p style="font-family: 'San Francisco'; font-weight: 700; letter-spacing: 0; font-size:1.1rem">
                      <small class="text-muted">[{{item.absen_pmb}}] </small>
                      <br>
                      <span>{{item.panggilan}}</span>
                    </p>
                </div>
            </div>
        </paginate>
        <div class="row">
          <div class="col-sm mx-auto">
            <paginate-links class="text-center" for="all"></paginate-links>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Fam2020',
  data: function(){
    return {
      data: [],
      paginate: ["all"],
      search: ''
    }
  },
  created: async function() {
    let web_data = await this.$http.get('https://raw.githubusercontent.com/Meta1807/karya-angkatan-data/main/data.json')
    this.data = web_data.data
    console.log(this.data)
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
  padding: 5px 45px;
  transition: padding 0.2s
}

.rounded-pill:focus {
  padding: 5px 45px;
  transition: padding 0.2s
}


@media (max-width: 576px) { 
    .background-1 {
        top: 190px;
        width: 80px!important;
    }
    
    
    .background-3 {
        top:0px; right:0; width:130px!important
    }
}


@media (min-width: 576px) {  
    .background-1 {
        top: 190px;
        width: 190px!important;
    }
    
    .background-2 {
        top:0px; 
        left:270px;
        width:30px!important;
    }
    
    .background-3 {
        top:0px; right:0; width:190px!important
    }
}


@media (min-width: 991px) {  

.background-1 {
    width: 250px!important
}

.background-2 {
    width:160px!important;
    display: block
}

.background-3 {
   width:340px!important
}

}





</style>

