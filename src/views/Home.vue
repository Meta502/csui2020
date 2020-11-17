<template>
    <div style="height: 100%">
        <img src="static/svg/topleft.svg" class="background-main-1">
        <img src="static/svg/topright.svg" class="background-main-2 d-none d-lg-block">
        <img src="static/svg/bottomright.svg" class="background-main-3 d-none d-lg-block">
        <img src="static/svg/bottombottomleft.svg" class="background-main-4">
        <img src="static/svg/bottomleft.svg" class="background-main-5">
        <div class="bg-container"></div>
        
        <transition name="fade">
            <Logo v-if="loaded" />
        </transition>

        <div class="jumbotron-fluid meet-container">
            <div class="row mx-0 align-items-center justify-content-center" style="height: 100%">
                <div class="d-flex align-items-center mx-5 text-center">
                    <transition name="fade">
                        <div v-if="loaded" @mouseover="famHover = true" @mouseleave="famHover = false">
                            <router-link class="hvr-float-meet" to="/fam" style="text-decoration: none; color: black;">
                                <img v-bind:src="[famHover ? 'static/svg/meetthefamhover.svg' : 'static/svg/meetthefam.svg']" width="280px">
                                <h4 style="font-family: 'Inter', sans-serif; font-weight: 800">meet the fam</h4>
                            </router-link>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div v-if="loaded" class="jumbotron-fluid p-0">
                <div style="position: relative;" class="unselectable">
                    <img class="small-right-blob d-none d-lg-block" src="static/svg/rightblob.svg">
                    <img class="small-left-blob d-none d-lg-block" src="static/svg/leftblob.svg">
                    <img class="left-blob d-none d-lg-block" src="static/svg/bigleftblob.svg">
                    <img class="right-blob d-none d-lg-block" src="static/svg/bigrightblob.svg">
                    <img class="story-top-right d-none d-lg-block" src="static/svg/storytopright.svg">
                    <img class="story-bottom-left d-none d-lg-block" src="static/svg/storybottomleft.svg">
                </div>

                <div class="row mx-0 align-items-center justify-content-center inter vision-mission-container unselectable" style="height: 100%">
                    <div class="col-md-1"></div>
                    <div class="col-md-5 px-5 px-md-0 py-4">
                        <h1 class="text-center text-md-left text-light mission-title">Mission<span class="d-none d-md-inline-block">.</span></h1>
                        <p class="text-justify text-md-left mr-md-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero
                            eos et accusam et justo duo dolores et ea rebum. Stet
                            clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing
                        </p>
                    </div>
                    <div class="col-md-5 px-5 px-md-0 py-4">
                        <h1 class="text-center text-md-right text-light vision-title">Vision<span class="d-none d-md-inline-block">.</span></h1>
                        <p class="text-justify text-md-right ml-md-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero
                            eos et accusam et justo duo dolores et ea rebum. Stet
                            clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing
                        </p>                    
                    </div>
                    <div class="col-md-1"></div>
                </div>
                <div class="row mx-0 align-items-center inter our-story-container unselectable" style="height: 100%">
                    <div class="col-md-10 offset-md-1 py-4">
                        <h1 class="text-center" style="color: #02f7ef; font-weight: 700">Our Story<span class="d-none d-md-inline-block">.</span></h1>
                        <p class="text-justify our-story">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit
                        </p>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="fade">
        <div class="jumbotron-fluid m-0 p-0">
            <div class="row mx-0 unselectable" style="margin-bottom: -1px">
                <img class="black-curve" src="static/svg/blackcurve.svg">
            </div>
            <div>
            <div class="row mx-0 bg-black text-center unselectable" style="padding-top: 3rem; margin-bottom: -2px">
                <div class="col-md-12">
                    <h1 class="inter" style="color: #02f7ef; font-size: 3rem; font-weight: 600">what makes our<br>angkatan special?</h1>
                </div>
            </div>

            <div class="row mx-0 px-5 pt-5 bg-black align-items-end unselectable" style="margin-bottom: -2px">
                <div class="col-md-4 text-center d-flex flex-column align-items-center justify-content-center">
                    <div class="mb-3">
                        <img class="special-image" src="static/svg/special1.svg">
                    </div>
                    <p class="inter text-light">Angkatan online pertama</p>
                </div>
                <div class="col-md-4 text-center d-flex flex-column align-items-center justify-content-center unselectable">
                    <div>
                        <img class="special-image" src="static/svg/special2.svg">
                    </div>
                    <p class="inter text-light">Angkatan yang tidak ikut UN</p>
                </div>
                <div class="col-md-4 text-center d-flex flex-column align-items-center justify-content-center unselectable">
                    <div>
                        <img class="special-image" src="static/svg/special3.svg">
                    </div>
                    <p class="inter text-light">Angkatan survivor pandemi</p>
                </div>
            </div>

            <div class="row mx-0 pb-3 px-5 bg-black unselectable" style="padding-top: 8rem; margin-bottom: -2px">
                <div class="col-md-12 text-center">
                    <h1 class="inter" style="color: #ff004f; font-weight: 700">a message from<br>our coordinator</h1>
                </div>
            </div>

            <div class="row mx-0 bg-black align-items-center unselectable" style="padding-right: 10vw; padding-left: 10vw;">
                <div class="row message-container align-items-center pt-5 p-2 p-md-5" style="background-color:#262626;">
                    <div class="col-sm-6 col-md-4 text-center">
                        <img class="message-image rounded-circle " src="static/img/buku_angkatan/FH38.jpg">
                        <p class="inter text-light pt-3" style="font-weight: 600">Muhammad Rafi Atha Zhafran</p>
                    </div>
                    <div class="col-sm-6 col-md-8">
                        <p class="inter text-light">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                            et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit
                        </p>
                    </div>
                </div>
            </div>


        </div>
        <div class="mx-0 pt-4 pb-3 px-5 bg-lighter-black" style="background-color:#303030;">
            <div class="row">
                <div class="col-md-9 d-flex flex-column">
                    <a href="https://instagram.com/csui_2020" target="_blank" style="text-decoration: none;"><p class="inter px-1" style="color: #666666"><i class="fab fa-instagram fa-align-center px-1" style="font-size: 2rem; vertical-align:middle;"></i> @csui_2020</p></a>
                    <router-link to="/team" class="inter" style="color: #666666; font-weight: 500; font-size: 1rem; text-decoration: none;"><i class="fas fa-users-cog px-1" style="font-size: 1.8rem; vertical-align:middle;"></i> meet the team</router-link>
                    <hr style="background: #444444;
                                height: 1px;
                                width: 100%;
                                margin-left: 0;">
                    <p class="inter" style="color: #444444">Copyright &#169; 2020 CSUI 2020 University of Indonesia</p>
                </div>
                <div class="col-md-3">
                        <div class="d-flex align-items-center justify-content-center flex-column py-3 py-md-0 h-100">
                            <img style="z-index:5; max-width: 16rem" src="static/svg/daka.svg">
                        </div>
                </div>
            </div>
        </div>
        </div>
        </transition>
    </div>
</template>

<script>
import Logo from '../components/home/Logo'

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
    },
    components: {
        Logo
    }
}
</script>

<style scoped>
@import '../../public/static/css/home/background.css';
@import '../../public/static/css/home/logo.css';
@import '../../public/static/css/home/animation.css';

.message-container {
    border-radius: 2rem;
    box-shadow: 0px    25px 0  -15px #222222,
                0px    45px 0  -25px #181818;
    margin-bottom: 25vh
}

.message-image {
    width: 16rem;
    border: 0.6rem solid #404040;
}

.special-image {
    width: 180px
}

.bg-black {
    background-color: #121212;
}

.black-curve {
    width: 100%;
    height: 300px;
    margin-bottom: -1px;
}

.vision-mission-container {
    padding-top: 9rem;
    margin-bottom: 0vh;
}

.vision-title {
    font-weight: 600;
}

.mission-title {
    font-weight: 600;
}

.left-blob {
    position: absolute;
    left: 2rem;
    top: 3rem;
    z-index: -1;
    width: 30rem;
}

.right-blob {
    position: absolute;
    top: 3rem;
    right: 4rem;
    z-index: -1;
    width: 30rem;
}

.small-left-blob {
    position: absolute;
    z-index: -1;
    width: 15vw;
    top:-4rem;
    left: 28rem
}

.small-right-blob {
    position: absolute;
    z-index: -1;
    width: 10vw;
    top:27rem;
    right: 32rem
}

.story-top-right {
    position: absolute;
    z-index: -1;
    width: 8vw;
    top: 36rem;
    right: 0rem
}

.story-bottom-left {
    position: absolute;
    z-index: -1;
    width: 22rem;
    top: 58rem;
    left: 0rem
}

.story-bottom-right {
    position: absolute;
    z-index: -1;
    width: 8vw;
    bottom: 0rem;
    right: 0rem    
}

.inter {
    font-family: 'Inter', sans-serif;
}

.meet-container {
    height: calc(70vh + 20px);
}

.our-story-container {
    padding-top: 20rem;
    padding-bottom: 5rem;
}

.our-story {
    padding-right: 6rem;
    padding-left: 6rem;
}

@media (max-width: 768.98px) { 
    .our-story-container {
        padding-top: 0rem;
        padding-bottom: 10rem;
    }
    .vision-mission-container {
        margin-top: 20vh;
        margin-bottom: 0vh;
    }
    .meet-container {
        height: calc(25vh + 20px);
    }
    .our-story {
        padding-right: 2rem;
        padding-left: 2rem;
    }
    .vision-mission-container {
        padding-bottom: 0vh;
    }

    .black-curve {
        width: 100%;
        height: 150px;
        margin-bottom: -1px;
    }

}

@media (max-width: 991px) {
    .message-image {
        width: 12rem;
    }

    .mission-title {
        color: #121212!important;
    }

    .vision-title {
        color: #121212!important;
    }
    .our-story-container {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
}


</style>