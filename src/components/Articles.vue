<template>
  <div class="hello">
   

   
    

    <div class= "data" v-for="article in articles">
     <img :src="article.Image"/>
     <h1>  {{article.Title}} </h1>
     <h3>  {{article.Author}} </h3>
     <p>  {{article.Paragraph}}</p>

    </div>
  
  </div>
</template>

<script>
export default {
  name: 'Articles',
  data () {
    return {
     title: 'People',
      articles: []
    }
  },

created: function(){

  fetch('http://localhost:8000/data')
  .then(r => r.json())
  .then(json => { 

    this.articles =json;
  })
}} 


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
  color: lightblue;
 
}

img{ 

  object-fit: cover;
  width:25% ;
  height:300px ;

}

.data{

  margin: 25px;



}



a {
  color: black;
}
</style>
