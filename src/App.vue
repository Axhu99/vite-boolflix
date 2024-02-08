<script>
import { store } from './data/store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


export default {
  name: 'Boolflix',
  data: () => ({
    store
  }),
  components: { AppHeader, AppMain },
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
