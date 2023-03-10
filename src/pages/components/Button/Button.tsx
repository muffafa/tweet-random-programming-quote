import React from "react";

interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick: () => void;
  radius?: string
  width?: string;
  disabled?: boolean,
  textColor?: string, 
  padding?: number,
}

const Button: React.FC<Props> = ({ 
    border = "1px solid",
    color = "#8e8e8e",
    children,
    height,
    onClick, 
    radius = 5,
    width,
    disabled = false,
    textColor =  "white",
    padding = 5,
  }) => { 
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
         color: textColor,
         padding,
      }}
    >
    {children}
    </button>
  );
}

export default Button;
