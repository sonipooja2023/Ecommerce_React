import React from 'react'
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import axios from "axios";
import {useLocation} from "react-router-dom";
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import { publicRequest } from '../requestMethods';

const Container=styled.div``;
const Wrapper=styled.div`
   padding:50px;
   display:flex;
`;
const ImageContainer=styled.div`
   flex:1;
`;
const Image=styled.img`
   width:100%;
   height:60vh;
`;
const InfoContainer=styled.div`
   flex:1;
   padding:0 50px;
   display:flex;
   flex-direction:column;
`;
const Title=styled.h1`
   font-weight:300;
   margin-bottom:20px;
`;
const Description=styled.p`
   margin:20px 0;
`;
const Price=styled.span`
   font-weight: 400;
   font-size: 20px;
`;
const Filter=styled.div`
   font-size:14px;
`;
const Select=styled.select`
   margin:10px 0;
   width:70px;

`;
const Options=styled.option``;
const Button=styled.button`
    padding:8px;
    background-color:#fff;
    border:2px solid #da73bb;
    font-weight:500;
    margin-top:10px;
    width:150px;

    &:hover{
        background-color: #faf5f9;
    }
`;

function Product() {
   const location=useLocation();
    const id=location.pathname.split('/')[2];
    const [product,setProduct]=useState({});
    const [quantity,setQuantity]=useState(1);
    const [size,setSize]=useState();
    const dispatch=useDispatch();

    useEffect(()=>{
       const getProduct=async()=>{
         try{
           //const res=await axios.get("http://localhost:5000/api/products/find/"+id);
           const res=await publicRequest.get("/products/find/"+id);
           setProduct(res.data);
         }catch(err){

         }
       }
       getProduct();
    },[id]);

    function handleAddToCart(){
        dispatch(addProduct({...product,quantity,size}));
    };
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.img}/>      
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Price>${product.price}</Price>
                <Description>{product.desc}</Description>
                <Filter>Select Size</Filter>
                <Select onChange={(e)=>setSize(e.target.value)}>
                    <Options selected>--</Options>
                    {product.size?.map(item=><Options key={item}>{item}</Options>)}
                </Select>
                <Filter>Select Quantity</Filter>
                <Select name="quantity" onChange={(e)=>setQuantity(e.target.value)}>
                    <Options selected>--</Options>
                    <Options value="1">1</Options>
                    <Options value="2">2</Options>
                    <Options value="3">3</Options>
                    <Options value="4">4</Options>
                    <Options value="5">5</Options>
                </Select>
                
                <Button onClick={(e)=>handleAddToCart()}>
                    ADD TO CART
                </Button>
            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product;