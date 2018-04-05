<template>
<el-container>
  <el-header>
		<Toolbar></Toolbar>
	</el-header>
  <el-container>
    <el-aside>
			<Chapter></Chapter>
		</el-aside>
    <el-main>
			<el-row>
				<el-col :span="18">
					<Central></Central>
				</el-col>
				<el-col :span="6">
					<Statis></Statis>
				</el-col>
			</el-row>
		</el-main>
  </el-container>
  <el-footer></el-footer>
</el-container>
</template>
<script>
import Toolbar from "./toolbar"
import Chapter from "./chapter"
import Central from "./central"
import Statis from "./statis"

export default {
	name: "app",
	components: {
		Toolbar,
		Chapter,
		Central,
		Statis
	},
  data () {
       return {
       }
  }
}
</script>

<style scoped>
  .el-header {
    text-align: center;
    line-height: 60px;
  }

	.el-footer {
    text-align: center;
    line-height: 20px;
	}

  .el-aside {
    text-align: center;
		height: 100%;
  }

	.el-main {
		padding-top: 0;
	}
</style>
