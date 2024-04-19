import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import styled from '@emotion/styled';
import { Add, Remove } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import {useState,useEffect} from "react";
//import axios from "axios";
import { userRequest } from '../requestMethods';
import {useNavigate} from "react-router-dom";

const KEY=process.env.REACT_APP_STRIPE;
const Container = styled.div``;
const Wrapper = styled.div`
   padding:20px;
`;
const Title = styled.h1`
  font-weight:300;
  text-align:center;
`;
const Top = styled.div`
   display: flex;
   justify-content:space-between;
   align-items:center;
   padding: 20px;
`;
const TopButton = styled.button`
   padding:10px;
   font-weight: 600;
   cursor: pointer;
   border:${(props)=>props.type==="filled" && "none"};
  background-color:${(props)=>props.type==="filled" ? "black" : "transparent"};
  color:${(props)=>props.type==="filled" && "white"};
`;
const TopTexts=styled.div``;
const TopText=styled.span`
  text-decoration:underline;
  cursor: pointer;
  margin:0 10px; 
`;
const Bottom= styled.div`
   display: flex;
   justify-content:space-between;
`;
const Info= styled.div`
   flex:3;
`;
const Product= styled.div`
   display: flex;
   justify-content: space-between;
   padding:10px;
`;
const ProductDetails= styled.div`
    flex:2;
    display: flex;
`;
const Image= styled.img`
  width: 100px;
`;
const Details= styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content:space-around;
`;
const ProductName= styled.span``;
const ProductId= styled.span``;
const ProductQuantity= styled.span`
`;
const PriceDetail= styled.div`
   flex:1;
   display:flex;
   align-items:flex-start;
   justify-content:center;
   padding:20px;
`;
const ProductAmountContainer=styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  margin-right:20px;
`;
const ProductPrice= styled.span``;
const Summary= styled.div`
   flex:1;
   border: 0.5px solid lightgrey;
   border-radius:10px;
   padding:20px;
   height:50vh;
`;
const SummaryTitle= styled.h1`
   font-size:20px;
  font-weight:500;
`;
const SummaryItem= styled.div`
   margin:20px 0;
   display: flex;
   justify-content:space-between;
   font-weight:${(props)=>props.type==="total" && "600"};
`;
const SummaryItemText= styled.span``;
const SummaryItemPrice= styled.span``;
const Button=styled.button`
  width:100%;
  padding:10px;;
  background-color:#000;
  color:#fff;
  font-weight: 600;
`;
const Hr=styled.hr`
    background-color:#d4d3d3;
    border:none;
    height:1px;
`;
function Cart() {
   const cart=useSelector(state=>state.cart);
   const [stripeToken,setStripeToken]=useState();
   const navigate=useNavigate();
   const onToken=(token)=>{
      setStripeToken(token);
   }
   console.log(stripeToken);
   useEffect(()=>{
      const makeRequest=async()=>{
         try{
            //const res= await axios.post("http://localhost:5000/api/checkout/payment", 
            const res=await userRequest.post("/checkout/payment",
            {
              tokenId:stripeToken.id,
              amount:cart.total*100,   
            });
            navigate("/success",{data:res.data});
         }catch(e){}
      }
     stripeToken && makeRequest();
   },[stripeToken,cart.total,navigate])
  return (
    <Container>
       <Navbar/>
       <Announcement/>
       <Wrapper>
         <Title>YOUR BAG</Title>
         <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag({cart.quantity})</TopText>
                <TopText>Your Wshilist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT</TopButton>
         </Top>
         <Bottom>
            <Info>
               {cart.products.map(product=>(
                <Product>
                    <ProductDetails>
                       <Image src={product.img}/>
                        <Details>
                            <ProductName><b>Product:</b>{product.title}</ProductName>
                            <ProductId><b>ID:</b>{product._id}</ProductId>
                            <ProductQuantity><b>Qty:</b>{product.quantity}</ProductQuantity>
                        </Details>
                    </ProductDetails>
                    <PriceDetail>
                       <ProductAmountContainer>
                         <Remove/>
                         <ProductQuantity style={{border:"1px solid",padding:"10px",borderRadius:"5px"}}>{product.quantity}</ProductQuantity>
                         <Add/>
                       </ProductAmountContainer>
                       <ProductPrice>${product.price*product.quantity}</ProductPrice>
                    </PriceDetail>
                </Product>
                ))}
                <Hr/>
                
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
               <SummaryItem>
                <SummaryItemText>Subtotal </SummaryItemText>
                 <SummaryItemPrice>${cart.total}</SummaryItemPrice>
               </SummaryItem>
               <SummaryItem>
                <SummaryItemText>Tax</SummaryItemText>
                 <SummaryItemPrice>$5.50</SummaryItemPrice>
               </SummaryItem>
               <SummaryItem>
                <SummaryItemText>Estimated Shipping </SummaryItemText>
                 <SummaryItemPrice>$5.99</SummaryItemPrice>
               </SummaryItem>
               <SummaryItem>
                <SummaryItemText>Discount</SummaryItemText>
                 <SummaryItemPrice>-$10</SummaryItemPrice>
               </SummaryItem>
               <SummaryItem type="total">
                <SummaryItemText>Total </SummaryItemText>
                 <SummaryItemPrice>$111.49</SummaryItemPrice>
               </SummaryItem>
               <StripeCheckout 
                 name="Mayra"
                 billingAddress
                 shippingAddress
                 description={`Your total is ${cart.total}`}
                 amount={cart.total*100}
                 token={onToken}
                 stripeKey={KEY}
                 >
               <Button>CHECHOUT NOW</Button>
               </StripeCheckout>
            </Summary>
         </Bottom>
       </Wrapper>
       <Footer/>

    </Container>
  )
}

export default Cart;