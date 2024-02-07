<script>
export default {
    name: 'SearchForm',
    data: () => ({
        searchTerm: '',
    }),
    props: {
        placeholder: String,
        buttonText: String,
    },
    emits: ['submit-form']
}
</script>

<template>
    <!-- TODO quando si invia il form RESET dell'input -->
    <form @submit.prevent="$emit('submit-form', searchTerm)" class="d-flex">
        <input type="text" class="form-control" :placeholder="placeholder || 'Cerca...'" v-model.trim="searchTerm">
        <button>{{ buttonText || 'CERCA' }}</button>
    </form>
</template>

<style></style>