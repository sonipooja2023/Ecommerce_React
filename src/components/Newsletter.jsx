import React from 'react';
import styled from '@emotion/styled';


const Container=styled.div``;
const Title=styled.h4`
margin-bottom:10px;
`;
const Description=styled.p`
margin-bottom:10px;
`;
const InputContainer=styled.div``;
const Input=styled.input`
  border:none;
  border-bottom: 2px solid black;
  padding:8px;
`;
const Button=styled.button`
  padding:8px;
  border-radius:20px;
  background-color:#000;
  color:#fff;
  margin-left:5px;
  width:90px;
  letter-spacing: 1px;
`;

function Newsletter() {
  return (
    <Container>
      <Title>SIGN UP AND SAVE</Title>
      <Description>Subscribe to get Special offers and deals.</Description>
      <InputContainer>
      <Input placeholder='Enter your Email'/>
       <Button>
         Subscribe
       </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter