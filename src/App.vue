<template>
  <v-app>
    <v-app-bar
      absolute
      color="pink lighten-4"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <base-button 
        @click="$router.back()"
        text="назад" 
        v-if="$route.name !== 'patients-tables'"
      />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="$router.push('/')">
            <v-list-item-title>
              Пациенты
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="mt-15 pa-5 d-flex justify-center container">
      <base-notification 
        :text="notificationText" 
        :type="isSuccess"
        v-if="showNotification"
      />
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapState('notifications', ['notificationText', 'isSuccess', 'showNotification'])
  },
}
</script>

<style scoped lang="scss">
.container {
  background: #e2e1e1;
}
</style>
