<template>
  <div id="app">
    <nav>
      <router-link v-if="userId != null" :to="{ name: 'home', params: { userId: $route.params.userId }}">HOME |</router-link> 
      <router-link v-if="userId != null" :to="{ name: 'add', params: { userId: $route.params.userId }}"> ADD LOG</router-link> 
      <!-- <router-link to="/delete">Delete</router-link> | -->
      <!--router-link to="/update">Update</router-link> -->
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  created(){
    this.userId = this.$route.params.userId
  },

  data() {
    return{
      userId: null
    }
  },
  methods: {
   
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
