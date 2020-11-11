<template>
  <div>
      <img src="static/svg/background-1.svg" class="background-1">
      <img src="static/svg/background-2.svg" class="background-2">
      <img src="static/svg/background-3.svg" class="background-3">
      <div class="container-fluid" id="app">
        <div class="jumbotron-fluid" style="min-height: 250px; margin-top: 75px">
            <div class="col-sm">
                <h5 class="text-muted text-center" style="font-family: 'San Francisco'; font-weight: 400; font-size:1.5rem">Introducing the all new</h5>
                <h1 class="text-bold text-center" style="font-family: 'San Francisco'; font-weight: 700; letter-spacing: 0; font-size:4.5rem">Fam 2020</h1>
                <paginate-links class="text-center" for="all"></paginate-links>
            </div>
            <div class="text-center">
              <input type="text" v-model="search">
            </div>
        </div>
        <paginate class="row justify-content-center text-center mx-4" name="all" :list="fData" :per="50">
            <div class="my-4 px-4" v-for="item in paginated('all')" v-bind:key="item" style="flex-basis: 12.5%">
                <div class="image-card">
                    <img class="rounded-circle profile-image" v-bind:src="`https://drive.google.com/uc?export=view&id=${item.foto}`">
                </div>
                <div class="name-subtitle p-3">
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
.profile-image {
  width:160px;
  height: 160px;
  object-fit: cover
}
</style>

