const GET_CART = "carts/getcart"

const getCartAction = cart =>({
    type: GET_CART,
    cart
})

export const thunkCurrUserCart = () => async dispatch =>{
    const response = await fetch('/api/carts/')
    if (response.ok){
        const data = await response.json()
        dispatch(getCartAction(data))
    }
}

const initialState = { currentUserCart: {}}
// const initialState = {}
const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_CART:{
            // const newState = {...state, currentUserCart:{...state.currentUserCart}}
            // const allItems = action.cart
            // allItems.map(item=>{
            //     newState.currentUserCart[item.id]=item
            // })
            // return newState
            const newState={}
            const allItems = action.cart
            allItems.forEach(item=>{
                newState[item.id]=item
            })
            return {
                ...state, currentUserCart: newState
            }
        }
        default: return state
    }
}

export default cartReducer
