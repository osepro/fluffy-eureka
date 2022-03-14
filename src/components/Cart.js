import React, { useState } from 'react';
import styled from 'styled-components';
import { white, blue, yellow, jetblack, charcoal, red } from '../utils/colors'
import { useSelector, useDispatch } from 'react-redux'
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { RiShoppingBasketLine } from "react-icons/ri";
import { increaseQty, decreaseQty, deleteItem } from "../actions"

const Wrapper = styled.div`
display: flex;
justify-content: center;
height: 0px;
position: fixed;
z-index: 5;
width: 100%;
bottom: 0;
flex-direction: column;
`

const MainWrapper = styled.div`
display: flex;
flex-direction: column;
`

const MainCart = styled.div`
width: 150px;
height: ${({isCartEmpty}) => isCartEmpty===0? "0px":"50px"};
display:  ${({isCartEmpty}) => isCartEmpty===0? "none":"block"};
visibility:  ${({isCartEmpty}) => isCartEmpty===0?"hidden":"visible"};
display: flex;
cursor: pointer;
align-self: center;
background-image: url(${()=> require(`../static/cart-icon.png`)});
background-position: 35px 8px;
background-repeat: no-repeat;
background-color: ${blue};
border-radius: 5px 5px 0px 0px;
box-sizing: border-box;
padding-left:  70px;
color: ${white};
font-weight: bold;
`

const MainCartCount = styled.p`
background: ${yellow};
border-radius: 10px 10px 10px 10px;
padding-right: 5px;
padding-left: 5px;
font-size: 15px;
`

const MainItems = styled.div`
height: ${({isCartOpen}) => isCartOpen? "900px":"5px"};
background: ${jetblack};
padding-top: 15px;
width: 100%;
border-top: solid ${({isCartOpen}) => isCartOpen? "5px":"0"} ${blue};
transition: height 0.8s ease 0s;
overflow-y: scroll;
`

const MainTable = styled.table`
width: 80%;
margin-left: 10%;
`

const MainTableBody = styled.tbody`
`

const MainTableHead = styled.thead`
`

const MainTableTr = styled.tr`
background: ${charcoal};
text-align: center;
`

const ProductImage = styled.div`
width: 100%;
height: 48px;
background-image: url(${({sku})=> require(`../static/products/${sku}-1-cart.webp`)});
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
`

const MainTableTd = styled.td`
color: ${white};
font-size: 13px;
padding: 15px;
`

const CheckoutBtn = styled.div`
display : flex;
font-weight: 700;
background: ${red};
color: ${white};
width: 50%;
margin-left: 25%;
justify-content: center;
padding:10px;
cursor: pointer;
margin-top:10px;
`

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => ({ cart: state.cartItems}))
    const [isCartOpen, setCartOpen] = useState(0)

    return (
        <Wrapper>
            <MainWrapper>
                <MainCart isCartEmpty={Object.keys(cart).length} onClick={()=>setCartOpen(!isCartOpen)}>
                    <MainCartCount>{Object.keys(cart).length}</MainCartCount>
                </MainCart>
                <MainItems isCartOpen={isCartOpen}>
                    <MainTable>
                        <MainTableHead>
                        <MainTableTr>
                                <MainTableTd></MainTableTd>
                                <MainTableTd>{"Item"}</MainTableTd>
                                <MainTableTd>{"Qty"}</MainTableTd>
                                <MainTableTd>{"Price"}</MainTableTd>
                                <MainTableTd></MainTableTd>
                                <MainTableTd></MainTableTd>
                            </MainTableTr>
                        </MainTableHead>
                        {Object.keys(cart).map((product) => 
                        (<MainTableBody key={cart[product].sku}>
                            <MainTableTr>
                                <MainTableTd><ProductImage sku={cart[product].sku} /></MainTableTd>
                                <MainTableTd>{cart[product].title} - {cart[product].style}</MainTableTd>
                                <MainTableTd>{cart[product].qty}</MainTableTd>
                                <MainTableTd>{cart[product].currencyFormat}{cart[product].price}</MainTableTd>
                                <MainTableTd style={{cursor: 'pointer'}}><AiOutlinePlusSquare onClick={()=>dispatch(increaseQty(cart[product].sku))} /> <AiOutlineMinusSquare onClick={()=>dispatch(decreaseQty(cart[product].sku))} /></MainTableTd>
                                <MainTableTd style={{cursor: 'pointer'}}><RiDeleteBin5Line color={red} onClick={()=>dispatch(deleteItem(cart[product].sku))} /></MainTableTd>
                            </MainTableTr>
                        </MainTableBody>)
                        )}
                    </MainTable>
                    <CheckoutBtn>Checkout <RiShoppingBasketLine /></CheckoutBtn>
                </MainItems>
            </MainWrapper>    
        </Wrapper>
    );
};

export default Cart;