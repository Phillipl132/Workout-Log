<template>
  <div class="about">
    <p>Welcome to the workout Log App. Let's get started!</p >
    <!-- <div>
      <table v-if="workoutLogs.length"> 
       <tr>   
          <th>Date</th>
          <th>Time</th>
          <th>Category</th>
          <th>Name</th>
          <th>Weight</th>
          <th>Caleries</th>
        </tr>
        <workoutLog  v-for = "log of workoutLogs" v-bind:key = "log.key" v-bind:log = "log">{{log}}
        </workoutLog>

     
      </table>
      <p v-else>Workout Log is empty.</p >
    </div> -->
    <div>
      <md-table md-card>
        <md-table-toolbar>
          <h1 class="md-title">Workout Logs</h1>
        </md-table-toolbar>

        <md-table-row>
          <md-table-head>ID</md-table-head> 
          <md-table-head>Date</md-table-head>
          <md-table-head>Muscle Group</md-table-head>
          <md-table-head>Exercise</md-table-head>
          <md-table-head>Weight</md-table-head>
          <md-table-head>Reps</md-table-head>
          <md-table-head>Sets</md-table-head>
          <md-table-head>Action</md-table-head>
        </md-table-row>
        <WorkoutLog v-for="log of workoutLogs" v-bind:key="log.key" v-bind:log="log"
          >{{ log }}
        </WorkoutLog>
      </md-table>
    </div>
    <button @click="addPlaceHolderLog">click to add place holder log</button>
    <button @click="workoutLogs.push({})">click to add an empty log</button>
  </div>
</template>

<script>
import WorkoutLog from "@/components/WorkoutLog.vue";
export default {
  components: { WorkoutLog },
  created() {
    const serverURL = 
    process.env.NODE_ENV === "production"
    ? "https://jjc4ufs7f5.execute-api.us-east-2.amazonaws.com/dev"
    :"http://localhost:3000"
    console.log(serverURL)
    fetch(`${serverURL}/workoutLogs`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        this.workoutLogs.push(...data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      workoutLogs: [],
      paragraph_attribute: {
        style: {
          color: "grey",
          backgroundColor: "lightgrey",
        },
      },
    };
  },
  methods: {
    addPlaceHolderLog() {
      const placeHolderLog = {
        date: "June 6,2021",
        time: "5:00",
        category: "meat",
        name: "steak",
        weight: 200,
        caleries: 200,
      };
      this.workoutLogs.push(placeHolderLog);
    },
  },
};
</script>