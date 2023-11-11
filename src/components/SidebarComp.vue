<template>
  <NavigationComp v-model="drawer" @contactemit="toggleContactDialog" />

  <sidebar-right-comp v-model="drawerRight" @itememit="getItemId"/>

  <v-app-bar color="#5C3D2E" dark :style="{ zIndex: 1 }">
    <v-app-bar-nav-icon @click="toggleNav()" fixed>
    </v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-app-bar-nav-icon @click="toggleRightNav()" fixed>
    </v-app-bar-nav-icon>
  </v-app-bar>

  <v-main style="margin-bottom: 150px;">
    <v-container style="width: 80%;">
      <v-row>

        <v-col>
          <router-view style="border: 5px black solid; background-color: #B85C38; color: black; padding: 20px;">
          </router-view>
        </v-col>

      </v-row>

    </v-container>
  </v-main>
  <footer-comp />

  <ContactmeComp ref="contactMeDialog"></ContactmeComp>
</template>

<script>
import NavigationComp from './NavigationComp.vue'
import ContactmeComp from './ContactmeComp.vue';
import FooterComp from './FooterComp.vue';
import SidebarRightComp from './SidebarRightComp.vue';


export default {
  data() {
    return {
      drawer: true,
      rail: true,
      drawerRight: true,
      contactMeToggle: false
    };
  },
  components: {
    SidebarRightComp, FooterComp, ContactmeComp,
    NavigationComp,
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
    getItemId(itemId){
      console.log(itemId);
      this.$router.push({name: 'article', params: { itemId }});
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