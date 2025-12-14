import { createContext , useReducer } from "react"
import './reducer';
import { useState , useEffect } from "react";
import axios from "axios";

export const ReducerProduct = createContext();

const ReducerComponent = ({children}) => {

    const [productData, setProductdata] = useState([]);

    useEffect(() => {
        axios
            .get('https://6736e031aafa2ef22231c8bd.mockapi.io/dashboard/product')
            .then((response) => {
                setProductdata(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [productData]);

    const initialState = {
        name: '',
        image: '',
        description: '',
        price: '',
        material: ''
    }

    const reducer = (state, action) => {
        // action = [type: "CHANGE USERNAME", payload: "--New Value--"]
    
        switch(action.type){
            case 'PRODUCT NAME':
                return { ...state, name: action.payload };
            case 'PRODUCT IMAGE':
                return { ...state, image: action.payload };
            case 'PRODUCT MATERIAL':
                return { ...state, material: action.payload };
            case 'PRODUCT DESCRIPTION':
                return { ...state, description: action.payload };
            case 'PRODUCT PRICE':
                return { ...state, price: action.payload };
            default:
                return state
        }
    }

    const reducerData = useReducer(reducer, initialState);

    return(
        <ReducerProduct.Provider value={reducerData}>
            {children}
        </ReducerProduct.Provider>
    )
}

export default ReducerComponent;