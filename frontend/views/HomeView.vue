<script setup>
import { defineAsyncComponent } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';
import store from './../store';
const varfolder = 'folder_1';
const HomePath = defineAsyncComponent(() =>
  import(`./${varfolder}/Home.vue`)
)
// console.log(store.data)
</script>

<template>
  <main>
    <HomePath />
    <TheWelcome />
  </main>
</template>
