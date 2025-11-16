import getData from "./getData"

const second = () => {
    const cartBtn = document.getElementById('cart')

    cartBtn.addEventListener('click', () => {
        getData().then((data) => {
            console.log(data)
        })
    })
}
export default second