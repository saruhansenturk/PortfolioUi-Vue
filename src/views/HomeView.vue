<template>
  <div>Homedasin</div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      drawer: true,
      rail: true,
      drawerRight: true,
      contactMeToggle: false
    };
  },
  methods: {

    toggleNav() {
      this.drawer = this.drawer == false;
    },
    toggleRightNav() {
      this.drawerRight = this.drawerRight == false;
    },
    toggleContactDialog(data) {
      this.$refs.contactMeDialog.dialog = data;

    },
    contactMeClk() {
      this.$refs.contactMeDialog.dialog = true;
    },
    getItemId(itemId) {
      console.log(itemId);
      this.$router.push({ name: 'article', params: { itemId } });
    }
  }
}
</script>

<style scoped>
.card-font {
  font-family: "pixels", Arial, sans-serif;
}

.sticky-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.sticky-social {
  position: fixed;
  bottom: 0;
  left: 5;
  right: 5;
}
</style>