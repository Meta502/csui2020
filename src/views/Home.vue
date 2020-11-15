<template>
    <div style="height: 100%">
        <img src="static/svg/topleft.svg" class="background-main-1">
        <img src="static/svg/topright.svg" class="background-main-2 d-none d-lg-block">
        <img src="static/svg/bottomright.svg" class="background-main-3 d-none d-lg-block">
        <img src="static/svg/bottombottomleft.svg" class="background-main-4">
        <img src="static/svg/bottomleft.svg" class="background-main-5">
        <div class="bg-container"></div>
        <div class="jumbotron-fluid" style="height: calc(100vh - 60px);">
            <transition name="fade">
                <div v-if="loaded" class="row mx-0 align-items-center justify-content-center" style="height: 100%">
                        <img class="mx-5 home-logo" src="static/svg/logo.svg" >
                </div>
            </transition>
        </div>
        <div class="jumbotron-fluid" style="height: calc(60vh + 20px);">
            <div class="row mx-0 align-items-center justify-content-center" style="height: 100%">
                    <div class="d-flex align-items-center mx-5 text-center">
                        <transition name="fade">
                            <div v-if="loaded" @mouseover="famHover = true" @mouseleave="famHover = false">
                                <router-link class="hvr-float-meet" to="/fam" style="text-decoration: none; color: black;">
                                    <img v-bind:src="[famHover ? 'static/svg/meetthefamhover.svg' : 'static/svg/meetthefam.svg']" width="120px">
                                    <h4 style="font-family: 'Inter', sans-serif; font-weight: 800">meet the fam</h4>
                                </router-link>
                            </div>
                        </transition>
                    </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Home',
    data: function() {
        return {
            famHover: false,
            loaded: false
        } 
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || 'CSUI2020 - Home';
            }
        },
    },
    mounted: function() {
        setTimeout(() => {
            this.loaded = true
        }, 500)
    }
}
</script>

<style scoped>
.hvr-float-meet >  img {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0,0,0,0);
    -webkit-transition-duration: .5s;
    transition-duration: .5s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin-bottom: 0;
}

.hvr-float-meet:hover > img {
    transition-duration: .5s;
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    margin-bottom: 0;
}

@media (max-width: 991.98px) {
    .background-main-1 {
        width: 250px;
        top: 30px!important;
    }
    .background-main-4 {
        display: none;
    }
    .background-main-5 {
        display: none
    }
    .home-logo {
        width: 80px!important
    }
}

.home-logo {
    width: 160px
}

.background-main-1 {
    position: absolute;
    top:0;
    left:0;
}

.background-main-2 {
    position: absolute;
    top:0;
    right:14vw;
}

.background-main-3 {
    position: absolute;
    bottom: -30vw;
    right:0;
}

.background-main-4 {
    position: absolute;
    bottom:-30vw;
    left:0;
}

.background-main-5 {
    position: absolute;
    bottom:-6vw;
    left:0;
}
</style>