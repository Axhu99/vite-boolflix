<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'Boolflix',
  components: { AppHeader },
  methods: {
    readValue(textApi) {
      console.log(textApi);
    }
  }
}
</script>

<template>
  <AppHeader @serch-text="readValue" />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
