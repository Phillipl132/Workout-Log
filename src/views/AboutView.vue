<template>
  <div class="about">
    <!--h1 v-bind = "title_attribute">This is an about page</h1> -->
    <p v-bind = "paragraph_attribute">
    “No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.” 
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