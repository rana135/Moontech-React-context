import { actionTypes } from "./actionTypes";

export const initialiState = {
    loading: false, //প্রথম অবস্থায় সবকিছুই false থাকবে।
    products: [],  //যেহেুত product তাই এটি array এর মতো হবে।
    error: false,
    cart:[],
    wishlist:[],
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETHING_START:
            return {
                ...state,
                loading:true, //যখন loading start হবে তখন তা true হবে।
                error:false,  //loading এর সময় তো আর error থাকবে না।
            }
        case actionTypes.FETHING_SUCCESS:
            return {
                ...state,
                loading:false,
                products:action.payload,  //product পাওয়ার সময় বাকীগুলা হবে না তাই false
                error:false,
            }
        case actionTypes.FETHING_ERROR:
            return {
                ...state,
                loading:false,
                error:true,
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart:[...state.cart, action.payload]
            }
        case actionTypes.WISHLIST:
            return {
                ...state,
                wishlist:[...state.wishlist, action.payload]
            }
        default:
            return state;
    }
}