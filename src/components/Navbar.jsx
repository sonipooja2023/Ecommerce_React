import react from "react";
import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Container=styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
`;
const Wrapper= styled.div`
    padding:10px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    ${mobile({padding:"10px 0"})}
`;
const Left=styled.div`
   flex:1;
   display:flex;
   align-items:center;   
`;
const Language =styled.span`
   font-size:14px;
   cursor:pointer;
   ${mobile({display:"none"})};
`;
const SerachContainer =styled.div`
   border: 1px solid lightgray;
   display:flex;
   align-items:center;
   margin-left:25px;
   padding:5px;
   ${mobile({margin:"auto"})};
`;
const Input=styled.input`
border: none;
${mobile({width:"50px"})};
`;
const Center=styled.div`
   flex:1; 
   text-align:center;
`;
const Logo=styled.h1`
   font-weight:bold;
   color:#df54a5;
   ${mobile({fontSize:"24px"})};
`;
const Right=styled.div`
   flex:1; 
   display:flex;
   align-items:center;
   justify-content:flex-end;
   ${mobile({flex:"2",justifyContent:"center"})};
`;
const MenuItem=styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:20px;
  ${mobile({fontSize:"12px", marginLeft:"10px"})};
`;
function Navbar(){
   const quantity=useSelector(state=>state.cart.quantity);
   console.log(quantity);
    return (
         <Container>
            <Wrapper>
            <Left>
            <Language>EN</Language>
            <SerachContainer><Input placeholder="Search"/><Search style={{color:"gray",fontsize:"16px"}}/></SerachContainer>
            </Left>
            <Center><Logo>MAYRA</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                   < ShoppingCartOutlinedIcon/>
                 </Badge>
                </MenuItem>
                </Link>
                </Right>
            </Wrapper>
            
         </Container>
    )
}
export default Navbar;