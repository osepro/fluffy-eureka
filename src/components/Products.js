import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ProductItem from "../containers/ProductItem"
import fetchData from "../api"

const Wrapper = styled.div`
display: flex;
flex: 1;
flex-direction: column;
`

const ProductItemDisplay = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

const TitleLabel = styled.h1`
font-size: 15px;
`

const productsItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const Products = () => {

    const [products, setProduct] = useState([])

    useEffect(async()=>{
        const result = await fetchData()
        setProduct(result)
    },[])

    return (
        <Wrapper>
            <TitleLabel>Products Listings</TitleLabel>
            <ProductItemDisplay>
            {products?.map((product,index) => <ProductItem key={index} product={product} />)}
            </ProductItemDisplay>
        </Wrapper>
    );
};

export default Products;