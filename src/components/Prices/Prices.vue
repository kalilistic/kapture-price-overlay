<template>
  <v-content class="prices" :style="pricesStyle">
    <Price
      v-for="(price, index) in prices"
      v-bind:price="price"
      v-bind:index="index"
      v-bind:key="index"
    >
    </Price>
  </v-content>
</template>

<script>
import Price from "./Price/Price";

export default {
  name: "Prices",
  components: {
    Price
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (vm.$store.getters.havePriceData) {
        next();
      } else {
        next("/");
      }
    });
  },
  computed: {
    prices() {
      return this.$store.state.priceData.prices;
    },
    pricesStyle() {
      return {
        display: this.$store.state.settings._mainDisplay,
        backgroundColor: this.$store.state.settings.backgroundColor,
        paddingTop: "0.2em"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.prices {
  @extend .default-border;
  border-top: 0;
}
.detail-value {
  @extend .align-right;
  margin-right: 1.4em;
}
.v-list-item:first-child {
  font-weight: bold;
}
</style>
