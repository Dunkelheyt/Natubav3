import * as types from "./../types";

export function itemData(state = [], action) {
  switch (action.type) {
    case types.PRODUCT_DATA_HAS_LOADED:
      return action.items;

    default:
      return state;
  }
}
