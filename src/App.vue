<template>
    <div>
        <Dashboard/>
    </div>
</template>

<script>
import Dashboard from './views/Dashboard.vue';

export default {
    name: 'App',
    components: {
        Dashboard,
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
