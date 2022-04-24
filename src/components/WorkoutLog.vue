<template>
  <md-table-row>
    <md-table-cell>{{ log.Id }}</md-table-cell>
    <md-table-cell>{{ log.date }}</md-table-cell>
    <md-table-cell>{{ log.muscleGroup }}</md-table-cell>
    <md-table-cell>{{ log.exercise }}</md-table-cell>
    <md-table-cell>{{ log.weight }}</md-table-cell>
    <md-table-cell>{{ log.reps }}</md-table-cell>
    <md-table-cell>{{ log.sets }}</md-table-cell>
    <md-table-cell
      ><md-button
        @click="deleteWorkoutLog"
        class="md-primary"
        
        >DELETE</md-button
      ></md-table-cell
    >
  </md-table-row>
</template>
<script>
export default {
  props: ["log"],

  methods: {
    deleteWorkoutLog() {
      const serverURL =
        process.env.NODE_ENV === "production"
          ? "https://jjc4ufs7f5.execute-api.us-east-2.amazonaws.com/dev"
          : "http://localhost:3000";
      console.log(`${serverURL}/workoutLog?id=${this.log.Id}`);

      fetch(`${serverURL}/workoutLog?id=${this.log.Id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin": "*",
          Accept: "*/*",
        },
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          console.log(data);
          this.first = true;
          document.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.md-table-cell {
  text-align: left;
}
</style>

