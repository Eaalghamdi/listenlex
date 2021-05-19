<template>
  <div class="p-grid marginTop7">
    <div class="p-col-8 p-offset-2">
      <h3 id="instruction">Admin Page</h3>
    </div>

    <div class="p-col-8 p-offset-2">
      <DataTable :value="trakingData" ref="dt" :paginator="true" :rows="10">
        <template #header>
          <div style="text-align: left">
            <Button
              icon="pi pi-external-link"
              label="Export"
              @click="exportCSV($event)"
            />
          </div>
        </template>
        <Column field="studentID" header="Student ID"></Column>
        <Column field="audio" header="Audio"></Column>
        <Column field="play" header="Play"></Column>
        <Column field="date" header="Time"></Column>
      </DataTable>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Admin",
  data() {
    return {
      trakingData: null,
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
  },

  async mounted() {
    const response = await axios.get("api/activities");
    this.trakingData = response.data;
  },
};
</script>
<style scoped></style>
