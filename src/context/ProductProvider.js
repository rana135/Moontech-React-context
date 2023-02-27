import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../State/ProductState/actionTypes';
import { initialiState, productReducer } from '../State/ProductState/ProductReducer';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialiState)
    console.log(state);

    useEffect(() => {
        dispatch({ type: actionTypes.FETHING_START })
        fetch("products.json")
            .then((res) => res.json())
            .then(data => dispatch({ type: actionTypes.FETHING_SUCCESS, payload: data }))
            .catch(() => {
                dispatch({ type: actionTypes.FETHING_ERROR })
            })
    }, [])
    const value = {
        state, dispatch
    }

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};
export const useProduct = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context;
}

export default ProductProvider;