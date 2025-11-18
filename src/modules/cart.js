import renderCart from "./renderCart"
import postData from "./postData"

const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const btnClose = cartModal.querySelector('.cart-close')
    const goodsWrapper = document.querySelector('.goods')
    const cartTotal = cartModal.querySelector('.cart-total > span')
    const cartDelete = cartModal.querySelector('.cart-wrapper')
    const cartSendBtn = cartModal.querySelector('.cart-confirm')

    const cartQuant = document.querySelector('.counter')

    const quantity = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        cartQuant.textContent = cart.length
    }

    quantity()

    const openCart = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

        cartModal.style.display = 'flex'

        renderCart(cart)

        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)

        quantity()
    }
    const closeCart = () => {
        cartModal.style.display = ''
    }

    cartBtn.addEventListener('click', openCart);
    btnClose.addEventListener('click', closeCart);

    goodsWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {

            const card = event.target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))

            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

            const goodItem = goods.find((item) => {
                return item.id === key
            })

            cart.push(goodItem)
            localStorage.setItem('cart', JSON.stringify(cart))

            quantity()

        }
    })

    cartDelete.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

            const card = event.target.closest('.card')
            const key = card.dataset.key

            const index = cart.findIndex((item) => {
                return item.id === key
            })

            cart.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(cart))

            renderCart(cart)

            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0)

            quantity()

        }
    })

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

        postData(cart).then(() => {
            localStorage.removeItem('cart')

            renderCart([])

            cartTotal.textContent = 0
            cartQuant.textContent = 0
        })
    })

}
export default cart