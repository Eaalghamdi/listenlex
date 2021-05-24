<template>
  <div class="logo">
    <img id="logo" src="@/assets/logo.png" />
  </div>
  <div class="p-grid marginTop7">
    <div style="text-align: left" class="p-col-8 p-offset-2 ">
      <p id="instruction">
        You will hear a text read in English. Please listen to the text and try
        to understand it. You will hear it in short lines, one line at a time.
      </p>
    </div>
    <div style="text-align: left" class="p-col-8 p-offset-2 p-mb-2">
      <p id="instruction">
        Press <b> NEXT </b> to start and hear the first line then when you are
        ready for the second line press <b> NEXT </b> again.
      </p>
    </div>
    <div style="text-align: center" class="p-col-8 p-offset-2">
      <p id="instruction">
        If you want to hear a line again press <b> REPEAT.</b>
      </p>
    </div>
    <div style="text-align: center" class="p-col-8 p-offset-2">
      <p id="instruction">When you are ready to begin, press <b> NEXT.</b></p>
    </div>

    <div class="p-col-3  p-offset-9 marginTop3">
      <Button
        class="p-button-lg"
        @click="goExperiment"
        label="Next"
        icon="pi pi-arrow-right"
        iconPos="right"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "LexInstruction",
  methods: {
    goExperiment() {
      this.$router.push({ name: "ListenLexExperiment" });
    },
  },
};
</script>
<style scope></style>
