<template>
  <div class="home">
    <div class="row mx-0">
      <div class="col-lg-6">
        <div class="img-cont">
          <img alt="Vue logo" src="../assets/img/facebook.svg" />
          <h2 class="text-center text-lg-start">
            Facebook te ayuda a comunicarte y compartir con las personas que
            forman parte de tu vida.
          </h2>
        </div>
      </div>
      <div class="col-lg-6">
				<card-comp :btns="btnArray" :pregunta="pregunta" class="mx-auto card-comp">
       <template #default>
        <form>
            <div class="mb-3" mt-2>
              <input type="email" class="form-control" placeholder="Correo electronico o numero">
            </div>
            <div class="mb-3" mt-2>
              <input type="password" class="form-control" placeholder="Contraseña">
            </div>
          </form>
       </template>
       <template #footer>
        <hr>
        <div class="text-center">
          <button class="btn btn-success" style="width: 200px;">Crear cuenta</button>
        </div>
       </template>
        </card-comp>

      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CardComp from "@/components/CardComp.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    CardComp,
    
  },
  data() {
			return {
				btnArray: [
					{
						txt: 'Iniciar sesión',
						class: 'btn-primary',
					},
					{
						txt: 'Borrar',
						class: 'btn-danger',
					},
				],
        pregunta: "¿Olvidaste tu contraseña?"
			}
		},
};
</script>

<style scoped>

h2{
  max-width: 470px;
  margin: auto;
  font-size: 1.6em;
  margin-right: 1.6em;

}


.home {
  max-width: 895px;
  margin: auto;
}

.card-comp{
  max-width: 398px;
  margin-top: 2.6em;
}

.img-cont
{
  display: flex;
  flex-direction: column;
}
img{
  max-width: 315px;
  margin: 1em 0 auto;
}

.btn-success{
  margin: auto;
  max-width: 195px;
}


@media (min-width: 992px) {
  .home{
    margin: 4em auto;
  }
  .img{
  max-width: 5.6em;
  margin: 0;
}
  h2{
    margin: 0;
    margin-top: -0.8em;
    margin-left: 1.4em;
  }
  card-comp{
    margin-top: 3rem;
  }
}
</style>
