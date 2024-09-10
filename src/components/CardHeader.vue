<template>
        <div class="card-header">
      <div class="row">
        <div class="col-2">
          <img
            class="foto-user"
            :src="header.picture"
            alt="avatar de sebastian"
          />
        </div>

        <div class="col-8">

          <h4 class="card-header-title m-0">
            <router-link to="/profile">{{ header.name }}</router-link>
            </h4>

          <small class="text-muted card-header-subtitle"> Hvae 2 minutes</small>
        </div>

        <div class="col-1">
          <button class="btn d-flex align-items-center more-btn">
            <span class="material-icons"> more_horiz </span>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default{
    name: "CardHeader",
    props:["header"],
}
</script>

<style>
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