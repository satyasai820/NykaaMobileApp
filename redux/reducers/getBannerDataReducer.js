import * as type from "../actions/ActionTypes"

const initialState = {
    data : [],
    loading:false
}


const getBannerDataReducer = (state = initialState , action) => {
    switch(action.type) {
        case type.GET_BANNER_DATA_START :
            return{
                ...state,
                loading:true
            };

            case type.GET_BANNER_DATA_SUCCESS : 
            console.log('this is redicer Data --->', action.payload)
            return {
                ...state,
                loading:false,
                data : action.payload,
            }

            case type.GET_BANNER_DATA_ERROR :
                return{
                    ...state,
                    loading: false,
                    data : action.payload
                };

                default :
                return state;
    }
}

export default getBannerDataReducer