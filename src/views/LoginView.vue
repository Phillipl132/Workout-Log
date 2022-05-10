<template>
  <div>
    <md-dialog-prompt
      :md-active.sync="active"
      v-model="userId"
      md-title="Enter your User ID"
      md-input-maxlength="30"
      md-input-placeholder="User ID"
      md-confirm-text="Done"
      @md-cancel="onCancel"
      @md-confirm="confirmUserId"
    />

    <md-button class="md-primary md-raised" @click="active = true"
      >Prompt</md-button
    >
    <span v-if="userId">Value: {{ userId }}</span>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data: () => ({
    active: false,
    userId: null,
  }),

  methods: {
    // confirm user identity
    confirmUserId() {
      this.$router.push(`/${this.userId}/list`);
      location.reload()
      this.userId = null;
    },

    onCancel() {
      this.userId = null;
    },
  },
};
</script>