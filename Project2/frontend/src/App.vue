<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div class= "nav">
     <router-link to = "/">Home</router-link>
     <router-link to = "/articles">Articles</router-link>
     <router-link to = "/photos"> Photos</router-link>
    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'People'
    }
  }
}
</script>

<style>
h1{
  text-align: center;
  color: lightblue;
 
 }

 .nav{ 
  text-align:center;

  }

</style>
