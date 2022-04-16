<template>
  <div class="about">
    <h1 v-bind = "title_attribute">This is an about page</h1>
    <p v-bind = "paragraph_attribute">
    Welcome to the Diet Log App. Let's get started!
    </p >
  </div>
  
</template>

<style scoped>
p{
  color: grey;
  font-size: 30px
}
</style>

<script>
export default {
  components: {
  },
  data(){
    return{
      title_attribute:{
        style:{
          color: 'grey',
          backgroundColor: 'lightGrey'
        }
      },
      paragraph_attribute:{
        style:{
          color: 'grey',
          backgroundColor: 'lightGrey'
        }
      }

    }
  }
}
</script>