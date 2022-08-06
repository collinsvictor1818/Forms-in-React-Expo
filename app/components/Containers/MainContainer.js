
import React , { FunctionComponent }from "react";

//styled components
import styled from 'styled-components/native';
import { StatusBarHeight } from "../shared";
import { colors } from '../colors';
const {primary} = colors;

const StyledView = styled.View `
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${primary};
    justify-content: center;
`;

import { ContainerProps } from "./types";

const MainContainer: FunctionComponent<ContainerProps>= (props) =>{
     return <StyledView style={props.style}><>{ props.children}</></StyledView>;
};

export default MainContainer;