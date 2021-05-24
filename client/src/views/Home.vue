<template>
  <section class="marginTop9">
    <div class="p-grid p-col-8 p-offset-2  marginTop7">
      <div class="p-col-4  marginTop3">
        <Button class="p-button-lg p-button-success" @click="goToALex">
          <img alt="logo" src="@/assets/alex.png" style="width: 15.5rem" />
        </Button>
      </div>
      <div class="p-col-4  marginTop3">
        <Button
          class="p-button-lg p-button-warning"
          @click="goToXLex"
          label="Next"
        >
          <img alt="logo" src="@/assets/xlex.png" style="width: 15.5rem" />
        </Button>
      </div>
      <div class="p-col-4  marginTop3">
        <Button class="p-button-lg" @click="goToListenLex">
          <img alt="logo" src="@/assets/listenlex.png" style="width: 15.5rem" />
        </Button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Home",

  methods: {
    goToListenLex() {
      this.$router.push({ name: "ListenLex" });
    },
    goToALex() {
      this.$router.push({ name: "ALex" });
    },
    goToXLex() {
      this.$router.push({ name: "XLex" });
    },
  },
};
</script>
<style scoped>
.paddingTop {
  padding-top: 80px;
}
</style>
