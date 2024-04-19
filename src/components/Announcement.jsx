import React from "react";
import styled from "@emotion/styled";
import {mobile} from "../responsive"
const Container=styled.div`
   height:30px;
   background-color: #c05f98;
   color: white;
   display:flex;
   align-items:center;
   justify-content:center;
   ${mobile({height:"20px",fontSize:"11px"})}
`;
function Announcement(){
    return(
       <Container>
        Free Shipping on Orders over $50
       </Container>
         )
}
export default Announcement;
