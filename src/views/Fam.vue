<template>
  <transition name="fade">
    <Fam2020 v-if="loaded" />
  </transition>
</template>

<script>
import Fam2020 from '../components/Fam2020.vue'

export default {
  components: {
    Fam2020
  },
  data: function() {
      return {
        loaded: false
      }
  },
  mounted: function() {
    setTimeout(() => {
      this.loaded = true
    }, 500)
  },
  watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || 'CSUI2020 - Fam';
            }
        },
    }
  // ...
}
</script>