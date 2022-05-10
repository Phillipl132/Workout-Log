<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Edit WorkoutLog</md-dialog-title>
      <form novalidate class="md-layout" @submit.prevent="validateWorkoutLog">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="date">Date</label>
                  <md-input
                    name="date"
                    id="date"
                    v-model="form.date"
                    :disabled="sending"
                  />
                  <span class="md-error" v-if="!$v.form.date.required"
                    >The date is required</span
                  >
                  <span class="md-error" v-else-if="!$v.form.date.minlength"
                    >Invalid date</span
                  >
                </md-field>
                <md-field>
                  <label for="muscleGroup">Muscle Group</label>
                  <md-select
                    name="muscleGroup"
                    id="muscleGroup"
                    v-model="form.muscleGroup"
                    md-dense
                    :disabled="sending"
                  >
                    <md-option></md-option>
                    <md-option value="Chest">Chest</md-option>
                    <md-option value="Deltoids">Deltoids</md-option>
                    <md-option value="Tricept">Tricept</md-option>
                    <md-option value="Bicept">Bicept</md-option>
                    <md-option value="Lats">Lats</md-option>
                    <md-option value="Traps">Traps</md-option>
                    <md-option value="Mid-back">Mid-back</md-option>
                    <md-option value="Glutes">Glutes</md-option>
                    <md-option value="Quads">Quads</md-option>
                    <md-option value="Hamstring">Hamstring</md-option>
                    <md-option value="Calves">Calves</md-option>
                  </md-select>
                  <span class="md-error">The Muscle Group is required</span>
                </md-field>

                <md-field>
                  <label for="exercise">Exercise</label>
                  <md-input
                    name="exercise"
                    id="exercise"
                    v-model="form.exercise"
                    :disabled="sending"
                  />
                  <span class="md-error" v-if="!$v.form.exercise.required"
                    >The exercise is required</span
                  >
                  <span class="md-error" v-else-if="!$v.form.exercise.minlength"
                    >Invalid Exercise</span
                  >
                </md-field>

                <md-field>
                  <label for="weight">Weight</label>
                  <md-input
                    name="weight"
                    id="weight"
                    v-model="form.weight"
                    :disabled="sending"
                  />
                  <span class="md-error" v-if="!$v.form.weight.required"
                    >The Weight is required</span
                  >
                  <span class="md-error" v-else-if="!$v.form.weight.minlength"
                    >Invalid Weight</span
                  >
                </md-field>

                <md-field>
                  <label for="reps">Reps</label>
                  <md-input
                    name="reps"
                    id="reps"
                    v-model="form.reps"
                    :disabled="sending"
                  />
                  <span class="md-error" v-if="!$v.form.reps.required"
                    >The Reps is required</span
                  >
                  <span class="md-error" v-else-if="!$v.form.reps.minlength"
                    >Invalid Reps</span
                  >
                </md-field>

                <md-field>
                  <label for="sets">Sets</label>
                  <md-input
                    name="sets"
                    id="sets"
                    v-model="form.sets"
                    :disabled="sending"
                  />
                  <span class="md-error" v-if="!$v.form.sets.required"
                    >The Sets is required</span
                  >
                  <span class="md-error" v-else-if="!$v.form.sets.minlength"
                    >Invalid Sets</span
                  >
                </md-field>
              </div>
            </div>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />
        </md-card>

        <md-snackbar :md-active.sync="workoutLogSaved"
          >The WorkoutLog {{ lastWorkoutLog }} was saved with
          success!</md-snackbar
        >
      </form>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closedDialogue()" 
          >Close</md-button
        >
        <md-button class="md-primary" @click="updateWorkoutLog">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary" @click="showDialog = true">Edit</md-button>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "EditDialogueComponent",
  props: ["id"],

  mixins: [validationMixin],
  data: () => ({
    showDialog: false,
    form: {
      date: null,
      muscleGroup: null,
      exercise: null,
      weight: null,
      reps: null,
      sets: null,
    },
    workoutLogSaved: false,
    sending: false,
    lastWorkoutLog: null,
  }),
  validations: {
    form: {
      date: {
        required,
        minLength: minLength(10),
      },
      muscleGroup: {
        required,
        minLength: minLength(1),
      },
      exercise: {
        required,
      },
      weight: {
        required,
        minLength: minLength(1),
      },
      reps: {
        required,
      },
      sets: {
        required,
      },
    },
  },
  methods: {
    updateWorkoutLog() {
      this.sending = true;
      const serverURL =
        process.env.NODE_ENV === "production"
          ? "https://jjc4ufs7f5.execute-api.us-east-2.amazonaws.com/dev"
          : "http://localhost:3000";
      this.form.Id = this.id;
      console.log(this.form);
      fetch(`${serverURL}/workoutLog`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin": "*",
          Accept: "*/*",
        },
        body: JSON.stringify(this.form),
      })
        
        .then((data) => {
          console.log(data);
          this.showDialog = false;
          document.location.reload(); //add refresh page
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.date = null;
      this.form.time = null;
      this.form.category = null;
      this.form.name = null;
      this.form.weight = null;
      this.form.caleries = null;
    
    },
    closedDialogue() {
        this.clearForm()
        this.showDialog = false 

    },
    saveWorkoutLog() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastWorkoutLog = `${this.form.date} ${this.form.time}`;
        this.workoutLogSaved = true;
        this.sending = false;
        console.log(this.form);
        this.clearForm();
      }, 1500);
    },
    validateWorkoutLog() {
      console.log(this.form);
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveWorkoutLog();
      }
    },
  },
};
</script>

<style scoped>
.md-dialog /deep/.md-dialog-container {
  max-width: 768px;
}
.md-card {
  box-shadow: none;
}
</style>