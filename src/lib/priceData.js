import TestPriceData from "../constants/TestPriceData";
import { formatNumber } from "./numbers";
import { formatDate } from "./dates";
import store from "../store";

export function AddTestPriceData(context) {
  context.$store.commit("resetPriceData");
  TestPriceData.forEach(function(entry) {
    let priceData = parsePriceData(entry);
    if (priceData !== null) {
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
    priceData.marketBoardPrice = formatNumber(
      data["message"]["kaptureEvent"]["item"]["marketBoard"]["averagePriceHQ"]
    );
    priceData.saleVelocity = formatNumber(
      data["message"]["kaptureEvent"]["item"]["marketBoard"]["saleVelocityHQ"],
      2
    );
  } else {
    priceData.marketBoardPrice = formatNumber(
      data["message"]["kaptureEvent"]["item"]["marketBoard"]["averagePriceNQ"]
    );
    priceData.saleVelocity = formatNumber(
      data["message"]["kaptureEvent"]["item"]["marketBoard"]["saleVelocityNQ"],
      2
    );
  }
  const lastUpload =
    data["message"]["kaptureEvent"]["item"]["marketBoard"]["lastUploadTime"];
  priceData.lastUploadTime = formatDate(lastUpload);
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

export function consolidateData() {
  if (!store.state.settings.maxItems) return;
  store.commit("consolidatePriceData", store.state.settings.maxItems);
}
