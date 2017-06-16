<template>

    <div id="app">
        <h3>Inserts</h3>
        <pre>{{ insert }}</pre>
        <h3>Updates</h3>
        <pre>{{ update }}</pre>
    </div>

</template>

<script>

    export default {
        name: 'App',
        data: () => ({ insert: null, update: null}),
        mounted() {
            this.$socket.on('insert', insert => this.insert = insert)
            this.$socket.on('update', update => this.update = update)
        }
    }

</script>

<style>

    body {
        font-family: sans-serif;
        margin: 0;
        padding: 2rem;
    }

</style>
