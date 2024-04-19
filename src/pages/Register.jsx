import React from 'react'
import styled from '@emotion/styled';

const Container=styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://thebrownfirangi.com/wp-content/uploads/2021/05/Ethnic-Indian-Dress.jpg");
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items:center;
`;
const Wrapper=styled.div`
   width:50%;
   padding:20px;
   background-color:#fff;
   border-radius:10px;
`;
const Title=styled.h1`
   font-size:24px;
   font-weight:300;
`;
const Form=styled.form`
   display: flex;
   flex-wrap:wrap;

`;
const Input=styled.input`
  flex:1;
  min-width:40%;
  margin:20px 10px 0 0;
  padding:6px;
`;
const Agreement=styled.span`
  font-size:12px;
  margin:15px 0;
`;
const Button=styled.button`
  width:40%;
  border: none;
  padding:10px 20px;
  color:white;
  background-color:#f38cee;
  cursor:pointer;
  font-weight:500;
`;
function Register() {
  return (
    <Container>
       <Wrapper>
          <Title>REGISTER</Title>
          <Form>
             <Input placeholder="First name"/>
             <Input placeholder="Last Name"/>
             <Input placeholder="username"/>
             <Input placeholder="Email"/>
             <Input placeholder="password"/>
             <Input placeholder="Confirm password"/>
             <Agreement>
                By creating an account, I consent to the proccessing of my personal data in accordance with the <b>PRIVACY POLICY</b>
             </Agreement>
             <Button>CREATE</Button>
          </Form>
       </Wrapper>
    </Container>
  )
}

export default Register;