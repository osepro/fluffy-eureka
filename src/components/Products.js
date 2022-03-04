import React from 'react';
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

const productsItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const Products = () => {
    return (
        <Wrapper>
            <p>Products Listings</p>
            <ProductItemDisplay>
            {productsItems.map((item) => <ProductItem key={item} />)}
            </ProductItemDisplay>
        </Wrapper>
    );
};

export default Products;