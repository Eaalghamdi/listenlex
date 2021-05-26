<template>
  <section class="marginTop9">
    <div class="p-grid ">
      <div class="p-col-8 p-offset-2 experiment marginTop7">
        <h2 class="song-title">{{ current.src }}</h2>

        <div class="controls">
          <button class="no" @click="no">No</button>
          <button class="yes" @click="yes">Yes</button>
        </div>
      </div>
    </div>
  </section>

  <div v-if="index == 120" class="p-col-3 p-offset-9 marginTop3">
    <Button
      class="p-button-lg p-button-success"
      @click="thankYou"
      label="Finish"
      icon="pi pi-arrow-right"
      iconPos="right"
    />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "XLexExperiment",

  data() {
    return {
      current: {},
      index: 0,
      audios: [
        { title: " 1", src: "oak", wordId: 98 },
        { title: " 2", src: "waygood", wordId: 10 },
        { title: " 3", src: "century", wordId: 26 },
        { title: " 4", src: "associate", wordId: 80 },
        { title: " 5", src: "gazard", wordId: 21 },
        { title: " 6", src: "trick", wordId: 45 },
        { title: " 7", src: "that", wordId: 1 },
        { title: " 8", src: "slip", wordId: 64 },
        { title: " 9", src: "daily", wordId: 77 },
        { title: " 10", src: "sumption", wordId: 97 },
        { title: " 11", src: "feel", wordId: 6 },
        { title: " 12", src: "pardoe", wordId: 49 },
        { title: " 13", src: "treadaway", wordId: 89 },
        { title: " 14", src: "sorrow", wordId: 116 },
        { title: " 15", src: "earn", wordId: 43 },
        { title: " 16", src: "independent", wordId: 56 },
        { title: " 17", src: "diamond", wordId: 65 },
        { title: " 18", src: "outlet", wordId: 119 },
        { title: " 19", src: "press", wordId: 66 },
        { title: " 20", src: "round", wordId: 7 },
        { title: " 21", src: "mount", wordId: 91 },
        { title: " 22", src: "instead", wordId: 19 },
        { title: " 23", src: "upward", wordId: 83 },
        { title: " 24", src: "whole", wordId: 36 },
        { title: " 25", src: "stand", wordId: 15 },
        { title: " 26", src: "fine", wordId: 18 },
        { title: " 27", src: "hobrow", wordId: 63 },
        { title: " 28", src: "stream", wordId: 50 },
        { title: " 29", src: "park", wordId: 30 },
        { title: " 30", src: "weather", wordId: 33 },
        { title: " 31", src: "dish", wordId: 41 },
        { title: " 32", src: "deny", wordId: 53 },
        { title: " 33", src: "difficult", wordId: 24 },
        { title: " 34", src: "kennard", wordId: 16 },
        { title: " 35", src: "arrow", wordId: 114 },
        { title: " 36", src: "wheel", wordId: 34 },
        { title: " 37", src: "woman", wordId: 14 },
        { title: " 38", src: "believe", wordId: 17 },
        { title: " 39", src: "effect", wordId: 12 },
        { title: " 40", src: "moreover", wordId: 93 },
        { title: " 41", src: "sandy", wordId: 72 },
        { title: " 42", src: "mud", wordId: 47 },
        { title: " 43", src: "Jug", wordId: 95 },
        { title: " 44", src: "tube", wordId: 92 },
        { title: " 45", src: "boil", wordId: 71 },
        { title: " 46", src: "discuss", wordId: 29 },
        { title: " 47", src: "with", wordId: 2 },
        { title: " 48", src: "path", wordId: 31 },
        { title: " 49", src: "normal", wordId: 51 },
        { title: " 50", src: "darrock", wordId: 4 },
        { title: " 51", src: "cantileen", wordId: 35 },
        { title: " 52", src: "chart", wordId: 100 },
        { title: " 53", src: "refer", wordId: 55 },
        { title: " 54", src: "drum", wordId: 69 },
        { title: " 55", src: "relative", wordId: 82 },
        { title: " 56", src: "permission", wordId: 103 },
        { title: " 57", src: "lessen", wordId: 96 },
        { title: " 58", src: "both", wordId: 25 },
        { title: " 59", src: "staircase", wordId: 76 },
        { title: " 60", src: "table", wordId: 9 },
        { title: " 61", src: "arrive", wordId: 23 },
        { title: " 62", src: "humble", wordId: 88 },
        { title: " 63", src: "feeling", wordId: 57 },
        { title: " 64", src: "reasonable", wordId: 70 },
        { title: " 65", src: "person", wordId: 5 },
        { title: " 66", src: "tower", wordId: 32 },
        { title: " 67", src: "crisis", wordId: 94 },
        { title: " 68", src: "antique", wordId: 99 },
        { title: " 69", src: "everywhere", wordId: 52 },
        { title: " 70", src: "gumm", wordId: 78 },
        { title: " 71", src: "fishlock", wordId: 27 },
        { title: " 72", src: "juice", wordId: 60 },
        { title: " 73", src: "contract", wordId: 90 },
        { title: " 74", src: "horobin", wordId: 120 },
        { title: " 75", src: "question", wordId: 11 },
        { title: " 76", src: "bullet", wordId: 58 },
        { title: " 77", src: "fade", wordId: 107 },
        { title: " 78", src: "gillen", wordId: 42 },
        { title: " 79", src: "pedestrian", wordId: 113 },
        { title: " 80", src: "rake", wordId: 108 },
        { title: " 81", src: "before", wordId: 3 },
        { title: " 82", src: "early", wordId: 8 },
        { title: " 83", src: "pity", wordId: 38 },
        { title: " 84", src: "cardboard", wordId: 87 },
        { title: " 85", src: "group", wordId: 22 },
        { title: " 86", src: "anxious", wordId: 112 },
        { title: " 87", src: "limp", wordId: 102 },
        { title: " 88", src: "horozone", wordId: 101 },
        { title: " 89", src: "insult", wordId: 86 },
        { title: " 90", src: "hyslop", wordId: 106 },
        { title: " 91", src: "shot", wordId: 54 },
        { title: " 92", src: "headlong", wordId: 104 },
        { title: " 93", src: "brighten", wordId: 117 },
        { title: " 94", src: "produce", wordId: 20 },
        { title: " 95", src: "cup", wordId: 28 },
        { title: " 96", src: "signal", wordId: 40 },
        { title: " 97", src: "essential", wordId: 79 },
        { title: " 98", src: "dam", wordId: 118 },
        { title: " 99", src: "manage", wordId: 46 },
        { title: " 100", src: "perform", wordId: 37 },
        { title: " 101", src: "violent", wordId: 105 },
        { title: " 102", src: "cliff", wordId: 48 },
        { title: " 103", src: "nod", wordId: 61 },
        { title: " 104", src: "provide", wordId: 67 },
        { title: " 105", src: "manomize", wordId: 111 },
        { title: " 106", src: "candlin", wordId: 68 },
        { title: " 107", src: "impress", wordId: 75 },
        { title: " 108", src: "military", wordId: 74 },
        { title: " 109", src: "probable", wordId: 39 },
        { title: " 110", src: "sweat", wordId: 44 },
        { title: " 111", src: "publish", wordId: 85 },
        { title: " 112", src: "frequid", wordId: 59 },
        { title: " 113", src: "feeble", wordId: 115 },
        { title: " 114", src: "alden", wordId: 84 },
        { title: " 115", src: "mercy", wordId: 110 },
        { title: " 116", src: "market", wordId: 13 },
        { title: " 117", src: "trunk", wordId: 109 },
        { title: " 118", src: "conduct", wordId: 81 },
        { title: " 119", src: "litholect", wordId: 73 },
        { title: " 120", src: "gentle", wordId: 62 },
      ],

      player: new Audio(),

      trakingData: [],
    };
  },

  methods: {
    thankYou() {
      this.$router.push({ name: "XLexFinish" });
    },
    play(audio) {
      if (typeof audio.src != "undefined") {
        this.current = audio;
        this.player.src = this.current.src;
      }
      this.player.play();

      this.isPlaying = true;
    },

    yes() {
      this.current = this.audios[this.index];
      this.play(this.current);
      this.trakingData.push({
        studentID: this.$store.state.studentID,
        word: this.current.src,
        yes: true,
        no: false,
      });
      this.submitData();
      console.log(this.trakingData[this.trakingData.length - 1]);
      this.index++;
      if (this.index == 120) {
        this.$router.push({ name: "XLexFinish" });
      }
    },
    no() {
      this.current = this.audios[this.index];
      this.play(this.current);
      this.trakingData.push({
        studentID: this.$store.state.studentID,
        word: this.current.src,
        yes: false,
        no: true,
      });
      this.submitData();
      console.log(this.trakingData[this.trakingData.length - 1]);
      this.index++;
      if (this.index == 120) {
        this.$router.push({ name: "XLexFinish" });
      }
    },
    repeat() {
      const rept = this.audios[this.index] - 1;
      this.play(rept);
    },

    submitData() {
      axios
        .post("api/xlex", this.trakingData[this.trakingData.length - 1])
        .then(
          function() {
            this.trakingData = [];
          }.bind(this)
        )
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.current = this.audios[this.index];
    this.player.src = this.current.src;
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #212121;
  color: #fff;
}
main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 25px;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
}
button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}
.play,
.no,
.pause {
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0px 15px;
  border-radius: 8px;
  color: #fff;
  background-color: red;
}
.next,
.prev {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0px 15px;
  border-radius: 6px;
  color: #fff;
  background-color: gray;
}
.yes {
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0px 15px;
  border-radius: 8px;
  color: #fff;
  background-color: green;
}
.experiment {
  border-style: dotted;
}
</style>
