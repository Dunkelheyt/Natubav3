import * as types from "./../types";
const itemDataChipsJSON = require("./../../json/productChips.json");
const itemDataMixJSON = require("./../../json/productMix.json");

export function itemDataChips(state = itemDataChipsJSON, action) {
  switch (action.type) {
    case types.CHIPS_DATA_HAS_LOADED:
      return action.CHIPS_DATA_HAS_LOADED;

    default:
      return state;
  }
}

export function itemDataMix(state = itemDataMixJSON, action) {
  switch (action.type) {
    case types.CHIPS_DATA_HAS_LOADED:
      return action.CHIPS_DATA_HAS_LOADED;

    default:
      return state;
  }
}
