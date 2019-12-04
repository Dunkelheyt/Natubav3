import { combineReducers } from "redux";

import { itemData } from "./items";

import { reducer as reduxFormReducer } from "redux-form";

export default combineReducers({
  itemData,
  form: reduxFormReducer
});
