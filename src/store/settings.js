import { TinyColor } from "@ctrl/tinycolor/dist";

export const settings = {
  state: initialState,
  mutations: {
    update(state, newState) {
      Object.keys(newState).forEach(key => {
        state[key] = newState[key];
      });
      calcDerivedProps(state);
    },
    reset(state, newSettings) {
      const s = initialState();
      Object.keys(newSettings).forEach(key => {
        state[key] = s[key];
      });
      calcDerivedProps(state);
    },
    resetAll(state) {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
      calcDerivedProps(state);
    }
  }
};

function initialState() {
  let state = {
    collapsed: false,
    backgroundColor: "#1e1e1e",
    fontColor: "#ebffff",
    opacity: 85,
    excludeDupes: true,
    maxItems: 10,
    abbreviateNumbers: false,
    precision: 0,
    digitSepId: 2,
    decimalSepId: 0,
    languageId: 0,
    logging: false,
    alwaysShowSplash: false,
    latestSplashSeen: 0,
    showDiscord: true
  };
  calcDerivedProps(state);
  return state;
}

function calcDerivedProps(state) {
  calcColors(state);
  calcCollapsed(state);
}

function calcColors(state) {
  state._foregroundColor = new TinyColor(state.backgroundColor)
    .lighten(10)
    .toString();
  state._controlColor = new TinyColor(state.backgroundColor)
    .lighten(70)
    .toString();
}

function calcCollapsed(state) {
  if (state.collapsed) {
    state._mainDisplay = "none";
  } else {
    state._mainDisplay = "flex";
  }
}
