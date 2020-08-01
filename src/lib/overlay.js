/* global addOverlayListener  */
/* global callOverlayHandler */
/* global startOverlayEvents */

import { log } from "./logger";
import { parsePriceData } from "./priceData";

// eslint-disable-next-line no-unused-vars
export async function addLootDataListener(context) {
  log("adding lootData overlay listener");
  addOverlayListener("LootData", data => {
    log("raw lootData", data);
    let priceData = parsePriceData(data);
    log("parsed priceData", priceData);
    if (priceData != null) {
      context.$store.commit("updatePriceData", priceData);
      if (context.$router.currentRoute.path === "/") {
        context.$router.push("/prices");
      }
    }
  });
}

export async function getLanguageId() {
  let language = await callOverlayHandler({ call: "getLanguage" });
  return language.languageId;
}

export async function startOverlay() {
  log("starting overlay events");
  startOverlayEvents();
}
