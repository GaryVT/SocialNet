<template>
  <div class="card">
    <CardHeader  v-if="header" :header="header"></CardHeader>

    <div class="card-body">
      <h5 v-if="title" class="card-title">{{ title }}</h5>
      <p v-if="parrafo" class="card-text">{{ parrafo }}</p>
      <img v-if="imagen" :src="imagen" alt="post img" />

      <ListGroup v-if="list"></ListGroup>

      <slot name="default"></slot>

      <div class="d-grid gap-2">
        <button
          v-for="btn in btns"
          :keys="btn.txt"
          class="btn"
          :class="btn.class"
        >
          {{ btn.txt }}
        </button>
      </div>
      <div class="text-center mt-3">
        <a v-if="pregunta" href="#" class="stretched-link" ms-1>{{
          pregunta
        }}</a>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import CardHeader from './CardHeader.vue';
import ListGroup from './ListGroup.vue';

export default {
  components:{CardHeader, ListGroup},
  name: "CardComp",
  props: ["title", "parrafo", "btns", "pregunta", "imagen", "header", "list"],
};
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
}
.card img {
  max-width: 100%;
}
.more-btn {
  border-radius: 50%;
  padding: 0.5em;
  margin: 0.3em;
}

.foto-user {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
}
.card-header-title{
  line-height: 0.7;
}
.card-header-subtitle{
  font-size: 0.8em;
}
</style>
