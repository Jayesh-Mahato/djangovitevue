<script setup>
import { defineAsyncComponent } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';
import store from './../store';
const HomePath = defineAsyncComponent(() =>
  import(`./${store.data}/Home.vue`)
)
</script>

<template>
  <main>
    <HomePath />
    <TheWelcome />
  </main>
</template>
