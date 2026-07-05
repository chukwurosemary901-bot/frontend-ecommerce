import {createSlice} from '@reduxjs/toolkit'
const initialState = {
// items: localStorage.getItem('carts')? JSON.parse(localStorage.getItem('carts')) :[]
items: []

}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {productID, quantity} = action.payload
            const indexProductID = (state.items).findIndex(item => item.productID === productID)
           if(indexProductID >= 0){
            state.items[indexProductID].quantity += quantity
           }else{
            state.items.push({productID, quantity})
           }
           localStorage.setItem("carts", JSON.stringify(state.items));
            
        },

            deleteCart(state, action){
const {productID} = action.payload
const indexProductID = (state.items).findIndex(item => item.productID == productID)

  state.items = (state.items).filter(item => item.productID !== productID)  
// delete state.items[indexProductID]

},

            changeQuantity(state, action){
const {productID, quantity} = action.payload
const indexProductID = (state.items).findIndex(item => item.productID == productID)
console.log(indexProductID);

if(quantity > 0){
state.items[indexProductID].quantity = quantity
}else{
state.items = (state.items).filter(item => item.productID !== productID)
}
    
// delete state.items[indexProductID]

},

    },

})
export const {addToCart, deleteCart , changeQuantity} = cartSlice.actions
export default cartSlice.reducer;