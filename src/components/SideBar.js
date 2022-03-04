import React from 'react';
import styled from 'styled-components';
import Button from "../containers/Button"

const Wrapper= styled.div`
    height: 200px;
    width: 200px;
`


const SideBar = () => {
    const sizes = ["XS","S", "M", "ML","L","XL","XXL"]
    return (
        <Wrapper>
            {
                sizes.map((size) => <Button name={size} sortSize={()=>{}}/>)
            }
        </Wrapper>
    );
};

export default SideBar;