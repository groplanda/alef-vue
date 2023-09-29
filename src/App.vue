<script setup>
  import { RouterView } from 'vue-router'
  import HeaderComponent from './components/Template/HeaderComponent.vue';
  import FooterComponent from './components/Template/FooterComponent.vue';
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>
