<template>
  <div class="p-grid marginTop7">
    <div class="p-col-8 p-offset-2">
      <p id="instruction">
        Thank you very much for helping with this work.
      </p>
      <p id="instruction">Press FINISH to close the programme.</p>
    </div>
    <div class="p-col-8 p-offset-2">
      <Button @click="goHome" label="Finish" class="p-button-lg" />
    </div>
  </div>
</template>
<script>
export default {
  name: "XLexFinish",
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style scoped></style>
