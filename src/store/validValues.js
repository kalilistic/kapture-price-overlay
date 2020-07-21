/* eslint-disable no-unused-vars */

export const validValues = {
  state: loadValidValues,
  getters: {
    digitSeps: state => {
      return state.digitSeps;
    },
    decimalSeps: state => {
      return state.decimalSeps;
    },
    languages: state => {
      return state.languages;
    },
    menuIcon: state => {
      return state.menuIcon;
    },
    settingsIcon: state => {
      return state.settingsIcon;
    },
    openIcon: state => {
      return state.openIcon;
    },
    closeIcon: state => {
      return state.closeIcon;
    }
  }
};

function loadValidValues() {
  let state = {};
  state.languages = [
    { id: 0, name: "Default", locale: "en" },
    { id: 1, name: "English", locale: "en" },
    { id: 2, name: "Français", locale: "fr" },
    { id: 3, name: "Deutsch", locale: "de" },
    { id: 4, name: "日本語", locale: "ja" }
  ];
  state.digitSeps = [
    { id: 0, name: "None" },
    { id: 1, name: "Period", sep: "." },
    { id: 2, name: "Comma", sep: "," }
  ];
  state.decimalSeps = [
    { id: 0, name: "Period", sep: "." },
    { id: 1, name: "Comma", sep: "," }
  ];
  state.menuIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501 512"><path d="M10 421h480v-53H10v53zm0-133h480v-54H10v54zm0-187v53h480v-53H10z"/></svg>';
  state.settingsIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M474 270l-45-17q-4-1-4-5-2-22-9-42-2-4 1-7l34-36q5-5 5.5-12t-3.5-13q-11-18-26-34-5-5-12-6t-13 3l-40 24q-3 2-6 0-22-16-48-24-3-1-4-5l-7-48q-1-7-6-12t-12-6q-11-1-23-1t-23 1q-7 1-12 6t-6 12l-7 48q-1 4-4 5-26 8-48 24-3 2-6 0l-40-24q-6-4-13-3t-12 6q-15 16-26 34-4 6-3.5 13t5.5 12l34 36q3 3 1 7-7 20-9 42 0 4-4 5l-45 17q-7 3-10.5 9T25 292q3 20 9 39 2 7 8 11t13 3l47-4q4-1 6 3 11 21 28 38 3 2 2 6l-15 48q-2 6 .5 12.5T132 459q19 12 40 20 7 3 14 .5t11-8.5l25-39q2-4 6-3 28 5 56 0 4-1 6 3l25 39q4 6 11 8.5t14-.5q21-8 40-20 6-4 8.5-10.5t.5-12.5l-15-48q-1-4 2-6 17-17 28-38 2-4 6-3l47 4q7 1 13-3t8-11q6-19 9-39 1-7-2.5-13t-10.5-9zm-218 77q-35 0-60-25t-25-60 25-60 60-25 60 25 25 60-25 60-60 25z"/></svg>';
  state.openIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 447q-12 0-21-8l-67-68q-6-6-8-13.5t0-15 7.5-13 13-7.5 15.5 0 13 7l47 47 47-46q9-9 21-9t20.5 8.5 8.5 21-9 20.5l-67 68q-9 8-21 8zm68-256q-13 0-21-8l-47-47-47 47q-9 8-21 8t-20.5-8.5T159 162t9-21l67-68q9-8 21-8t21 8l67 68q7 6 8.5 15t-2 17-11 13-15.5 5z"/></svg>';
  state.closeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M324 426q-12 0-21-9l-47-47-47 47q-9 9-21 9t-20.5-8.5-8.5-21 9-20.5l67-68q9-8 21-8t21 8l67 68q7 6 8.5 15t-2 17-10.5 13-16 5zm-68-214q-12 0-21-8l-67-68q-9-8-9-20.5t8.5-21T188 86t21 9l47 47 47-47q9-9 21-9t20.5 8.5 8.5 21-9 20.5l-67 68q-9 8-21 8z"/></svg>';
  return state;
}
