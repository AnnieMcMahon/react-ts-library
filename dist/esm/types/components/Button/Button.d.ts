import React from "react";
import "./Button.css";
export interface ButtonProps {
    label: string;
    color: string;
}
declare const Button: ({ label, color }: ButtonProps) => React.JSX.Element;
export default Button;
