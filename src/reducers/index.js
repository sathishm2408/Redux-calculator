import * as actionTypes from '../constants/index'

const initialState = {
    cart: []
};

const getProductsReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        
        default:
            return state
    }
}
export default getProductsReducer;