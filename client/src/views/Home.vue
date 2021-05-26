<template>
  <section class="marginTop9">
    <div class="p-grid p-col-8 p-offset-2  marginTop7">
      <div style="text-align: left">
        <p id="instruction">
          The purpose of this research is to examine the relationship between
          aural and written receptive vocabulary knowledge and the mental
          processing of spoken text. There are three tests which you kindly need
          to take. These test are shown below. Please carefully read the
          instruction of each test before you begin.
        </p>
        <br />
        <p id="instruction">
          We highly appreciate your participation in this research.
        </p>
      </div>

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
