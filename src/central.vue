<template>
<v-content>
  <v-container class="pa-0 ma-0">
  <v-layout>
  <v-flex xs12>
    <v-tabs grow v-model="chapterId">
      <v-tab v-for="(chapter, ci) in editingChapters" :key="ci">
        <v-spacer/>{{chapter}}<v-spacer/><v-btn fab flat small><v-icon>close</v-icon></v-btn>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="chapterId">
      <v-tab-item v-for="(chapter, ci) in editingChapters" :key="ci">
        <v-card>
          <v-card-text>
            <quill-editor :id="'editor-' + ci">
            </quill-editor>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-flex>
  </v-layout>
  </v-container>
</v-content>
</template>

<script>
import screenfull from 'screenfull';

export default {
  name: "Central",
  data() {
    return {
      fullscreen: false,
      chapterId: 0,
      editingChapters: ["男人也可以", "怎么又是他", "可怜的垃圾桶", "我的女人"],
    }
  },
  mounted() {
    var btnsf = document.querySelector('.ql-screenfull');
    btnsf.addEventListener('click', () => {
      if (screenfull.enabled) {
        if(!this.fullscreen) {
          screenfull.request(document.getElementById("editor-"+ this.chapterId));
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
