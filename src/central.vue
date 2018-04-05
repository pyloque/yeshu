<template>
  <el-tabs>
    <el-tab-pane label="我们分手吧" closable>
      <el-card shadow="never" :body-style='{padding: 0, border: 0}'>
        <div slot="header">
          <span>第一卷必须分手 * 第一章我们分手吧</span>
        </div>
        <quill-editor id="editor">
        </quill-editor>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="一个误会" closable>
      <el-card shadow="never" :body-style='{padding: 0, border: 0}'>
        <div slot="header">
          <span>第一卷必须分手 * 第一章一个误会</span>
        </div>
        <quill-editor>
        </quill-editor>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="把经理揍了" closable>
      <el-card shadow="never" :body-style='{padding: 0, border: 0}'>
        <div slot="header">
          <span>第一卷必须分手 * 第一章把经理揍了</span>
        </div>
        <quill-editor>
        </quill-editor>
      </el-card>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import screenfull from 'screenfull';

export default {
  name: "Central",
  data() {
    return {
      fullscreen: false,
    }
  },
  mounted() {
    var btnsf = document.querySelector('.ql-screenfull');
    btnsf.addEventListener('click', () => {
      if (screenfull.enabled) {
        if(!this.fullscreen) {
          screenfull.request(document.getElementById("editor"));
          this.fullscreen = true;
        } else {
          screenfull.exit();
          this.fullscreen = false;
        }
      }
    });
  }
}
</script>

<style scoped>
.el-tab-pane {
  text-align: left;
}
</style>
