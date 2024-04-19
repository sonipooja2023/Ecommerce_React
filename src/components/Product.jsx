import React from 'react'
import styled from '@emotion/styled';
import {Link} from "react-router-dom";

const Container=styled.div`
   flex:1;
   margin: 5px;
   min-width:280px;
   height:390px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   position:relative;
`;
const Image=styled.img`
  height:350px;
  width:250px;
  
`;
const Button=styled.button`
    padding:5px;
    width:120px;
    font-weight:600;
`;
const Details=styled.div`
   height:40px;
   margin:10px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   font-size:13px;
`;
  const Info=styled.div`
    font-weight:600;
  `;
  const Price=styled.div`
    font-weight:500;
  `;
function Product({item}){
  return (
    <Container>
        <Link to={`/product/${item._id}`} style={{textDecoration:"none"}}>    
        <Image src={item.img} alt={item.alt}/>
        <Details>
        <Button> BUY NOW</Button> 
          <Info>{item.title}</Info> 
           <Price>${item.price}</Price>
        </Details>
        </Link>
    </Container>
    
  )
}
export default Product;
