import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { login } from '../redux/apiCalls';
import { useDispatch ,useSelector} from 'react-redux';

const Container=styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/indian-americans-guide-to-shopping-online-for-desi-wear.png");
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
   flex-direction:column;

`;
const Input=styled.input`
   flex:1;
   min-width:40%;
   margin:10px 0;
   padding:6px;
`;

const Button=styled.button`
    width:40%;
    border: none;
    padding:10px 20px;
    color:white;
    background-color:#f38cee;
    cursor:pointer;
    font-weight:500;
    &:disabled{
      color:gray;
      cursor:not-allowed;
    }
`;
 const Link=styled.a`
    margin:5px 0;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
 `;

const Error=styled.span`
color:red;
`;

function Login() {
   const [username,setUsername]=useState("");
   const [password,setPassword]=useState("");
   const dispatch=useDispatch();
   const {isFetching,error}=useSelector((state)=>state.user);
   const loginBtn=(e)=>
   {
      e.preventDefault();
      login(dispatch,{username,password});
   }
  return (
    <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>          
             <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
             <Input placeholder="password"onChange={(e)=>setPassword(e.target.value)}/>
             <Button onClick={loginBtn} disabled={isFetching}>LOG IN</Button>
             {error && <Error>Something went wrong!!!</Error>}
             <Link>FORGOT PASSWORD?</Link>
             <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
       </Wrapper>
    </Container>
  )
}

export default Login;