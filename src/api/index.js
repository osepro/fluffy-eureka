
const apiUrl = "https://react-shopping-cart-67954.firebaseio.com/products.json"

const fetchData= async ()=> {
    const getData = await fetch(apiUrl)
    const resultData = await getData.json()
    return resultData.products
}

export default fetchData;