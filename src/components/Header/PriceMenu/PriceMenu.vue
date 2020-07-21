<template>
  <v-menu bottom left class="lootLog-menu">
    <template v-slot:activator="{ on }">
      <div
        class="lootLog-menu-icon"
        :style="lootLogMenuIconStyle"
        v-html="lootLogMenuIcon"
        v-on="on"
      ></div>
    </template>
    <v-list class="lootLog-menu-style" :style="lootLogMenuStyle">
      <v-list-item
        class="lootLog-menu-item"
        v-for="(menuItem, i) in menuItems"
        :key="i"
        @click="selectMenuItem(menuItem)"
      >
        <v-list-item-title :style="lootLogMenuStyle">{{
          menuItem.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { AddTestLootData } from "../../../lib/lootData";

export default {
  name: "PriceMenu",
  computed: {
    menuItems() {
      return [
        { title: this.$t("actions.view-loot"), path: "/price" },
        { title: this.$t("actions.reset-loot"), path: "/" },
        {
          title: this.$t("actions.load-sample-data"),
          action: "loadSampleData",
          path: "/price"
        }
      ];
    },
    lootLogMenuIcon() {
      return this.$store.getters.menuIcon;
    },
    lootLogMenuStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        color: this.$store.state.settings.fontColor
      };
    },
    lootLogMenuIconStyle() {
      return {
        fill: this.$store.state.settings.fontColor
      };
    }
  },
  methods: {
    selectMenuItem(menuItem) {
      if (menuItem.action) {
        eval("this." + menuItem.action + "()");
      }
      if (menuItem.path) {
        this.$store.commit("update", { collapsed: false });
        this.$router.push(menuItem.path);
      }
    },
    loadSampleData() {
      AddTestLootData(this);
    }
  }
};
</script>

<style scoped lang="scss">
.lootLog-menu-style {
  @extend .no-spacing;
  padding: 0.8em 1.4em 0.8em 1.4em;
  font-size: 0.8rem;
}
.lootLog-menu-icon {
  width: 1.4em;
}
.lootLog-menu-item {
  @extend .no-spacing;
  min-height: 2em;
}
</style>
