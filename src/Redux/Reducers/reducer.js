
const initialState = {
    products: [],
    productsMessage: '',
    categories: [],
    productsMessage: '',
    components: [],
    componentsMessage: ''
}

const reducer = (state = initialState , action) => {
    
    switch(action.type){

        case 'GET_PRODUCTS_SUCCESS':
            return {...state , products: action.payload}

        case 'GET_PRODUCTS_ERROR':
            return {...state , message: action.payload}

        case 'GET_CATEGORIES_SUCCESS':
            return {...state , categories: action.payload}

        case 'GET_CATEGORIES_ERROR':
            return {...state , productsMessage: action.payload}

        case 'GET_COMPONENTS_SUCCESS':
            return {...state , components: action.payload}

        case 'GET_COMPONENTS_ERROR':
            return {...state , componentsMessage: action.payload}

        default:
            return state
    }

}

export default reducer;