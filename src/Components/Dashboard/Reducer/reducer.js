
export const initialState = {
    name: 'manas',
    image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg',
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


export default reducer;