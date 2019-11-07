<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            Build-a-Bot
          </li>
        </ul>
      </nav>
    </header>
    <main>
    <router-view />
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>
<style >
.robot-name {color: red;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
</style>
