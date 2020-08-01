export const priceData = {
  state: {
    prices: []
  },
  mutations: {
    updatePriceData(state, priceData) {
      state.prices.unshift(priceData);
    },
    resetPriceData(state) {
      state.prices = [];
    },
    removePriceData(state, priceData) {
      if (priceData === null) return;
      for (let i = state.prices.length - 1; i >= 0; i--) {
        if (
          state.prices[i].itemId === priceData.itemId &&
          state.prices[i].isHQ === priceData.isHQ
        ) {
          state.prices.splice(i, 1);
          break;
        }
      }
    },
    consolidatePriceData(state, maxItems) {
      if (state.prices.length < maxItems) return;
      state.prices.pop();
    }
  },
  getters: {
    havePriceData: state => {
      return state.prices && state.prices.length > 0;
    }
  }
};
