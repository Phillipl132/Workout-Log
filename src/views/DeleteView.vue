<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateDeleteWorkoutLog">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Delete Workout Log</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="ID">ID</label>
              <md-input name="id" id="id" v-model="form.id" />
            </md-field>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-dialog-alert
            :md-active.sync="first"
            md-content="Your post has been deleted!"
            md-confirm-text="Cool!"
          />
          <md-button class="md-accent md-raised" @click="deleteWorkoutLog"
            >DELETE</md-button
          >
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  name: "DeleteView",
  data: () => ({
    first: false,
    form: {
      id: null,
    },
  }),

  methods: {
    deleteWorkoutLog() {
      this.sending = true;
      const serverURL = 
    process.env.NODE_ENV === "production"
    ? "https://jjc4ufs7f5.execute-api.us-east-2.amazonaws.com/dev"
    :"http://localhost:3000"
    console.log(serverURL)
      
      fetch(`${serverURL}/workoutLog?id=${this.form.id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin": "*",
          Accept: "*/*",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.first = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  
};
</script>