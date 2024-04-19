import React from 'react'
import styled from '@emotion/styled'
import { popularProducts } from '../categoryData';
import Product from '../components/Product';
import {mobile} from "../responsive";
import { useState ,useEffect} from 'react';
import axios from 'axios';

const Container=styled.div`
    display:flex;
    padding:20px;
    flex-wrap:wrap;
    justify-content:space-between;
    ${mobile({padding:"10px"})}
`;
function Products({cat,filters,sort}){
  //console.log(cat,filters,sort);
  const [products,setProducts]=useState([]);
  const [filteredProducts,setFilteredProducts]=useState([]);

  useEffect(()=>{
    const getProducts=async()=>{
      try{
           const res=await axios.get(cat? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
           setProducts(res.data);
      }catch(err){

      }
    };
    getProducts();
  },[cat]);

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=>
        Object.entries(filters).every(([key,value])=>item[key].includes(value)))
    );

  },[products,cat,filters]);

  useEffect(()=>{
      if(sort==="Newest"){
        setFilteredProducts((prev)=>
          [...prev].sort((a,b)=>a.createdAt-b.createdAt));
        }
        else if(sort==="Low-High"){
           setFilteredProducts((prev)=>
            [...prev].sort((a,b)=>a.price-b.price));
        }
        else if(sort==="High-Low"){
          setFilteredProducts((prev)=>
           [...prev].sort((a,b)=>b.price-a.price));
       }
      },[sort]);
  return (
    <Container>
        {cat ? filteredProducts.map(item=>(<Product item={item} key={item.id}/>))
        : products.slice(0,8).map(item=>(<Product item={item} key={item.id}/>))
        }
    </Container>
  )
}
export default Products;
