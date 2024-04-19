import React from 'react'
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Footer from '../components/Footer';
import {mobile} from '../responsive';
import {useLocation} from "react-router-dom";
import { useState } from 'react';

const Container=styled.div``;
const Title=styled.h2`
    margin: 20px;
    ${mobile({margin:"5px",fontSize:"18px"})};
`;
const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})};
`;
const Filter=styled.div`
    margin: 20px;
    ${mobile({margin:"5px"})};
`;
const FilterText=styled.span`
    font-size:15px;
    font-weight:500;
    margin-right:10px;
    ${mobile({margin:"5px",fontSize:"13px",marginRight:"5px"})};
`;
const Select=styled.select`
    padding:3px;
    margin-right:10px;
    ${mobile({padding:0,marginRight:"5px",fontSize:"10px"})};

`;
const Option=styled.option``;

function ProductList() {
    const location=useLocation();
    const cat=location.pathname.split('/')[2];
    const [filters,setFilters]=useState({});
    const [sort,setSort]=useState("Newest");

    const handleFilters=(e)=>{
        const value=e.target.value;
        setFilters({...filters,[e.target.name]:value,});
    }
  return (
    <Container>
       <Navbar/>
       <Announcement/>
       <Title>{cat}</Title>
       <FilterContainer>
          <Filter>
            <FilterText>Filter</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled>Color</Option>
                    <Option>Red</Option>
                    <Option>Orange</Option>
                    <Option>Pink</Option>
                    <Option>Green</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                </Select>
                <Select name="fabric" onChange={handleFilters}>
                    <Option disabled>Fabric</Option>
                    <Option>Cotton</Option>
                    <Option>Silk</Option>
                    <Option>Organza</Option>
                    <Option>Net</Option>
                    <Option>Chiffon</Option>
                    <Option>Georgette</Option>
                </Select>
          </Filter>
          <Filter>
          <FilterText>Sort</FilterText>
              <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option value="Newest">Newest</Option>
                    <Option value="High-Low">Price(High-Low)</Option>
                    <Option value="Low-High">Price(Low-High)</Option>
                    
                </Select>    
          </Filter>
       </FilterContainer>
       <Products cat={cat} filters={filters} sort={sort}/>
       <Footer/>
    </Container>
  )
}

export default ProductList;