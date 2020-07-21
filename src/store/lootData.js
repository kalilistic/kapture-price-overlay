export const lootData = {
  state: {
    lootLog: []
  },
  mutations: {
    updatePriceCheck(state, lootData) {
      state.lootLog.unshift(lootData);
    },
    resetPriceCheck(state) {
      state.lootLog = [];
    }
  },
  getters: {
    haveLootData: state => {
      return state.lootLog && state.lootLog.length > 0;
    }
  }
};
