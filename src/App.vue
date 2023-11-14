
<template>
  <v-app id="inspire">
    <Dashboard />
  </v-app>

  <ContentModalComp ref="ContentModal" />
  <LoaderComp ref="Loader"></LoaderComp>
  <NotifyComp ref="Notify"></NotifyComp>
</template>

<!-- <script setup>
import ContentModalComp from './components/ContentModalComp.vue';
import SidebarComp from './components/SidebarComp.vue';

</script> -->

<script>
import ContentModalComp from './components/ContentModalComp.vue';
import LoaderComp from './components/LoaderComp.vue';
import NotifyComp from './components/NotifyComp.vue';
import SidebarComp from './components/SidebarComp.vue';
import Dashboard from './views/Dashboard.vue';
import HomeView from './views/HomeView.vue';

export default {
  components: {
    ContentModalComp,
    // SidebarComp,
    LoaderComp,
    NotifyComp,
    Dashboard
  },
  mounted() {
    if (this.$root !== null) {
      this.$root.ContentModal = this.$refs.ContentModal;
      this.$root.Loader = this.$refs.Loader;
      this.$root.Notify = this.$refs.Notify;
    }
  }
}
</script>

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
