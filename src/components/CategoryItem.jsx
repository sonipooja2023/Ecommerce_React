import styled from "@emotion/styled";
import {Link} from "react-router-dom";

const Container=styled.div`
 flex:1;
 margin:3px;
 height:70vh;
 position:relative;
`;
const Image=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;
const Info=styled.div`
  position:absolute;
  width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const Title=styled.h1`
  color:white;
  margin-bottom:10px;
  font-size:25px;
  text-transform:uppercase;
`;
const Button=styled.button`
  border:none;
  padding:8px;
  background-color:white;
  color:gray;
  cursor:pointer;
  font-weight:700;
`;


function CategoryItem({item}){
return(
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} alt={item.alt}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP</Button>
        </Info>
        </Link>
    </Container>
)

}
export default CategoryItem;