<template>
  <section class="marginTop9">
    <div class="p-grid ">
      <div class="p-col-8 p-offset-2 experiment marginTop7">
        <h2 class="song-title">{{ current.title }} / 120</h2>

        <div class="controls">
          <button class="no" @click="no">No</button>
          <button class="play" v-if="index == 0" @click="play">
            Start
          </button>
          <button class="prev" v-else @click="repeat">Repeat</button>

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
  name: "ALexExperiment",

  data() {
    return {
      current: {},
      index: 0,
      audios: [
        {
          title: " 1",
          src: require("../assets/ALexAudioFiles/98.mp3"),
          wordId: 98,
        },
        {
          title: " 2",
          src: require("../assets/ALexAudioFiles/10.mp3"),
          wordId: 10,
        },
        {
          title: " 3",
          src: require("../assets/ALexAudioFiles/26.mp3"),
          wordId: 26,
        },
        {
          title: " 4",
          src: require("../assets/ALexAudioFiles/80.mp3"),
          wordId: 80,
        },
        {
          title: " 5",
          src: require("../assets/ALexAudioFiles/21.mp3"),
          wordId: 21,
        },
        {
          title: " 6",
          src: require("../assets/ALexAudioFiles/45.mp3"),
          wordId: 45,
        },
        {
          title: " 7",
          src: require("../assets/ALexAudioFiles/1.mp3"),
          wordId: 1,
        },
        {
          title: " 8",
          src: require("../assets/ALexAudioFiles/64.mp3"),
          wordId: 64,
        },
        {
          title: " 9",
          src: require("../assets/ALexAudioFiles/77.mp3"),
          wordId: 77,
        },
        {
          title: " 10",
          src: require("../assets/ALexAudioFiles/97.mp3"),
          wordId: 97,
        },
        {
          title: " 11",
          src: require("../assets/ALexAudioFiles/6.mp3"),
          wordId: 6,
        },
        {
          title: " 12",
          src: require("../assets/ALexAudioFiles/49.mp3"),
          wordId: 49,
        },
        {
          title: " 13",
          src: require("../assets/ALexAudioFiles/89.mp3"),
          wordId: 89,
        },
        {
          title: " 14",
          src: require("../assets/ALexAudioFiles/116.mp3"),
          wordId: 116,
        },
        {
          title: " 15",
          src: require("../assets/ALexAudioFiles/43.mp3"),
          wordId: 43,
        },
        {
          title: " 16",
          src: require("../assets/ALexAudioFiles/56.mp3"),
          wordId: 56,
        },
        {
          title: " 17",
          src: require("../assets/ALexAudioFiles/65.mp3"),
          wordId: 65,
        },
        {
          title: " 18",
          src: require("../assets/ALexAudioFiles/119.mp3"),
          wordId: 119,
        },
        {
          title: " 19",
          src: require("../assets/ALexAudioFiles/66.mp3"),
          wordId: 66,
        },
        {
          title: " 20",
          src: require("../assets/ALexAudioFiles/7.mp3"),
          wordId: 7,
        },
        {
          title: " 21",
          src: require("../assets/ALexAudioFiles/91.mp3"),
          wordId: 91,
        },
        {
          title: " 22",
          src: require("../assets/ALexAudioFiles/19.mp3"),
          wordId: 19,
        },
        {
          title: " 23",
          src: require("../assets/ALexAudioFiles/83.mp3"),
          wordId: 83,
        },
        {
          title: " 24",
          src: require("../assets/ALexAudioFiles/36.mp3"),
          wordId: 36,
        },
        {
          title: " 25",
          src: require("../assets/ALexAudioFiles/15.mp3"),
          wordId: 15,
        },
        {
          title: " 26",
          src: require("../assets/ALexAudioFiles/18.mp3"),
          wordId: 18,
        },
        {
          title: " 27",
          src: require("../assets/ALexAudioFiles/63.mp3"),
          wordId: 63,
        },
        {
          title: " 28",
          src: require("../assets/ALexAudioFiles/50.mp3"),
          wordId: 50,
        },
        {
          title: " 29",
          src: require("../assets/ALexAudioFiles/30.mp3"),
          wordId: 30,
        },
        {
          title: " 30",
          src: require("../assets/ALexAudioFiles/33.mp3"),
          wordId: 33,
        },
        {
          title: " 31",
          src: require("../assets/ALexAudioFiles/41.mp3"),
          wordId: 41,
        },
        {
          title: " 32",
          src: require("../assets/ALexAudioFiles/53.mp3"),
          wordId: 53,
        },
        {
          title: " 33",
          src: require("../assets/ALexAudioFiles/24.mp3"),
          wordId: 24,
        },
        {
          title: " 34",
          src: require("../assets/ALexAudioFiles/16.mp3"),
          wordId: 16,
        },
        {
          title: " 35",
          src: require("../assets/ALexAudioFiles/114.mp3"),
          wordId: 114,
        },
        {
          title: " 36",
          src: require("../assets/ALexAudioFiles/34.mp3"),
          wordId: 34,
        },
        {
          title: " 37",
          src: require("../assets/ALexAudioFiles/14.mp3"),
          wordId: 14,
        },
        {
          title: " 38",
          src: require("../assets/ALexAudioFiles/17.mp3"),
          wordId: 17,
        },
        {
          title: " 39",
          src: require("../assets/ALexAudioFiles/12.mp3"),
          wordId: 12,
        },
        {
          title: " 40",
          src: require("../assets/ALexAudioFiles/93.mp3"),
          wordId: 93,
        },
        {
          title: " 41",
          src: require("../assets/ALexAudioFiles/72.mp3"),
          wordId: 72,
        },
        {
          title: " 42",
          src: require("../assets/ALexAudioFiles/47.mp3"),
          wordId: 47,
        },
        {
          title: " 43",
          src: require("../assets/ALexAudioFiles/95.mp3"),
          wordId: 95,
        },
        {
          title: " 44",
          src: require("../assets/ALexAudioFiles/92.mp3"),
          wordId: 92,
        },
        {
          title: " 45",
          src: require("../assets/ALexAudioFiles/71.mp3"),
          wordId: 71,
        },
        {
          title: " 46",
          src: require("../assets/ALexAudioFiles/29.mp3"),
          wordId: 29,
        },
        {
          title: " 47",
          src: require("../assets/ALexAudioFiles/2.mp3"),
          wordId: 2,
        },
        {
          title: " 48",
          src: require("../assets/ALexAudioFiles/31.mp3"),
          wordId: 31,
        },
        {
          title: " 49",
          src: require("../assets/ALexAudioFiles/51.mp3"),
          wordId: 51,
        },
        {
          title: " 50",
          src: require("../assets/ALexAudioFiles/4.mp3"),
          wordId: 4,
        },
        {
          title: " 51",
          src: require("../assets/ALexAudioFiles/35.mp3"),
          wordId: 35,
        },
        {
          title: " 52",
          src: require("../assets/ALexAudioFiles/100.mp3"),
          wordId: 100,
        },
        {
          title: " 53",
          src: require("../assets/ALexAudioFiles/55.mp3"),
          wordId: 55,
        },
        {
          title: " 54",
          src: require("../assets/ALexAudioFiles/69.mp3"),
          wordId: 69,
        },
        {
          title: " 55",
          src: require("../assets/ALexAudioFiles/82.mp3"),
          wordId: 82,
        },
        {
          title: " 56",
          src: require("../assets/ALexAudioFiles/103.mp3"),
          wordId: 103,
        },
        {
          title: " 57",
          src: require("../assets/ALexAudioFiles/96.mp3"),
          wordId: 96,
        },
        {
          title: " 58",
          src: require("../assets/ALexAudioFiles/25.mp3"),
          wordId: 25,
        },
        {
          title: " 59",
          src: require("../assets/ALexAudioFiles/76.mp3"),
          wordId: 76,
        },
        {
          title: " 60",
          src: require("../assets/ALexAudioFiles/9.mp3"),
          wordId: 9,
        },
        {
          title: " 61",
          src: require("../assets/ALexAudioFiles/23.mp3"),
          wordId: 23,
        },
        {
          title: " 62",
          src: require("../assets/ALexAudioFiles/88.mp3"),
          wordId: 88,
        },
        {
          title: " 63",
          src: require("../assets/ALexAudioFiles/57.mp3"),
          wordId: 57,
        },
        {
          title: " 64",
          src: require("../assets/ALexAudioFiles/70.mp3"),
          wordId: 70,
        },
        {
          title: " 65",
          src: require("../assets/ALexAudioFiles/5.mp3"),
          wordId: 5,
        },
        {
          title: " 66",
          src: require("../assets/ALexAudioFiles/32.mp3"),
          wordId: 32,
        },
        {
          title: " 67",
          src: require("../assets/ALexAudioFiles/94.mp3"),
          wordId: 94,
        },
        {
          title: " 68",
          src: require("../assets/ALexAudioFiles/99.mp3"),
          wordId: 99,
        },
        {
          title: " 69",
          src: require("../assets/ALexAudioFiles/52.mp3"),
          wordId: 52,
        },
        {
          title: " 70",
          src: require("../assets/ALexAudioFiles/78.mp3"),
          wordId: 78,
        },
        {
          title: " 71",
          src: require("../assets/ALexAudioFiles/27.mp3"),
          wordId: 27,
        },
        {
          title: " 72",
          src: require("../assets/ALexAudioFiles/60.mp3"),
          wordId: 60,
        },
        {
          title: " 73",
          src: require("../assets/ALexAudioFiles/90.mp3"),
          wordId: 90,
        },
        {
          title: " 74",
          src: require("../assets/ALexAudioFiles/120.mp3"),
          wordId: 120,
        },
        {
          title: " 75",
          src: require("../assets/ALexAudioFiles/11.mp3"),
          wordId: 11,
        },
        {
          title: " 76",
          src: require("../assets/ALexAudioFiles/58.mp3"),
          wordId: 58,
        },
        {
          title: " 77",
          src: require("../assets/ALexAudioFiles/107.mp3"),
          wordId: 107,
        },
        {
          title: " 78",
          src: require("../assets/ALexAudioFiles/42.mp3"),
          wordId: 42,
        },
        {
          title: " 79",
          src: require("../assets/ALexAudioFiles/113.mp3"),
          wordId: 113,
        },
        {
          title: " 80",
          src: require("../assets/ALexAudioFiles/108.mp3"),
          wordId: 108,
        },
        {
          title: " 81",
          src: require("../assets/ALexAudioFiles/3.mp3"),
          wordId: 3,
        },
        {
          title: " 82",
          src: require("../assets/ALexAudioFiles/8.mp3"),
          wordId: 8,
        },
        {
          title: " 83",
          src: require("../assets/ALexAudioFiles/38.mp3"),
          wordId: 38,
        },
        {
          title: " 84",
          src: require("../assets/ALexAudioFiles/87.mp3"),
          wordId: 87,
        },
        {
          title: " 85",
          src: require("../assets/ALexAudioFiles/22.mp3"),
          wordId: 22,
        },
        {
          title: " 86",
          src: require("../assets/ALexAudioFiles/112.mp3"),
          wordId: 112,
        },
        {
          title: " 87",
          src: require("../assets/ALexAudioFiles/102.mp3"),
          wordId: 102,
        },
        {
          title: " 88",
          src: require("../assets/ALexAudioFiles/101.mp3"),
          wordId: 101,
        },
        {
          title: " 89",
          src: require("../assets/ALexAudioFiles/86.mp3"),
          wordId: 86,
        },
        {
          title: " 90",
          src: require("../assets/ALexAudioFiles/106.mp3"),
          wordId: 106,
        },
        {
          title: " 91",
          src: require("../assets/ALexAudioFiles/54.mp3"),
          wordId: 54,
        },
        {
          title: " 92",
          src: require("../assets/ALexAudioFiles/104.mp3"),
          wordId: 104,
        },
        {
          title: " 93",
          src: require("../assets/ALexAudioFiles/117.mp3"),
          wordId: 117,
        },
        {
          title: " 94",
          src: require("../assets/ALexAudioFiles/20.mp3"),
          wordId: 20,
        },
        {
          title: " 95",
          src: require("../assets/ALexAudioFiles/28.mp3"),
          wordId: 28,
        },
        {
          title: " 96",
          src: require("../assets/ALexAudioFiles/40.mp3"),
          wordId: 40,
        },
        {
          title: " 97",
          src: require("../assets/ALexAudioFiles/79.mp3"),
          wordId: 79,
        },
        {
          title: " 98",
          src: require("../assets/ALexAudioFiles/118.mp3"),
          wordId: 118,
        },
        {
          title: " 99",
          src: require("../assets/ALexAudioFiles/46.mp3"),
          wordId: 46,
        },
        {
          title: " 100",
          src: require("../assets/ALexAudioFiles/37.mp3"),
          wordId: 37,
        },
        {
          title: " 101",
          src: require("../assets/ALexAudioFiles/105.mp3"),
          wordId: 105,
        },
        {
          title: " 102",
          src: require("../assets/ALexAudioFiles/48.mp3"),
          wordId: 48,
        },
        {
          title: " 103",
          src: require("../assets/ALexAudioFiles/61.mp3"),
          wordId: 61,
        },
        {
          title: " 104",
          src: require("../assets/ALexAudioFiles/67.mp3"),
          wordId: 67,
        },
        {
          title: " 105",
          src: require("../assets/ALexAudioFiles/111.mp3"),
          wordId: 111,
        },
        {
          title: " 106",
          src: require("../assets/ALexAudioFiles/68.mp3"),
          wordId: 68,
        },
        {
          title: " 107",
          src: require("../assets/ALexAudioFiles/75.mp3"),
          wordId: 75,
        },
        {
          title: " 108",
          src: require("../assets/ALexAudioFiles/74.mp3"),
          wordId: 74,
        },
        {
          title: " 109",
          src: require("../assets/ALexAudioFiles/39.mp3"),
          wordId: 39,
        },
        {
          title: " 110",
          src: require("../assets/ALexAudioFiles/44.mp3"),
          wordId: 44,
        },
        {
          title: " 111",
          src: require("../assets/ALexAudioFiles/85.mp3"),
          wordId: 85,
        },
        {
          title: " 112",
          src: require("../assets/ALexAudioFiles/59.mp3"),
          wordId: 59,
        },
        {
          title: " 113",
          src: require("../assets/ALexAudioFiles/115.mp3"),
          wordId: 115,
        },
        {
          title: " 114",
          src: require("../assets/ALexAudioFiles/84.mp3"),
          wordId: 84,
        },
        {
          title: " 115",
          src: require("../assets/ALexAudioFiles/110.mp3"),
          wordId: 110,
        },
        {
          title: " 116",
          src: require("../assets/ALexAudioFiles/13.mp3"),
          wordId: 13,
        },
        {
          title: " 117",
          src: require("../assets/ALexAudioFiles/109.mp3"),
          wordId: 109,
        },
        {
          title: " 118",
          src: require("../assets/ALexAudioFiles/81.mp3"),
          wordId: 81,
        },
        {
          title: " 119",
          src: require("../assets/ALexAudioFiles/73.mp3"),
          wordId: 73,
        },
        {
          title: " 120",
          src: require("../assets/ALexAudioFiles/62.mp3"),
          wordId: 62,
        },
      ],

      player: new Audio(),

      trakingData: [],
    };
  },

  methods: {
    thankYou() {
      this.$router.push({ name: "ALexFinish" });
    },
    play(audio) {
      if (typeof audio.src != "undefined") {
        this.current = audio;
        this.player.src = this.current.src;
      }
      this.player.play();
    },

    yes() {
      this.index++;
      if (this.index == 120) {
        this.$router.push({ name: "ALexFinish" });
      }
      this.current = this.audios[this.index];
      this.play(this.current);
      this.trakingData.push({
        studentID: this.$store.state.studentID,
        word: this.current.wordId,
        yes: true,
        no: false,
      });
      this.submitData();
      console.log(this.trakingData[this.trakingData.length - 1]);
    },

    no() {
      this.index++;
      if (this.index == 120) {
        this.$router.push({ name: "ALexFinish" });
      }
      this.current = this.audios[this.index];
      this.play(this.current);
      this.trakingData.push({
        studentID: this.$store.state.studentID,
        word: this.current.wordId,
        yes: false,
        no: true,
      });
      this.submitData();
      console.log(this.trakingData[this.trakingData.length - 1]);
    },
    repeat() {
      const rept = this.audios[this.index] - 1;
      this.play(rept);
    },

    submitData() {
      axios
        .post("api/alex", this.trakingData[this.trakingData.length - 1])
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
.play {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0px 15px;
  border-radius: 6px;
  color: #fff;
  background-color: gray;
}

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
