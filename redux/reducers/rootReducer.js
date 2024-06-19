import { combineReducers } from "redux";
import getBannerDataReducer from "./getBannerDataReducer";
import getCardDataReducer from "./getCardDataReducer";

const rootReducer = combineReducers({
    bannerdata: getBannerDataReducer,
    cardData: getCardDataReducer
})

export default rootReducer;