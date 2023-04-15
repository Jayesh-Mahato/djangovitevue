<script setup>
import { defineAsyncComponent } from 'vue';
import abc from './../abc';
const HomePath = defineAsyncComponent(() =>
  import(`./${abc.data}/Home.vue`)
)
</script>
<template>
  <HomePath />
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
