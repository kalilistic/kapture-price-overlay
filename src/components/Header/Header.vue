<template>
  <div :style="headerStyle">
    <v-content class="header-container">
      <v-layout>
        <Title />
        <v-row>
          <v-col class="column header-menus">
            <Toggle />
            <SettingsMenu />
            <PriceMenu />
          </v-col>
        </v-row>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
import Title from "./Title/Title";
import SettingsMenu from "./SettingsMenu/SettingsMenu";
import PriceMenu from "./PriceMenu/PriceMenu";
import Toggle from "./Toggle/Toggle";
export default {
  name: "Header",
  components: {
    Toggle,
    PriceMenu,
    Title,
    SettingsMenu
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor
      };
    }
  }
};
</script>

<style scoped lang="scss">
.header-container {
  @extend .default-border;
}
.column {
  @extend .no-spacing;
}
.header-menus {
  @extend .align-right;
  margin-right: 1.5em;
  margin-top: 0.4em;
}
</style>
