<template>
  <div class="p-grid marginTop7">
    <div class="p-col-8 p-offset-2">
      <p id="instruction">
        Please type your name or ID in the box below. Press NEXT when you are
        ready for the instructions
      </p>
    </div>
    <div class="p-col-6 p-offset-3 paddingTop">
      <InputText type="text" v-model="ID" />
    </div>

    <div v-if="ID !== ''" class="p-col-6 p-offset-3 marginTop3">
      <Button
        class="p-button-lg"
        @click="goInstruction"
        label="Next"
        icon="pi pi-arrow-right"
        iconPos="right"
      >
      </Button>
    </div>
  </div>
</template>
<script>
export default {
  name: "LexHome",
  data() {
    return {
      ID: "",
    };
  },

  methods: {
    goInstruction() {
      this.$store.commit("updateStudentID", this.ID);
      console.log(this.ID);
      this.$router.push({ name: "ListenLexInstruction" });
    },
  },
};
</script>
<style scoped>
.paddingTop {
  padding-top: 60px;
}
</style>
