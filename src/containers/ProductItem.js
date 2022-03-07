import React from 'react';
import styled from 'styled-components';
import {black,yellow} from '../utils/colors'

const Wrapper = styled.div`
display: flex;
padding: 10px;
margin-bottom: 30px;
cursor: pointer;
min-height: 400px;
flex-direction: column;
text-align: center;
width: 244px;

&:hover {

}
`

const Discount = styled.div`
width: 120px;
height: 30px;
background: ${yellow};
color: ${black};
font-weight:700;
position: absolute;
padding: 5px;
margin-left: 124px;
box-sizing: border-box;
`

const ProductImage = styled.div`
width: 100%;
height: 320px;
background-image: url(${({image})=> image});
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
`

const ProductName = styled.p`
padding: 0px 20px;
height: 45px;
font-size: 22px;
`

const Price = styled.p`
font-size: 20px;
color: ${black};
font-weight: 700;
`

const Currency = styled.span`
color: ${yellow};
`

const AddToCart = styled.div`
background-color: rgb(27, 26, 32);
color: rgb(255, 255, 255);
padding: 15px 0px;
margin-top: 10px;
cursor: pointer;
transition: background-color 0.2s ease 0s;

&:hover {
    background-color: ${yellow};  
    transition: background-color 0.8s ease 0s;
}
`

const ProductItem = ({product}) => {
    return (
        <Wrapper>
            <Discount>30% Off</Discount>
            <ProductImage image={"https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644-1-product.b6128dd1df3de552cf1b.webp"}/>
            <ProductName>{product.title}</ProductName>
            <Price><Currency>{product.currencyFormat}</Currency>{product.price}</Price>
            <AddToCart>Add to Cart</AddToCart>
        </Wrapper>
    );
};

export default ProductItem;