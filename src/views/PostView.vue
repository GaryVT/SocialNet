<template>
  <div class="post container">
    <img src="../assets/img/facebook.svg" alt="bookface" class="logo" />
    <CardComp
      class="mt-2 mx-auto single-post"
      parrafo="Primer post"
      :header="{
        name: 'Sebastian Maikol',
        picture: 'https://randomuser.me/api/portraits/men/81.jpg',
      }"
      imagen="https://images.pexels.com/photos/3970000/pexels-photo-3970000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      :list="true"
    >
    </CardComp>
    <CardComp
      class="mt-2 mx-auto single-post"
      parrafo="Segundo post"
      :header="{
        name: 'Carolina Bross',
        picture: 'https://randomuser.me/api/portraits/women/81.jpg',
      }"
      imagen="https://images.pexels.com/photos/28173191/pexels-photo-28173191/free-photo-of-construccion-en-la-agitada-ciudad-de-nueva-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      :list="true"
    >
    </CardComp>
  </div>
</template>

<script>
import CardComp from "@/components/CardComp.vue";

export default {
  name: "PostView",
  components: {
    CardComp,
  },
};
</script>

<style scoped>
.post {
  min-height: 60vh;
  max-width: 895px;
  margin: auto;
}

.logo {
  max-width: 230px;
  padding: 02rem;
}

.single-post {
  max-width: 550px;
}
</style>
