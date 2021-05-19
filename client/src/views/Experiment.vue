<template>
  <section class="player marginTop9">
    <h2 class="song-title">
      {{ current.title }} / 40 hello {{ $store.state.studentID }}
    </h2>

    <div class="controls">
      <button class="prev" @click="repeat">Repeat</button>
      <button class="play" v-if="!isPlaying" @click="play">Play</button>
      <button class="pause" v-else @click="pause">Pause</button>
      <button class="next" @click="next">Next</button>
    </div>
  </section>

  <div v-if="index == 39" class="p-col-3 p-offset-9 marginTop3">
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
  name: "Experiment",

  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      audios: [
        {
          title: "1",
          src: require("../assets/AudioFiles/01.mp3"),
        },
        {
          title: "2",
          src: require("../assets/AudioFiles/02.mp3"),
        },
        {
          title: "3",
          src: require("../assets/AudioFiles/03.mp3"),
        },
        {
          title: "4",
          src: require("../assets/AudioFiles/04.mp3"),
        },
        {
          title: "5",
          src: require("../assets/AudioFiles/05.mp3"),
        },
        {
          title: "6",
          src: require("../assets/AudioFiles/06.mp3"),
        },
        {
          title: "7",
          src: require("../assets/AudioFiles/07.mp3"),
        },
        {
          title: "8",
          src: require("../assets/AudioFiles/08.mp3"),
        },
        {
          title: "9",
          src: require("../assets/AudioFiles/09.mp3"),
        },
        {
          title: "10",
          src: require("../assets/AudioFiles/10.mp3"),
        },
        {
          title: "11",
          src: require("../assets/AudioFiles/11.mp3"),
        },
        {
          title: "12",
          src: require("../assets/AudioFiles/12.mp3"),
        },
        {
          title: "13",
          src: require("../assets/AudioFiles/13.mp3"),
        },

        {
          title: "14",
          src: require("../assets/AudioFiles/14.mp3"),
        },
        {
          title: "15",
          src: require("../assets/AudioFiles/15.mp3"),
        },
        {
          title: "16",
          src: require("../assets/AudioFiles/16.mp3"),
        },
        {
          title: "17",
          src: require("../assets/AudioFiles/17.mp3"),
        },
        {
          title: "18",
          src: require("../assets/AudioFiles/18.mp3"),
        },
        {
          title: "19",
          src: require("../assets/AudioFiles/19.mp3"),
        },
        {
          title: "20",
          src: require("../assets/AudioFiles/20.mp3"),
        },
        {
          title: "21",
          src: require("../assets/AudioFiles/21.mp3"),
        },
        {
          title: "22",
          src: require("../assets/AudioFiles/23.mp3"),
        },
        {
          title: "23",
          src: require("../assets/AudioFiles/23.mp3"),
        },
        {
          title: "24",
          src: require("../assets/AudioFiles/24.mp3"),
        },
        {
          title: "25",
          src: require("../assets/AudioFiles/25.mp3"),
        },
        {
          title: "26",
          src: require("../assets/AudioFiles/26.mp3"),
        },
        {
          title: "27",
          src: require("../assets/AudioFiles/27.mp3"),
        },
        {
          title: "28",
          src: require("../assets/AudioFiles/28.mp3"),
        },
        {
          title: "29",
          src: require("../assets/AudioFiles/29.mp3"),
        },
        {
          title: "30",
          src: require("../assets/AudioFiles/30.mp3"),
        },
        {
          title: "31",
          src: require("../assets/AudioFiles/31.mp3"),
        },
        {
          title: "32",
          src: require("../assets/AudioFiles/32.mp3"),
        },
        {
          title: "33",
          src: require("../assets/AudioFiles/33.mp3"),
        },
        {
          title: "34",
          src: require("../assets/AudioFiles/34.mp3"),
        },
        {
          title: "35",
          src: require("../assets/AudioFiles/35.mp3"),
        },
        {
          title: "36",
          src: require("../assets/AudioFiles/36.mp3"),
        },
        {
          title: "37",
          src: require("../assets/AudioFiles/37.mp3"),
        },
        {
          title: "38",
          src: require("../assets/AudioFiles/38.mp3"),
        },
        {
          title: "39",
          src: require("../assets/AudioFiles/39.mp3"),
        },

        {
          title: "40",
          src: require("../assets/AudioFiles/40.mp3"),
        },
      ],
      player: new Audio(),

      trakingData: [],
    };
  },

  methods: {
    thankYou() {
      this.$router.push({ name: "finish" });
    },
    play(audio) {
      if (typeof audio.src != "undefined") {
        this.current = audio;
        this.player.src = this.current.src;
      }
      this.player.play();

      this.isPlaying = true;
      this.trakingData.push({
        studentID: this.$store.state.studentID,
        audio: this.index,
        play: true,
        stop: false,
      });
      this.submitData();
      console.log(this.trakingData[0]);
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.audios.length - 1) {
        this.index = 0;
      }
      this.current = this.audios[this.index];
      this.play(this.current);
    },
    repeat() {
      this.current = this.audios[this.index];
      this.play(this.current);
    },

    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.audios.length - 1;
      }
      this.current = this.audios[this.index];
      this.play(this.current);
    },
    async submitData() {
      await axios
        .post("#/api/activities/", this.trakingData[0])
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
.song-title {
  color: #53565a;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}
.song-title span {
  font-weight: 400;
  font-style: italic;
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
.playlist {
  padding: 0px 30px;
}
.playlist h3 {
  color: #212121;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
}
.playlist .song {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}
.playlist .song:hover {
  color: #ff5858;
}
.playlist .song.playing {
  color: #fff;
  background-image: linear-gradient(to right, #cc2e5d, #ff5858);
}
</style>
