import { useState } from "react";
import styled from "@emotion/styled";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { sliderItems } from "../SlideData";
import { mobile } from "../responsive";

const Container=styled.div`
   width: 100%;;
   height: 90vh;
   display:flex;
   position: relative;
   background-color:#fff7f7;
   overflow: hidden;
   ${mobile({height:"300px"})}
   `;
   const Arrow=styled.div`
     width: 50px;
     height: 50px;
     display:flex;
     align-items: center;
     justify-content: center;
     position:absolute;
     top:0;
     bottom:0;
     margin:auto;
     left:${props => props.direction === "left" && "10px"};
     right:${props => props.direction === "right" && "10px"};
     cursor:pointer; 
     z-index:2;
   `;
   const Wrapper=styled.div`
    height: 100%;
    display:flex;
    transition: all 1.5s ease;
    transform:translateX(${(props) => props.slideIndex * -100}vw);
   `;
   const Slide=styled.div`
      width:100vw;
      height:100vh;
      display: flex;
      align-items: center;
      ${mobile({height:"300px"})}
   `;
   const ImgContainer=styled.div`
       height:100%;
       flex:1;   
   `;
   const Image=styled.img`
      height:100%;
      width:80%;
   `;
   const InfoContainer=styled.div`
       flex:1;
       padding:50px;
       ${mobile({padding:"10px"})}
   `;
   const Title=styled.h1`
   font-size:50px;
   ${mobile({fontSize:"18px"})}
   `;
   const Description=styled.p`
   margin:50px 0;
   font-size:20px;
   font-weight:500;
   letter-spacing:2px;
   ${mobile({fontSize:"14px",margin:"10px "})}
   `;
   const Button=styled.button`
   padding:7px;
   font-size:15px;
   font-weight:500;
   background-color:transparent;
   ${mobile({fontSize:"13px", padding:"5px"})}   
   `;
function Slider(){
     const [slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction) => {
         if(direction==="left")
         setSlideIndex(slideIndex > 0 ? slideIndex-1 : 0);
         else
         setSlideIndex(slideIndex < 2 ? slideIndex+1 : 2);
    }
    return (
   <Container>
     <Arrow direction="left" onClick={()=>handleClick('left')}>
        <ChevronLeftOutlinedIcon />
     </Arrow>
     <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item =>(
           <Slide bg={item.bg} key={item.id}>
           <ImgContainer>
           <Image src={item.img} alt={item.alt}/>
          </ImgContainer>
          <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>SHOP NOW</Button>
          </InfoContainer>
          </Slide>
        ))}       
     </Wrapper>
     <Arrow direction="right" onClick={()=>handleClick('right')}>
        <ChevronRightOutlinedIcon />
     </Arrow>
   </Container>
    )
}
export default Slider;