import { getBannerDataApi } from '../api/getBannerDataApi';
import * as types from './ActionTypes';

export const getBannerDataStart = () => ({
    type : types.GET_BANNER_DATA_START,
})

export const getBannerDataSuccess = (data) => ({
    type : types.GET_BANNER_DATA_SUCCESS,
    payload : data
})

export const getBannerDataError = (error) => ({
    type: types.GET_BANNER_DATA_ERROR,
    payload : error
})

export const getBannerDataActionIntiate = () => {
    return function (dispatch) {
        dispatch(getBannerDataStart());
        getBannerDataApi()
        .then((response) => {
            dispatch(getBannerDataSuccess(response))
            console.log('this is action file ---->', response)
        })
        .catch((error) => dispatch(getBannerDataError(error)))
    }
}