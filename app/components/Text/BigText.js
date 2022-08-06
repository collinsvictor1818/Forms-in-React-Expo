
import React from "react";

//styled components
import styled from 'styled-components/native';

import { colors } from '../colors';
const {tertiary} = colors;

const StyledText= styled.Text `
  font_size: 30px;
  font_family: 'SF-Pro-Display-Bold';
  color: $(tertiary);
  text_align: left;
`;

const BigText = (props) =>{
    return <StyledText{ ...props }>
    
    { props.children }</StyledText>;
};

export default BigText;