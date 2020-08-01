<template>
  <v-menu bottom left class="prices-menu">
    <template v-slot:activator="{ on }">
      <div
        class="prices-menu-icon"
        :style="pricesMenuIconStyle"
        v-html="pricesMenuIcon"
        v-on="on"
      ></div>
    </template>
    <v-list class="prices-menu-style" :style="pricesMenuStyle">
      <v-list-item
        class="prices-menu-item"
        v-for="(menuItem, i) in menuItems"
        :key="i"
        @click="selectMenuItem(menuItem)"
      >
        <v-list-item-title :style="pricesMenuStyle">{{
          menuItem.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { AddTestPriceData } from "../../../lib/priceData";

export default {
  name: "PriceMenu",
  computed: {
    menuItems() {
      return [
        { title: this.$t("actions.view-loot"), path: "/prices" },
        { title: this.$t("actions.reset-loot"), path: "/" },
        {
          title: this.$t("actions.load-sample-data"),
          action: "loadSampleData",
          path: "/prices"
        }
      ];
    },
    pricesMenuIcon() {
      return this.$store.getters.menuIcon;
    },
    pricesMenuStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        color: this.$store.state.settings.fontColor
      };
    },
    pricesMenuIconStyle() {
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
      AddTestPriceData(this);
    }
  }
};
</script>

<style scoped lang="scss">
.prices-menu-style {
  @extend .default-border;
  @extend .no-spacing;
  padding: 0.8em 1.4em 0.8em 1.4em;
  font-size: 0.8rem;
}
.prices-menu-icon {
  width: 1.4em;
}
.prices-menu-item {
  @extend .no-spacing;
  min-height: 2em;
}
</style>
