<template>
<v-app :dark="dark">
	<Toolbar :dark.sync="dark" :drawer.sync="drawer"/>
	<Nagivator :drawer="drawer"/>
	<Central/>
</v-app>
</template>
<script>
import Toolbar from './toolbar'
import Nagivator from './nagivator'
import Central from './central'

export default {
	name: "app",
	components: {
		Toolbar,
		Nagivator,
		Central
	},
	data() {
		return {
			dark: false,
			drawer: true,
		}
	},
}
</script>
