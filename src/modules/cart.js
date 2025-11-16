
const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const btnClose = cartModal.querySelector('.cart-close')

    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'flex'
    })
    btnClose.addEventListener('click', () => {
        cartModal.style.display = ''
    })
}
export default cart