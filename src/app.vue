<template>
<v-app dark>
  <v-navigation-drawer fixed>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-content>
    <v-container fluid>
      <v-tabs centered>
        <v-tab v-for="n in 3" :key="n">
          Item {{ n }}
        </v-tab>
      </v-tabs>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>
<script>
export default {
	name: "app",
  data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'dashboard' },
          { title: 'Account', icon: 'account_box' },
          { title: 'Admin', icon: 'gavel' }
        ]
      }
    }
}
</script>
