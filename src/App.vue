<template>
 <NavComp></NavComp>

 <Router-view v-slot="{Component}">
  <transition name="fadeUp" mode="out-in">
    <component :is="Component" :key="$route.path">

    </component>
  </transition>


 </Router-view>


  <FootNav></FootNav>

</template>
<script>
import NavComp from "@/components/NavComp.vue"
import FootNav from "@/components/FootNav.vue";

  export default {
    name: "App",
    components: {
      NavComp,
      FootNav
    }
  }

</script>

<style>
#app {

  color: #2c3e50;
}

.fadeUp-enter-active,
.fadeUp-leave-active{
  transition: opacity 0.25s, transform 0.25s;
}
.fadeUp-enter,
.fadeUp-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}


</style>
