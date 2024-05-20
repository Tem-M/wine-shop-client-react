export const addToCart=(product)=>{
    return {type:"ADD_TO_CART", payload:product}
}

export const incCount=(product)=>{
    return {type:"INC_COUNT", payload:product}
}

export const decCount=(product)=>{
    return {type:"DEC_COUNT", payload:product}
}

export const LogIn = (user) => {
    return {type:"LOG_IN", payload:user}
}

export const addProduct = (product) => {
    return {type:"ADD_PRODUCT", payload:product}
}

export const removeFromCart = (product) => {
    return {type: "REMOVE_FROM_CART", payload:product}
}

export const signIn = (user) => {
    return {type: "SIGN_IN", payload:user}
}

export const Remove = (product) => {
    return {type: "REMOVE", payload:product}
}