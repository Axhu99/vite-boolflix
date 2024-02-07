<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';

export default {
  name: 'Boolflix',
  components: { AppHeader },
  methods: {
  }
}
</script>

<template>
  <AppHeader @serch-text="readValue" />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
