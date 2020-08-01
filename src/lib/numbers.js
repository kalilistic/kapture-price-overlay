import store from "../store";

export function formatNumber(
  number,
  precision = store.state.settings.precision
) {
  let digitSep = store.getters.digitSeps[store.state.settings.digitSepId].sep;
  let decimalSep =
    store.getters.decimalSeps[store.state.settings.decimalSepId].sep;

  if (number == null || !isNumber(number) || number === 0 || number === "0") {
    return "---";
  }
  if (shouldAbbreviate(number)) {
    let num = abbreviateNumber(number);
    num = updateDecimalSeparator(num, decimalSep);
    return num;
  }
  let num = number.toString();
  num = updatePrecision(num, precision);
  if (num.includes(".")) {
    let numArr = num.split(".");
    numArr[0] = addDigitSeparators(numArr[0], digitSep);
    num = numArr.join(decimalSep);
  } else {
    num = addDigitSeparators(num, digitSep);
  }
  return num;
}

export function isNumber(number) {
  return isFinite(number);
}

function shouldAbbreviate(number) {
  return store.state.settings.abbreviateNumbers && number >= 1000;
}

function abbreviateNumber(number) {
  let precision = store.state.settings.precision;
  precision = Math.pow(10, precision);
  let abbrev = ["k", "m", "b", "t"];
  for (let i = abbrev.length - 1; i >= 0; i--) {
    let size = Math.pow(10, (i + 1) * 3);
    if (size <= number) {
      number = Math.round((number * precision) / size) / precision;
      number = number.toFixed(store.state.settings.precision);
      number += " " + abbrev[i];
      break;
    }
  }
  return number;
}

function updateDecimalSeparator(number, sep) {
  return number.replace(".", sep);
}

function addDigitSeparators(number, sep) {
  let num = number.toString();
  if (store.state.settings.digitSepId === 0) return num;
  if (num.length < 4) return num;
  return num.replace(/(\d)(?=(\d{3})+$)/g, "$1" + sep);
}

function updatePrecision(number, precision) {
  return parseFloat(number).toFixed(precision);
}
