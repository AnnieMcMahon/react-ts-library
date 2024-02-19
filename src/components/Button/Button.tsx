import React from "react";
import "./Button.css";

export interface ButtonProps{
    label: string;
    color: string;
}

const Button = ( {label, color}: ButtonProps) => {
    return <button className="btn" style={{backgroundColor: color}}>{label}</button>
}

export default Button;