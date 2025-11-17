import getData from "./getData"
import renderGoods from "./renderGoods"
import search from "./serach"

const load = () => {
    const cartBtn = document.getElementById('cart')
    search()

        getData().then((data) => {
           renderGoods(data)
        })
}
export default load