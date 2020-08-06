<template>
  <div class="container">
    <div class="content">
      <v-container class="content-container">
        <v-menu min-width="10em">
          <template v-slot:activator="{ on }">
            <v-layout row v-on="on">
              <v-flex class="info-container">
                <v-layout column>
                  <v-flex class="left-info">
                    {{ price.itemName }}
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex class="info-container">
                <v-layout column class="right-info">
                  <v-flex>
                    {{ price.marketPriceDisplay }}
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </template>
          <v-list class="price-details-style" :style="priceDetailsStyle">
            <v-list-item
              class="price-details-item"
              v-for="(priceDetailItem, i) in priceDetailsItems"
              :key="i"
            >
              <v-list-item-title :style="priceDetailsItemStyle">
                <v-row class="row">
                  <v-col class="column detail-title">
                    {{ priceDetailItem.title }}
                  </v-col>
                  <v-col class="column detail-value">
                    {{ priceDetailItem.value }}
                  </v-col>
                </v-row>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Price",
  props: ["price"],
  computed: {
    priceDetailsItems() {
      return [
        {
          title: this.price.itemName
        },
        {
          title: this.$t("price.last-updated"),
          value: this.price.lastUploadTime
        },
        {
          title: this.$t("price.last-updated-days"),
          value: this.price.daysAgo
        },
        {
          title: this.$t("price.vendor-price"),
          value: this.price.vendorPrice
        },
        {
          title: this.$t("price.market-price"),
          value: this.price.marketPriceActual
        },
        {
          title: this.$t("price.daily-sales"),
          value: this.price.saleVelocity
        },
        {
          title: this.$t("price.listing-count"),
          value: this.price.listingsCount
        }
      ];
    },
    priceDetailsStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        color: this.$store.state.settings.fontColor
      };
    },
    priceDetailsItemStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        color: this.$store.state.settings.fontColor
      };
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  @extend .no-spacing;
  display: grid;
  max-width: none !important;
}
.content {
  grid-area: 1 / 1;
  z-index: 1;
}
.content-container {
  padding-left: 0.2em;
  padding-right: 0.2em;
}
.left-info {
  @extend .label;
}
.right-info {
  @extend .label;
  margin: 0 1.4em 0 0;
  text-align: right;
}
.info-container {
  display: flex;
  align-items: center;
}
.price-details-style {
  @extend .default-border;
  @extend .no-spacing;
  padding: 0.5em;
  font-size: 0.8rem;
  min-width: 21em;
}
.price-details-item {
  @extend .no-spacing;
  min-height: 1.8em;
}
.detail-value {
  @extend .align-right;
  margin-right: 1.4em;
}
.v-list-item:first-child {
  font-weight: bold;
}
</style>
