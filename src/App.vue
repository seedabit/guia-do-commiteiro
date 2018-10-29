<template>
  <v-app>
    <v-navigation-drawer
      persistent
      clipped
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-content>
            <router-link :to="item.path">
              <v-list-tile-title v-text="item.name"></v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar
      app
      clipped-left
      color="primary"
      dark
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>

      <router-view></router-view>

    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; <a href="http://www.seedabit.org.br" target="_blank">Seed a Bit Tecnologia</a> {{ currentYear }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      fixed: false,
      items: [],
      right: true,
      title: 'Guia do Commiteiro'
    }
  },
  computed: {
    currentYear () {
      var currentYear = new Date().getFullYear()
      return currentYear
    }
  },
  methods: {
    fillMenu: function () {
      this.$router.options.routes.forEach(route => {
        this.items.push({
          name: route.name,
          path: route.path
        })
      })
    }
  },
  created () {
    this.fillMenu()
  },
  name: 'App'
}
</script>

<style>
a {
  text-decoration: none;
}
</style>

