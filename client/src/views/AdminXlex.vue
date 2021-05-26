<template>
  <div class="p-grid marginTop7">
    <div class="p-col-8 p-offset-2">
      <Button
        label="A-Lex Data"
        class="p-button-raised dataBtn"
        @click="goToALexData"
      />
      <Button
        label="X-Lex Data"
        class="p-button-raised  dataBtn"
        @click="goToXLexData"
      />
      <Button
        label="ListenLex Data"
        class="p-button-raised dataBtn"
        @click="goToListenLexData"
      />
    </div>
    <div class="p-col-8 p-offset-2">
      <DataTable :value="trakingData" ref="dt" :paginator="true" :rows="10">
        <template #header>
          <h2>X-Lex</h2>
          <div style="text-align: left">
            <Button
              icon="pi pi-external-link"
              label="Export"
              @click="exportCSV($event)"
              class="p-button-secondary p-button-sm"
            />
          </div>
        </template>
        <Column field="studentID" header="Student ID"></Column>
        <Column field="word" header="Word"></Column>
        <Column field="yes" header="Yes"></Column>
        <Column field="no" header="No"></Column>
        <Column field="date" header="Time"></Column>
      </DataTable>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AdminXlex",
  data() {
    return {
      trakingData: null,
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
    goToListenLexData() {
      this.$router.push({ name: "Admin" });
    },
    goToALexData() {
      this.$router.push({ name: "ALexData" });
    },
    goToXLexData() {
      this.$router.push({ name: "XLexData" });
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
  },

  async mounted() {
    const response = await axios.get("api/xlex");
    this.trakingData = response.data;
  },
};
</script>
<style scoped>
.dataBtn {
  padding: 20px;
  margin: 10px;
}
</style>
