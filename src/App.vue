<template>
  <div id="nav">
    <router-link to="/">Numbers</router-link> |
    <router-link to="/insert">Insert</router-link> |
    <router-link to="/random">Exercise</router-link>
  </div>
  <router-view />
</template>

<style>
body {
  background-color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

#nav {
  color: #0047a0;
  padding: 30px;
  background-color: #fff;
}

#nav a {
  color: #000;
  font-size: 20px;
  border-bottom: 3px solid transparent;
  text-decoration: none;
}

#nav a:hover {
  border-bottom: 3px solid #0047a0;
}

#nav a.router-link-exact-active {
  color: #0047a0;
  font-weight: bold;
  border-bottom: 3px solid #0047a0;
}
</style>
