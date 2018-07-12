<template>
  <div class="hello">
  
  <div class="container">

  <h1>Submit Your Article</h1>
  <div class="box">

    <!-- our signup form ===================== -->
    <form id="signup-form">
      <!-- name -->
      <div class="field">
        <label class="label">Author</label>
        <input type="text" class="input" name="author">
      </div>

      <!-- email -->
      <div class="field">
        <label class="label">Title</label>
        <input type="text" class="input" name="title">
      </div>


      <div class="field">
        <label class="label">Image Address</label>
        <input type="text" class="input" name="image">
      </div>

      <div class="field">
        <label class="label">Paragraph</label>
        <input type="text" class="input" name="paragraph">
      </div>

      <!-- submit button -->
      <div class="field has-text-right">
        <button type="submit" class="button is-danger">Submit</button>
      </div>
    </form>
</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
     title: 'People'

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
  color: lightblue;
 

}

.field {

margin: 10px;
align-items: center;
}
ul {
  text-align: center;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
</style>
