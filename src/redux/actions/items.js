import * as types from "./../types";

export function getProductDataJSON(productData) {
  return {
    type: types.PRODUCT_DATA_HAS_LOADED,
    items: productData
  };
}
