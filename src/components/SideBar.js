import React from 'react';
import styled from 'styled-components';
import Button from "../containers/Button"

const Wrapper= styled.div`
    height: 200px;
    width: 200px;
    margin-top: 10px;
`

const SizeLabel = styled.h1`
font-size: 15px;
`


const SideBar = () => {
    const sizes = ["XS","S", "M", "ML","L","XL","XXL"]
    return (
        <Wrapper>
            <SizeLabel>Sizes:</SizeLabel>
            {
                sizes.map((size) => <Button name={size} key={size} sortSize={()=>{}}/>)
            }
        </Wrapper>
    );
};

export default SideBar;