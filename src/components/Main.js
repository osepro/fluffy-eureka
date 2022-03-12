import React, {useEffect, useState} from 'react';
import Products from './Products'
import SideBar from './SideBar'
import Cart from './Cart'
import fetchData from "../api"

const Main = () => {
    const [products, setProduct] = useState([])
    const [allProducts, setAllProduct] = useState([])
    const [activeBtn, setActiveBtn] = useState("All")

    useEffect(async()=>{
        const result = await fetchData()
        setAllProduct(result)
        setProduct(result)
    },[])

    const filterBySize=(currentSize)=>{
      if(currentSize === "All") {
        setProduct(allProducts)
        setActiveBtn("All")
      } else {
        const result  =allProducts.filter(product => product.availableSizes.some((size) => size === currentSize))
        setProduct(result)
        setActiveBtn(currentSize)
      }
       
    }

    return (
    <>
        <SideBar filterBySize={filterBySize} activeBtn={activeBtn} />
        <Products products={products} />
        <Cart />
    </>
    );
};

export default Main;