export const cartTotalPriceSelector = (state) => {
  return state.cart.cartItems.reduce(
    (total, cartItem) =>
      (total +=
        (cartItem?.dprice
          ? cartItem?.dprice?.slice(0, -3)
          : cartItem.price.deliveryPrice
          ? cartItem.price.deliveryPrice
          : cartItem.price.salePrice) * cartItem.quantity),
    0
  )
}

export const cartItemsTotalQuantitySelector = (state) => {
  return state.cart.cartItems.reduce(
    (total, cartItem) => (total += cartItem.quantity),
    0
  )
}
