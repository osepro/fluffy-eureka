import React from 'react';
import styled, { keyframes } from 'styled-components';
import {black,yellow, white} from '../utils/colors'
import { price } from "../utils/format"
import { addToCart } from "../actions"
import { useDispatch } from 'react-redux'

const AddToCart = styled.div`
background-color: rgb(27, 26, 32);
color: rgb(255, 255, 255);
padding: 15px 0px;
margin-top: 10px;
cursor: pointer;
transition: background-color 0.2s ease 0s;
`

const ProductImage = styled.div`
width: 100%;
height: 320px;
background-image: url(${({sku})=> require(`../static/products/${sku}-1-product.webp`)});
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
`
const wrapperAnimation = keyframes`
0% {width: 0px }
100% {width: 244px }
`

const discountAnimation = keyframes`
0% {opacity: 0 }
100% {width: 1 }
`

const Discount = styled.div`
width: 120px;
height: 30px;
background: ${yellow};
color: ${black};
font-weight:700;
font-size: 12px;
position: absolute;
padding: 7px;
margin-left: 124px;
box-sizing: border-box;
animation-name: ${discountAnimation};
animation-duration: 1s;
animation-iteration-count: 1;
`

const Wrapper = styled.div`
display: flex;
padding: 10px;
margin-bottom: 30px;
cursor: pointer;
min-height: 400px;
flex-direction: column;
text-align: center;
width: 244px;
animation-name: ${wrapperAnimation};
animation-duration: 1s;
animation-iteration-count: 1;

&:hover {
    ${AddToCart} {
        background-color: ${yellow};  
        transition: background-color 0.8s ease 0s;
    }
    ${ProductImage} {
        opacity: 1;
    }

    ${Discount} {
        background: ${black};
        color: ${white};
        transition: color 0.8s ease 0s;
        transition: background 0.8s ease 0s;
    }
}
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

const ProductItem = ({product}) => {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Discount>{product.isFreeShipping? "Free Shipping" : "2 days Shipping"}</Discount>
            <ProductImage sku={product.sku}/>
            <ProductName>{product.title}</ProductName>
            <Price><Currency>{product.currencyFormat}</Currency>{price(product.price)}</Price>
            <AddToCart onClick={()=>dispatch(addToCart(product))}>Add to Cart</AddToCart>
        </Wrapper>
    );
};

export default ProductItem;