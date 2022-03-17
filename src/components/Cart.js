import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { white, blue, yellow, jetblack, charcoal, red, black, gray2, green } from '../utils/colors'
import { useSelector, useDispatch } from 'react-redux'
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { RiShoppingBasketLine } from "react-icons/ri";
import { increaseQty, decreaseQty, deleteItem, checkout } from "../actions"
import { price } from "../utils/format"

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
height: 50px;
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
height: ${({isCartOpen}) => isCartOpen? "1500px":"5px"};
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

const MainTableFooter = styled.tfoot`
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
background: ${({isCartEmpty}) => isCartEmpty? red: gray2};
color: ${white};
width: 50%;
margin-left: 25%;
justify-content: center;
padding:10px;
cursor: ${({isCartEmpty}) => isCartEmpty? "pointer": "default"};
margin-top:10px;

&:hover {
    color: ${black};
}
`
const Price = styled.span`
color: ${yellow};
font-size: 14px;
`

const SpanPointer = styled.span`
cursor: pointer;
`
const CartTotal = styled.span`
font-weight: bold;
font-size: 16px;
`

const EmptyCart = styled.span`
font-weight: bold;
font-size: 16px;
`
const CheckOutInfo = styled.span`
background: ${yellow};
color: ${black};
padding: 14px;
font-size: 20px;
`

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => ({ cart: state.cartItems}))
    const [isCartOpen, setCartOpen] = useState(0)
    const [checkoutMessage,setCheckoutMessage] = useState("")

   const checkOutSuccess = () => {
       if(Object.keys(cart).length > 0) {
        dispatch(checkout())
        setCheckoutMessage("Hurray!! You have successfully checked out. Your order is on the way")
       }
   }

   useEffect(()=> {
    if(Object.keys(cart).length > 0) {
        setCheckoutMessage("")
    }
   },[checkoutMessage])

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
                                <MainTableTd>{checkoutMessage.length ===0 && "Item" }</MainTableTd>
                                <MainTableTd>{checkoutMessage.length ===0 && "Qty"}</MainTableTd>
                                <MainTableTd>{checkoutMessage.length ===0 && "Price"}</MainTableTd>
                                <MainTableTd></MainTableTd>
                                <MainTableTd></MainTableTd>
                        </MainTableTr>
                        </MainTableHead>
                        {Object.keys(cart).length===0?(
                        <MainTableBody>
                            <MainTableTr>
                                <MainTableTd></MainTableTd>
                                <MainTableTd></MainTableTd>
                                <MainTableTd>{checkoutMessage.length === 0?(<EmptyCart>{"Cart is empty"}</EmptyCart>):<CheckOutInfo>{checkoutMessage}</CheckOutInfo>}</MainTableTd>
                                <MainTableTd></MainTableTd>
                                <MainTableTd></MainTableTd>
                                <MainTableTd></MainTableTd>
                            </MainTableTr>
                        </MainTableBody>
                        ):(Object.keys(cart).map((product) => 
                        (<MainTableBody key={cart[product].sku}>
                            <MainTableTr>
                                <MainTableTd><ProductImage sku={cart[product].sku} /></MainTableTd>
                                <MainTableTd>{cart[product].title} - {cart[product].style}</MainTableTd>
                                <MainTableTd>{cart[product].qty}</MainTableTd>
                                <MainTableTd><Price>{cart[product].currencyFormat}{price(cart[product].price * cart[product].qty)}</Price></MainTableTd>
                                <MainTableTd><SpanPointer><AiOutlinePlusSquare onClick={()=>dispatch(increaseQty(cart[product].sku))} /></SpanPointer> <SpanPointer><AiOutlineMinusSquare onClick={()=>dispatch(decreaseQty(cart[product].sku))} /></SpanPointer></MainTableTd>
                                <MainTableTd><SpanPointer><RiDeleteBin5Line color={red} onClick={()=>dispatch(deleteItem(cart[product].sku))} /></SpanPointer></MainTableTd>
                            </MainTableTr>
                        </MainTableBody>)
                        ))}
                        <MainTableFooter>
                            <MainTableTr>
                                <MainTableTd></MainTableTd>
                                <MainTableTd>{checkoutMessage.length ===0 && <CartTotal>Total Payment</CartTotal>}</MainTableTd>
                                <MainTableTd>{checkoutMessage.length ===0 && Object.keys(cart).reduce((acc,product) => acc + cart[product].qty,0)}</MainTableTd>
                                <MainTableTd>{checkoutMessage.length ===0 && <Price><CartTotal>${price(Object.keys(cart).reduce((acc,product) => acc + cart[product].price * cart[product].qty,0))}</CartTotal></Price>}</MainTableTd>
                                <MainTableTd></MainTableTd>
                                <MainTableTd></MainTableTd>
                            </MainTableTr>
                        </MainTableFooter>
                    </MainTable>
                    { checkoutMessage.length ===0 && <CheckoutBtn isCartEmpty={Object.keys(cart).length} onClick={()=> checkOutSuccess()}>Checkout <RiShoppingBasketLine /></CheckoutBtn> }
                </MainItems>
            </MainWrapper>    
        </Wrapper>
    );
};

export default Cart;