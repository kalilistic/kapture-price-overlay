<template>
  <v-content class="default" :style="defaultStyle">
    <Splash class="default-section" v-show="showSplash" />
    <Waiting class="default-section" />
  </v-content>
</template>

<script>
import Splash from "./Splash/Splash";
import SplashMessage from "../../constants/Splash";
import Waiting from "./Waiting/Waiting";
export default {
  name: "Default",
  components: { Waiting, Splash },
  computed: {
    defaultStyle() {
      return {
        display: this.$store.state.settings._mainDisplay,
        backgroundColor: this.$store.state.settings.backgroundColor
      };
    },
    showSplash() {
      if (
        this.$store.state.settings.alwaysShowSplash ||
        this.$store.state.settings.latestSplashSeen < SplashMessage.version
      ) {
        this.updateSplash();
        return true;
      }
      return false;
    }
  },
  methods: {
    updateSplash() {
      this.$store.commit("update", {
        latestSplashSeen: SplashMessage.version
      });
    }
  },
  mounted() {
    this.$store.commit("resetPriceData");
  }
};
</script>

<style scoped lang="scss">
.default {
  @extend .default-border;
  @extend .align-center;
  @extend .no-line-break;
  border-top: 0;
}
.default-section {
  margin-bottom: 1.5em;
}
</style>
