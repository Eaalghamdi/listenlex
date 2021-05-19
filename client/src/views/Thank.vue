<template>
  <div class="p-grid marginTop7">
    <div class="p-col-8 p-offset-2">
    <h3> Thank You </h
    
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",

  data() {
    return {
      ID: "",
    };
  },

  methods: {
    goInstruction() {
      this.emitter.emit("ID", this.ID);
      this.$router.push({ name: "instruction" });
    },
  },
};
</script>
<style scoped>
.paddingTop {
  padding-top: 60px;
}
</style>
