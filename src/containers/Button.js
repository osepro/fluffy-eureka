import React from 'react';
import styled from 'styled-components';

const Size = styled.button`
    background: #CCCCCC;
    border-radius: 50%;
    border: 2px solid white;
    color: black;
    margin: 0 0.2em;
    width: 45px;
    height: 45px;
    font-size: 0.7em;
    text-align: center;
    cursor: pointer;
`

const Button = ({name, sortSize}) => {
    return (
        <Size onClick={()=>sortSize(name)}>
            {name}
        </Size>
    );
};

export default Button;