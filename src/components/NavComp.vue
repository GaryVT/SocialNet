<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container justify-content-evenly">
      <router-link
        to="/"
        class="nav-link"
        :class="{ active: activePath.home }"
        aria-current="page"
      >
        <span class="material-icons"> home </span>
      </router-link>
      <router-link
        to="/about"
        class="nav-link"
        :class="{ active: activePath.about }"
      >
        <span class="material-icons"> info </span>
      </router-link>
      <router-link
        to="/post"
        class="nav-link"
        :class="{ active: activePath.post }"
      >
        <span class="material-icons"> featured_play_list </span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComp",
  computed: {
    activePath() {
      if (this.$route.path === "/") {
        return {
          home: true,
          about: false,
          post: false,
        };
      }else if (this.$route.path === "/about") {
        return {
          home: false,
          about: true,
          post: false,
        };
      } else if (this.$route.path === "/post") {
        return {
          home: false,
          about: false,
          post: true,
        };
      }else{
        return {
          home: false,
          about: false,
          post: false,
        };
      }
    },
  },
};
</script>

<style scoped>
.material-icons {
  color: white;
  font-size: 1.4em;
  background-color: rgb(28, 127, 240);
  padding: 0.3em;
}
.navbar {
  padding-top: 0;
  padding-bottom: 0;
}
.nav-link {
  padding-top: 0;
  padding-bottom: 0;
}
.active .material-icons {
  color: white;
  background-color: rgba(3, 79, 179, 0.541);
  border: gray;
}
</style>
