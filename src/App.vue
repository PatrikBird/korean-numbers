<template>
  <div id="nav">
    <router-link to="/">Numbers</router-link> |
    <router-link to="/insert">Insert</router-link> |
    <router-link to="/random">Excercise</router-link>
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
  color: #2ea2cc;
  padding: 30px;
  background-color: #ffd600;
}

#nav a {
  color: #2ea2cc;
  font-size: 20px;
  border-bottom: 3px solid transparent;
  text-decoration: none;
}

#nav a:hover {
  border-bottom: 3px solid #ffd600;
}

#nav a.router-link-exact-active {
  color: #2ea2cc;
  font-weight: bold;
  border-bottom: 3px solid #2ea2cc;
}
</style>
