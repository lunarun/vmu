<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*,
*:before,
*:after {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html {
  font-size: 144PX;
}

body {
  user-select: none;
  font-size: .32rem;
  background-color: #f5f5f9;
}

*[contenteditable] {
  -webkit-user-select: auto !important;
}

*:focus {
  outline: none;
}

a {
  background: transparent;
  text-decoration: none;
  outline: none;
}
</style>
