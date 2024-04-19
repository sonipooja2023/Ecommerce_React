import styled from "@emotion/styled";
import { catogoryData } from "../categoryData";
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive";


const Container=styled.div`
   display:flex;
   padding:20px;
   justify-content:space-between;
   ${mobile({padding:"0px", flexDirection:"column"})}

`;
function Categories(){
return(
    <Container>
        {catogoryData.map(item=>(
        <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
)

}
export default Categories;