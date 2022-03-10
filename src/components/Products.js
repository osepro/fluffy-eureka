import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ProductItem from "../containers/ProductItem"

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

const Products = ({products}) => {
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