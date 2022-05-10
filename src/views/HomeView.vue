<template>
  <div class="about">
    <p>WELCOME TO PROGRESSIVE LOGGER. LET'S GET STARTED.</p >
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
          <h1 class="md-title">WORKOUT LOGS</h1>
        </md-table-toolbar>

        <md-table-row>
          <md-table-head>LOG ID</md-table-head> 
          <md-table-head>DATE</md-table-head>
          <md-table-head>MUSCLE GROUP</md-table-head>
          <md-table-head>EXERCISE</md-table-head>
          <md-table-head>WEIGHT</md-table-head>
          <md-table-head>REPS</md-table-head>
          <md-table-head>SETS</md-table-head>
          <md-table-head>ACTION</md-table-head>
        </md-table-row>
        <WorkoutLog v-for="log of workoutLogs" v-bind:key="log.key" v-bind:log="log"
          >{{ log }}
        </WorkoutLog>
      </md-table>
    </div>
    <!--button @click="addPlaceHolderLog">click to add place holder log</button> -->
    <button @click="workoutLogs.push({})">click to add place holder log</button>
  </div>
</template>

<script>
import WorkoutLog from "@/components/WorkoutLog.vue";
export default {
  components: { WorkoutLog },
  created() {
    const encryptedUserId = "abc"
    const serverURL = 
    process.env.NODE_ENV === "production"
    ? "https://jjc4ufs7f5.execute-api.us-east-2.amazonaws.com/dev"
    :"http://localhost:3000"
    console.log(serverURL)
    fetch(`${serverURL}/workoutLogs?encryptedUserId=${encryptedUserId}`, {
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