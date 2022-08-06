import { ReactNode } from "react";
// ensures text, views, and other custom components are accepted as children
import { StyleProp, ViewStyle } from "react-native";

export interface ContainerProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}
 
