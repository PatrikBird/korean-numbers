<template>
  <div id="nav">
    <router-link to="/">Ukrainian Numbers</router-link> |
    <router-link to="/insert">Insert a Number</router-link> |
    <router-link to="/random">Excercise: Random Numbers</router-link>
  </div>
  <router-view />
</template>

<style>
body {
  background-color: #2ea2cc;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffd600;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #ffd600;
  font-size: 20px;
  border-bottom: 3px solid transparent;
  text-decoration: none;
}

#nav a:hover {
  border-bottom: 3px solid #ffd600;
}

#nav a.router-link-exact-active {
  color: #ffd600;
  font-weight: bold;
  border-bottom: 3px solid #ffd600;
}
</style>
