<template>
  <div class="about">
    <h1>This is an ABOUT page</h1>
    <p> A workout calender generator</p>
    <div> {{workoutLog}}

    </div>
    
    <button @click="addPlaceHolderLog">click to add place holder log</button>

  </div>
</template>

<style scoped>
p{
color: brown; 
};
</style>

<script>
export default {
    data() {
         const log1 = {"Day": "Monday", "Muscle group": "Chest", "exercise": "Incline Dumbell Press", "Set": "3", "Rep": "10", "Weight": "65lbs"}
            const log2 = {"Day": "Monday", "Muscle group": "Shoulder", "exercise": "Machine Shoulder Press", "Set": "4", "Rep": "6", "Weight": "180lbs"}
            const log3 = {"Day": "Monday", "Muscle group": "Tricept", "exercise": "Weighted Dips", "Set": "4", "Rep": "8", "Weight": "30lbs"}
            const log4 = {"Day": "Tuesday", "Muscle group": "Lats", "exercise": "Single-hand Pull Down", "Set": "4", "Rep": "10", "Weight": "50lbs"}
            const log5 = {"Day": "Tuesday", "Muscle group": "Bicept", "exercise": "Cable Bicept Curl", "Set": "4", "Rep": "10", "Weight": "100lbs"}
 

        
        return {
            workoutLog: [log1, log2, log3, log4, log5]
        }
           
    },
   methods: {
       addPlaceHolderLog() {
    
           const placeHolderLog = {"Day": "Monday", "Muscle group": "Chest", "exercise": "Incline Dumbell Press", "Set": "3", "Rep": "10", "Weight": "65lbs"}
           this.workoutLog.push(placeHolderLog)
       }
   },
}
</script>


