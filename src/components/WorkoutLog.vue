<template>
  <md-table-row>
    <md-table-cell>{{ log.Id }}</md-table-cell>
    <md-table-cell>{{ log.date }}</md-table-cell>
    <md-table-cell>{{ log.muscleGroup }}</md-table-cell>
    <md-table-cell>{{ log.exercise }}</md-table-cell>
    <md-table-cell>{{ log.weight }}</md-table-cell>
    <md-table-cell>{{ log.reps }}</md-table-cell>
    <md-table-cell>{{ log.sets }}</md-table-cell>
  </md-table-row>
</template>
<script>
export default {
  props: ["log"],
};
</script>

<style scoped>
.md-table-cell{
    text-align:left;
}
</style>