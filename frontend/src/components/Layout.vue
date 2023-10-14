<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <div class="header_container container">
        <div class="header_left">
          <router-link to='/home'>Home</router-link>
          <router-link to='/main'>Main</router-link>
        </div>
        <div class="header_right"></div>
      </div>
    </header>

    <main class="page">
      <div class="main_container container">
        <router-view/>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        &copy; amoCRM app 2023
      </div>
    </footer>
  </div>
</template>

<style scoped>
.header {
  height: 50px;
  width: 100%;
  position: fixed;
  background-color: var(--primary-color);
  box-shadow: 0 0 7px 3px rgba(0, 0, 0, .1);
}
.header_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
}
.header_left > *:not(:last-child) {
  padding-right: 20px;
}
.header_right > *:not(:last-child) {
  padding-right: 20px;
}
.signin_link {
  color: white;
  cursor: pointer;
}
.wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
}
.page {
  flex: auto;
  padding-top: 80px;
  display: flex;
}
.container {
  max-width: 800px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: content-box;
}
.main_container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.footer {
  text-align: center;
  padding: 10px 0;
}
</style>
