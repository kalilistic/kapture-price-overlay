import TestPriceData from "../constants/TestPriceData";
import { formatNumber } from "./numbers";
import { calcDays, formatDate } from "./dates";
import store from "../store";

export function AddTestPriceData(context) {
  context.$store.commit("resetPriceData");
  TestPriceData.forEach(function(entry) {
    let priceData = parsePriceData(entry);
    if (priceData !== null) {
      priceData.daysAgo = "---";
      context.$store.commit("updatePriceData", priceData);
    }
  });
  context.$router.push("/prices").then(() => {});
}

export function parsePriceData(data) {
  if (
    data["message"]["kaptureEvent"]["eventType"] !== "ObtainLoot" &&
    data["message"]["kaptureEvent"]["eventType"] !== "SearchLoot"
  )
    return;
  if (data["message"]["kaptureEvent"]["item"]["marketBoard"] === null) return;
  let priceData = {
    itemId: data["message"]["kaptureEvent"]["item"]["id"],
    itemName: data["message"]["kaptureEvent"]["item"]["properName"],
    isHQ: data["message"]["kaptureEvent"]["item"]["isHQ"],
    vendorPrice: formatNumber(
      data["message"]["kaptureEvent"]["item"]["vendorBuyPrice"]
    )
  };
  if (data["message"]["kaptureEvent"]["item"]["isHQ"] === true) {
    priceData.itemName = priceData.itemName + " (HQ)";
    priceData.marketPriceDisplay = formatNumber(
      data["message"]["kaptureEvent"]["item"]["marketBoard"]["averagePriceHQ"]
    );
    priceData.saleVelocity = formatNumber(
      data["message"]["kaptureEvent"]["item"]["marketBoard"]["saleVelocityHQ"],
      2
    );
  } else {
    priceData.marketPriceDisplay = formatNumber(
      data["message"]["kaptureEvent"]["item"]["marketBoard"]["averagePriceNQ"]
    );
    priceData.saleVelocity = formatNumber(
      data["message"]["kaptureEvent"]["item"]["marketBoard"]["saleVelocityNQ"],
      2
    );
  }
  priceData.lastUploadTime =
    data["message"]["kaptureEvent"]["item"]["marketBoard"]["lastUploadTime"];
  priceData.marketPriceActual = priceData.marketPriceDisplay;
  excludeOldPrices(priceData);
  priceData.lastUploadTime = formatDate(priceData.lastUploadTime);
  priceData.listingsCount =
    data["message"]["kaptureEvent"]["item"]["marketBoard"]["listingsCount"];
  removeDupes(priceData);
  consolidateData();
  return priceData;
}

export function removeDupes(priceData) {
  if (!store.state.settings.excludeDupes) return;
  store.commit("removePriceData", priceData);
}

export function excludeOldPrices(priceData) {
  priceData.daysAgo = calcDays(priceData.lastUploadTime);
  if (priceData.daysAgo > store.state.settings.maxDays) {
    priceData.marketPriceDisplay = "---";
  }
}
export function consolidateData() {
  if (!store.state.settings.maxItems) return;
  store.commit("consolidatePriceData", store.state.settings.maxItems);
}
