<template>
  <v-simple-table dark dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th :style="tableStyle">{{ labels.name }}</th>
          <th :style="tableStyle">{{ labels.vendor }}</th>
          <th :style="tableStyle">{{ labels.mbAvg }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in lootLog" :key="item.id">
          <td :style="tableStyle" @click="openLink(item.link)">
            {{ item.itemName }}
          </td>
          <td :style="tableStyle">{{ item.vendorPrice }}</td>
          <td :style="tableStyle">{{ item.marketBoardPrice }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "Price",
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (vm.$store.getters.haveLootData) {
        next();
      } else {
        next("/");
      }
    });
  },
  methods: {
    openLink(link) {
      window.open(link, "_blank");
    }
  },
  data() {
    return {
      labels: {
        name: this.$t("table.name"),
        vendor: this.$t("table.vendor"),
        mbAvg: this.$t("table.mb-average")
      }
    };
  },
  computed: {
    lootLog() {
      return this.$store.state.lootData.lootLog;
    },
    tableStyle() {
      return {
        fontSize: "1.2rem",
        padding: "0 0 0 0.5em"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.lootLog {
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

<style scoped>
div >>> .v-data-table__wrapper {
  background-color: #1e1e1e;
}
</style>
