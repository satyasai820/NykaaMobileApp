import { act } from "react";
import * as type from "../actions/ActionTypes"

const initialState = {
    data : [],
    loading : false
}
const getCardDataReducer = (state = initialState , action) => {
    switch(action.type){
        case type.GET_CARD_DATA_START : 
        return {
            ...state,
            loading:true
        };

        case type.GET_CARD_DATA_SUCCESS : 
        console.log('this is card data in reducer file ---->', action.payload)
        return {
            ...state,
            loading: false,
            data : action.payload
        };

        case type.GET_CARD_DATA_ERROR : 
        return {
            ...state,
            loading:false,
            data : action.payload
        }
        default :
        return state;
    
    }
}

export default getCardDataReducer;