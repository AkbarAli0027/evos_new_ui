export function addToCartWithAnimation(event, item, dispatch, action) {
  event.stopPropagation()
  event.preventDefault()
  const button = event.target
  const cartItem = document.getElementById(item.id)
  const pointCartItemX = cartItem.getBoundingClientRect().x
  const pointCartItemY = cartItem.getBoundingClientRect().y
  const cartButton = document.getElementById('cartButton')
  const pointCartButtonX = cartButton.getBoundingClientRect().x
  const pointCartButtonY = cartButton.getBoundingClientRect().y
  const translateX = pointCartButtonX - pointCartItemX + 'px'
  const translateY = pointCartButtonY - pointCartItemY + 'px'
  cartItem.style.visibility = 'visible'
  button.style.pointerEvents = 'none'
  setTimeout(() => {
    cartItem.style.transform = `translate(${translateX}, ${translateY}) scale(0.3)`
    cartItem.style.opacity = '0.7'
  }, 500)

  setTimeout(() => {
    dispatch(action(item))
    cartButton.classList.add('shake')
    cartItem.style.visibility = 'hidden'
  }, 1000)
  setTimeout(() => {
    cartButton.classList.remove('shake')
  }, 1500)
  setTimeout(() => {
    cartItem.style.transform = `translate(0, 0) scale(1)`
    cartItem.style.opacity = '1'
    button.style.pointerEvents = 'all'
  }, 2000)
}
