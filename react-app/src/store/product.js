const GET_ALL_PRODUCTS = "products/getallproducts"

const getAllProductsAction= (products)=>({
    type: GET_ALL_PRODUCTS,
    products
})
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
        default: return state
    }
}
export default productsReducer
