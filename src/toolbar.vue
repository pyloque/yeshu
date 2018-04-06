<template>
	<v-toolbar app>
    <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
    <v-spacer></v-spacer>
		<v-tooltip bottom>
    	<v-btn icon fab slot="activator">
      	<v-icon>lock</v-icon>
    	</v-btn>
			<span>锁定</span>
		</v-tooltip>
		<v-tooltip bottom>
    	<v-btn icon fab slot="activator">
      	<v-icon>content_cut</v-icon>
    	</v-btn>
			<span>拼字</span>
		</v-tooltip>
		<v-tooltip bottom>
    	<v-btn icon fab slot="activator">
      	<v-icon>view_module</v-icon>
    	</v-btn>
			<span>大纲</span>
		</v-tooltip>
		<v-tooltip bottom>
    	<v-btn icon fab slot="activator">
      	<v-icon>account_box</v-icon>
    	</v-btn>
			<span>起名</span>
		</v-tooltip>
		<v-tooltip bottom>
    	<v-btn icon fab slot="activator">
      	<v-icon>sort_by_alpha</v-icon>
    	</v-btn>
			<span>字典</span>
		</v-tooltip>
		<v-tooltip bottom>
    	<v-btn icon fab slot="activator">
      	<v-icon>security</v-icon>
    	</v-btn>
			<span>查敏感</span>
		</v-tooltip>
		<v-tooltip bottom>
    	<v-btn icon fab slot="activator">
      	<v-icon>file_upload</v-icon>
    	</v-btn>
			<span>导入</span>
		</v-tooltip>
		<v-tooltip bottom>
    	<v-btn icon fab slot="activator">
      	<v-icon>file_download</v-icon>
    	</v-btn>
			<span>导出</span>
		</v-tooltip>
		<v-tooltip bottom v-if='!dark'>
    	<v-btn icon fab slot="activator" @click="toggleDark">
      	<v-icon>wb_incandescent</v-icon>
    	</v-btn>
			<span>夜间</span>
		</v-tooltip>
		<v-tooltip bottom v-if='dark'>
    	<v-btn icon fab slot="activator" @click="toggleDark">
      	<v-icon>wb_sunny</v-icon>
    	</v-btn>
			<span>白天</span>
		</v-tooltip>
		<v-tooltip bottom>
    	<v-btn icon fab slot="activator">
      	<v-icon>report</v-icon>
    	</v-btn>
			<span>反馈</span>
		</v-tooltip>
		<v-tooltip bottom>
    	<v-btn icon fab slot="activator">
      	<v-icon>settings</v-icon>
    	</v-btn>
			<span>设置</span>
		</v-tooltip>
    <v-spacer/>
		<v-avatar fab>
			<img src="./assets/minecraft.png"/>
		</v-avatar>
	</v-toolbar>
</template>
<script>
export default {
  name: "Toolbar",
  props: ["dark", "drawer"],
  methods: {
    toggleDark() {
      this.$emit('update:dark', !this.dark)
    },
    toggleDrawer() {
      this.$emit('update:drawer', !this.drawer)
    }
  }
}
</script>
