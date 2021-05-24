<template>
  <!--
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/instruction">instruction</router-link> |
    <router-link to="/experiment">Exp</router-link> |
    <router-link to="/finish">Finish</router-link>
  </div>
  -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#logo: {
  height: 9rem;
}

#instruction {
  font-size: 24px;
}
.marginTop7 {
  margin-top: 7.5rem !important;
}

.marginTop9 {
  margin-top: 9rem !important;
}

.marginTop3 {
  margin-top: 3rem;
}
</style>
