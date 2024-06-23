<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  font-family: Roboto, sans-serif;
  font-weight: 500;
}

html {
  height: 100vh;
  box-sizing: border-box;
}

body {
  position: relative;
  margin: 0;
  min-height: 100vh;
  padding-bottom: 70px;
  box-sizing: inherit;
}

</style>