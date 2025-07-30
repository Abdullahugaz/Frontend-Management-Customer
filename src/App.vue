<template>
  <div id="app">
    <nav class="p-4 bg-gray-100">
      <router-link to="/" class="mr-4 font-bold text-gray-700 hover:text-blue-600" exact>Dashboard</router-link>
      <router-link to="/customers" class="font-bold text-gray-700 hover:text-blue-600">Customers</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
