import React from 'react'
import styled from '@emotion/styled'
import Newsletter from './Newsletter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {mobile} from "../responsive";

const Container=styled.div`
   background-color:#fff7f7;
    width: 100%;
    height:300px;
    padding:20px;
    display:flex;
    justify-content:space-between;
    ${mobile({height:"550px", flexDirection:"column"})}
`;
const Title = styled.h4`
    margin-bottom:30px;
    ${mobile({marginBottom:"10px"})}
`;
const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
`;
const ListItem = styled.li`
  margin-bottom:10px;
  ${mobile({marginBottom:"5px"})}
`;
const Left=styled.div`
  flex:1;
  ${mobile({flex:0})}
`;
const Center=styled.div`
  flex:1;
  ${mobile({flex:0})}
`;
const Right=styled.div`
 flex:1;
 ${mobile({flex:0})}
`;
const SocialContainer=styled.div`
    display:flex;
    margin-top:30px;
`;
const SocialIcon=styled.div`
    width:30px;
    height:30px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    margin-right:10px;
    display:flex;
    justify-content: center;
    align-items: center;
`;

function Footer() {
  return (
    <Container>
       <Left>
         <Title>COLLECTIONS</Title>
         <List>
            <ListItem>SAREES</ListItem>
            <ListItem>SUIT SET</ListItem>
            <ListItem>KURTA</ListItem>
            <ListItem>ACCESSORIES</ListItem>
         </List>
       </Left>
       <Center> <Title>USEFUL LINKS</Title>
         <List>
            <ListItem>OUR STORY</ListItem>
            <ListItem>BLOG</ListItem>
            <ListItem>CONTACT US</ListItem>
            <ListItem>SHIPPING</ListItem>
            <ListItem>TRACK ORDER</ListItem>
            <ListItem>RETURN & EXCHANGE</ListItem>
            <ListItem>FAQ</ListItem>
            <ListItem>PRIVACY POLICY</ListItem>
         </List>        
         </Center>
       <Right>
       <Newsletter/>
       <SocialContainer>
          <SocialIcon color="3B5999">
             <FacebookIcon/>
          </SocialIcon>
          <SocialIcon color="E4405F">
             <InstagramIcon/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
             <TwitterIcon/>
          </SocialIcon>
          <SocialIcon color="E60023">
             <PinterestIcon/>
          </SocialIcon>
       </SocialContainer>     
       </Right>     
    </Container>
  )
}
export default Footer