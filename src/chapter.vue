<template>
<el-card shadow="never" :body-style='{padding: 0, height: "100%"}'>
  <div slot="header" class="header">
    <span>霸道总裁爱上我</span>
  </div>
  <div class="body">
    <el-row>
      <el-menu>
        <el-submenu index="1">
          <template slot="title">第一卷：必须分手</template>
          <el-menu-item index="1-1">第一章 我们分手吧</el-menu-item>
          <el-menu-item index="1-2">第二章 一个误会</el-menu-item>
          <el-menu-item index="1-3">第三章 把经理揍了</el-menu-item>
          <el-menu-item index="1-4">第四章 职位晋升</el-menu-item>
          <el-menu-item index="1-5">第五章 和初恋告别</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">第二卷：必须分手</template>
          <el-menu-item index="2-1">第一章 我们分手吧</el-menu-item>
          <el-menu-item index="2-2">第二章 一个误会</el-menu-item>
          <el-menu-item index="2-3">第三章 把经理揍了</el-menu-item>
          <el-menu-item index="2-4">第四章 职位晋升</el-menu-item>
          <el-menu-item index="2-5">第五章 和初恋告别</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">第三卷：必须分手</template>
          <el-menu-item index="3-1">第一章 我们分手吧</el-menu-item>
          <el-menu-item index="3-2">第二章 一个误会</el-menu-item>
          <el-menu-item index="3-3">第三章 把经理揍了</el-menu-item>
          <el-menu-item index="3-4">第四章 职位晋升</el-menu-item>
          <el-menu-item index="3-5">第五章 和初恋告别</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-row>
  </div>
</el-card>
</template>

<script>
export default {
  name: "Chapter"
}
</script>

<style scoped>
.el-card {
  padding: 0;
  height: 100%;
}
.body {
  height: 100%;
}
.header {
  line-height: 48px;
}
.el-submenu {
  text-align: left;
}
</style>
