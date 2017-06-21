<template>
    <div>
        <registration></registration>
        <registrations></registrations>
    </div>
</template>

<script>
import Registration from './components/Registration.vue'
import Registrations from './components/Registrations.vue'

export default {
    components: {
        registration: Registration,
        registrations: Registrations
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
