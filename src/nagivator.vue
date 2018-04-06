<template>
<v-navigation-drawer app v-model="visible">
  <v-toolbar>
	  <v-avatar>
	     <img src="./assets/logo.png"/>
	  </v-avatar>
    <v-list>
      <v-list-tile>
        <v-list-tile-title class="title text-xs-center">
          霸道总裁求抱抱
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-toolbar>
  <v-list>
    <v-list-group v-for="(volumn, vi) in volumns" :key="vi">
      <v-list-tile slot="activator">
        <v-list-tile-content>
          <v-list-tile-title>第{{vi+1|zh}}卷 {{volumn}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-for="(chapter, ci) in chapters" :key="ci">
        <v-list-tile-content>
          <v-list-tile-title class="pl-4">第{{ci+1|zh}}章 {{chapter}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>
  </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
  name: "Nagivator",
  props: ["drawer"],
  mounted() {
    this.visible = this.drawer;
  },
  watch: {
    drawer() {
      this.visible = this.drawer;
    }
  },
  data() {
    return {
      visible: true,
      volumns: ["意外", "来日方长", "结婚", "不见不散", "骗局", "两全其美", "剑走偏锋"],
      chapters: ["男人也可以", "怎么又是他", "可怜的垃圾桶", "我的女人", "心里一烫", "这是最后一次"]
    }
  },
}
</script>
