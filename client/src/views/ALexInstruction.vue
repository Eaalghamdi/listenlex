<template>
  <div class="p-grid marginTop7">
    <div style="text-align: center" class="p-col-8 p-offset-2 ">
      <h2>A-Lex Vocabulary Size Test</h2>
    </div>
    <div style="text-align: left" class="p-col-8 p-offset-2 ">
      <p id="instruction">
        This test measures your receptive aural vocabulary size of English. You
        will hear a number of English words. Some of these words are real
        English words and some are invented but are made to sound like real
        words. Please press ‘Yes’ for the words that you know or can use or ‘No’
        for the words you don’t know. Please be aware that responding yes to the
        non-words will severely affect your scores. If you want to hear a word
        again press <b> REPEAT.</b>
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
  name: "ALexInstruction",
  methods: {
    goExperiment() {
      this.$router.push({ name: "ALexExperiment" });
    },
  },
};
</script>
<style scope></style>
