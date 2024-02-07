<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="d-flex justify-content-around align-items-center">
        <a href="#">bootflix</a>
        <form action="">
            <input type="text">
            <button>SEARCH</button>
        </form>
    </header>
</template>

<style>
header {
    background-color: #000;
    height: 80px;
}

a {
    font-size: 2rem;
    text-transform: uppercase;
    color: red;
    text-decoration: none;
}
</style>