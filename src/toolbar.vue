<template>
  	<el-row type="flex">
      <el-col :span="4">
        <img src="./assets/logo.png" class="logo"/>
      </el-col>
      <el-col :span="16">
			  <el-button size="mini" round>锁定</el-button>
			  <el-button size="mini" round>拼字</el-button>
			  <el-button size="mini" round>大纲</el-button>
			  <el-button size="mini" round>起名</el-button>
			  <el-button size="mini" round>词典</el-button>
			  <el-button size="mini" round>查敏感</el-button>
			  <el-button size="mini" round>导入</el-button>
			  <el-button size="mini" round>导出</el-button>
			  <el-button size="mini" round>夜间</el-button>
			  <el-button size="mini" round>反馈</el-button>
			  <el-button size="mini" round>设置</el-button>
      </el-col>
      <el-col :span="3">
      </el-col>
      <el-col :span="1">
        <img src="./assets/minecraft.png" class="avatar"/>
      </el-col>
		</el-row>
</template>
<script>
export default {
  name: "Toolbar"
}
</script>

<style scoped>
.logo {
  width: 48px;
}
.avatar {
  width: 48px;
}
</style>
