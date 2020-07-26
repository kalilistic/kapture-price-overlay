import TestLootData from "../constants/TestLootData";
import { formatNumber } from "./numbers";

export function AddTestLootData(context) {
  context.$store.commit("resetPriceCheck");
  TestLootData.forEach(function(entry) {
    let lootData = parseLootData(entry);
    if (lootData !== null) {
      context.$store.commit("updatePriceCheck", lootData);
    }
  });
  context.$router.push("/price").then(() => {});
}

export function parseLootData(data) {
  if (
    data["message"]["kaptureEvent"]["eventType"] !== "ObtainLoot" &&
    data["message"]["kaptureEvent"]["eventType"] !== "SearchLoot"
  )
    return;
  if (data["message"]["kaptureEvent"]["item"]["marketBoard"] === null) return;
  let lootData = {
    itemName: data["message"]["kaptureEvent"]["item"]["properName"],
    vendorPrice: formatNumber(
      data["message"]["kaptureEvent"]["item"]["vendorBuyPrice"]
    ),
    link:
      "https://universalis.app/market/" +
      data["message"]["kaptureEvent"]["item"]["id"]
  };
  if (data["message"]["kaptureEvent"]["item"]["isHQ"] === true) {
    lootData.itemName = lootData.itemName + " (HQ)";
    lootData.marketBoardPrice = formatNumber(
      data["message"]["kaptureEvent"]["item"]["marketBoard"]["averagePriceHQ"]
    );
  } else {
    lootData.marketBoardPrice = formatNumber(
      data["message"]["kaptureEvent"]["item"]["marketBoard"]["averagePriceNQ"]
    );
  }
  return lootData;
}
