<template>
  <div class="p-grid marginTop7">
    <div style="text-align: center" class="p-col-8 p-offset-2 ">
      <h2>X-Lex Vocabulary Size Test</h2>
      <p id="instruction">
        This test measures your receptive written vocabulary size of English.
      </p>
    </div>
    <div style="text-align: left" class="p-col-8 p-offset-2 ">
      <p id="instruction">
        Please look at these words. Some of these words are real English words
        and some are invented but are made to look like real words. Please tick
        the words that you know or can use.
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
  name: "XLexInstruction",
  methods: {
    goExperiment() {
      this.$router.push({ name: "XLexExperiment" });
    },
  },
};
</script>
<style scope></style>
