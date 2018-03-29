<template>
<v-app dark>
  <v-navigation-drawer fixed>
	<User/>
	<Shelf/>
  </v-navigation-drawer>
  <v-content>
    <v-container fluid>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>
<script>
import User from './user'
import Shelf from './shelf'

export default {
	name: "app",
	components: {
		User,
		Shelf
	},
  	data () {
        return {
        }
    }
}
</script>
