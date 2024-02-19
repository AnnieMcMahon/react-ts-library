import React from 'react';

interface ButtonProps {
    label: string;
    color: string;
}
declare const Button: ({ label, color }: ButtonProps) => React.JSX.Element;

export { Button };
