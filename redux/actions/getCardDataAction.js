import { getCardDataApi } from "../api/getCardDataApi"
import * as type from "./ActionTypes"


export const getCardDataStart = () => ({
    type : type.GET_CARD_DATA_START
})

export const getCardDataSucces = (data) => ({
    type : type.GET_CARD_DATA_SUCCESS,
    payload : data
})

export const getCardDataError = (error) => ({
    type : type.GET_CARD_DATA_ERROR,
    payload : error
})


const getCardDataActionIntiate = () => {
    return function (dispatch) {
        dispatch(getCardDataStart());
        getCardDataApi()
        .then((response) => {
            console.log('this is the card data in action file--->',response)
            dispatch(getCardDataSucces(response));
        })
        .catch((error) => dispatch(getCardDataError(error)))
    }
}

export default getCardDataActionIntiate ; 