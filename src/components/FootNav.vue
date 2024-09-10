<template>
    <footer>
        <ul class="list-group list-group-flush list-group-horizontal text-center mb-0">
  <li class="list-group-item">
   <router-link class="router-link" to="/">Home</router-link> 
  </li>
  <li class="list-group-item">
   <router-link class="router-link" to="/about">About</router-link> 
  </li>
  <li class="list-group-item">
   <router-link class="router-link" to="/post">Post</router-link> 
  </li>
</ul>
<img src="../assets/logo_p.png" alt="bookface logo" />
<ul></ul>
<div class="text-black-50 text-center"> bookface &#169; 2022

</div>



    </footer>

</template>

<script>


</script>

<style scoped>
footer{
    width: 100%;

    margin-top:1.9em;
    margin-bottom: 0.5em;
}

img{
    max-width: 55px;
    margin: 0 auto;
    display: block;
}

.text-center{
    margin-top: -0.5em;
    margin-bottom: 0.5em;
}
.list-group{
    justify-content: center;
}
.list-group-item{
    border: none;
}
.router-link{
    text-decoration: none;
}

@media (min-width: 768px){
    footer{
        position: absolute;
    }
    img{
        position: relative;
        bottom: 0;
    }
}


</style>