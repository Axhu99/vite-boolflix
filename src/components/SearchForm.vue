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
    emits: ['submit-form', 'term-change']
}
</script>

<template>
    <!-- TODO quando si invia il form RESET dell'input -->
    <form @submit.prevent="$emit('submit-form')" class="d-flex gap-2">
        <input type="text" class="form-control" v-model.trim="searchTerm" @keyup="$emit('term-change', searchTerm)"
            :placeholder="placeholder || 'Cerca...'">
        <button type="button" class="btn btn-danger">{{ buttonText || 'CERCA' }}</button>
    </form>
</template>

<style></style>