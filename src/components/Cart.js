import React, { useState } from 'react';
import styled from 'styled-components';
import { white, blue, yellow, jetblack, charcoal, red } from '../utils/colors'
import { useSelector } from 'react-redux'
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Wrapper = styled.div`
display: flex;
justify-content: center;
height: 0px;
position: fixed;
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
min-height: ${({isCartOpen}) => isCartOpen? "800px":"5px"};
background: ${jetblack};
width: 100%;
border-top: solid ${({isCartOpen}) => isCartOpen? "5px":"0"} ${blue};
transition: min-height 0.8s ease 0s;
overflow: scroll;
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

const MainTableTd = styled.td`
color: ${white};
font-size: 13px;
padding: 15px;
`

const itemQuantity = (sku,products)=>{
    let quantity = products.filter(product=>product.sku === sku)
    return quantity.length
}

const Cart = () => {
    const { cart } = useSelector((state) => ({ cart: state.cartItems}))
    const [isCartOpen, setCartOpen] = useState(0)
    return (
        <Wrapper>
            <MainWrapper>
                <MainCart isCartEmpty={cart.length} onClick={()=>setCartOpen(!isCartOpen)}>
                    <MainCartCount>{cart.length}</MainCartCount>
                </MainCart>
                <MainItems isCartOpen={isCartOpen}>
                    <MainTable>
                        <MainTableHead>
                        <MainTableTr>
                                <MainTableTd>{"Qty"}</MainTableTd>
                                <MainTableTd>{"Item"}</MainTableTd>
                                <MainTableTd>{"Price"}</MainTableTd>
                                <MainTableTd></MainTableTd>
                                <MainTableTd></MainTableTd>
                            </MainTableTr>
                        </MainTableHead>
                        {cart.map((product) => 
                        (<MainTableBody>
                            <MainTableTr>
                                <MainTableTd>{itemQuantity(product.sku,cart)}</MainTableTd>
                                <MainTableTd>{product.title} - {product.style}</MainTableTd>
                                <MainTableTd>{product.currencyFormat}{product.price}</MainTableTd>
                                <MainTableTd style={{cursor: 'pointer'}}><AiOutlinePlusSquare /></MainTableTd>
                                <MainTableTd style={{cursor: 'pointer'}}><RiDeleteBin5Line color={red} /></MainTableTd>
                            </MainTableTr>
                        </MainTableBody>)
                        )}
                    </MainTable>
                </MainItems>
            </MainWrapper>           
        </Wrapper>
    );
};

export default Cart;