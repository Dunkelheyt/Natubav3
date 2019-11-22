import * as types from "./../types";

export function getItemDataChipsJSON(itemDataChipsJSON) {
  return {
    type: types.CHIPS_DATA_HAS_LOADED,
    itemDataChipsJSON
  };
}

export function getItemDataMixJSON(itemDataMixJSON) {
  return {
    type: types.MIX_DATA_HAS_LOADED,
    itemDataMixJSON
  };
}
