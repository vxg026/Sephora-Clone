const GET_ALL_PRODUCTS = "products/getallproducts"
const GET_CURR_PRODUCTS = "products/getcurrproducts"

const getAllProductsAction= (products)=>({
    type: GET_ALL_PRODUCTS,
    products
})
const getCurrProductsAction = (products) =>({
    type: GET_CURR_PRODUCTS,
    products
})

export const thunkCurrProducts = () => async(dispatch)=>{
    const response = await fetch('/api/products/curr')
    if(response.ok){
        const data = await response.json()
        dispatch(getCurrProductsAction(data))
    }
}
export const thunkAllProducts = () => async (dispatch) =>{
    const response = await fetch('/api/products/all')
    if(response.ok){
        const data = await response.json()
        dispatch(getAllProductsAction(data))
    }
}
const initialState = {allProducts:{}}

const productsReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:{
            const newState={}
            const allProducts = action.products
            allProducts.forEach(product=>{
                newState[product.id]=product
            })
            return {...state, allProducts: newState}
        }
        case GET_CURR_PRODUCTS:{
            return { ...state, allProducts: action.products };
        }
        default: return state
    }
}
export default productsReducer
