import React from "react";
import { THEME, BASE_STYLE } from "./Button.style";

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
  theme?: string;
  textClassName?: string;
}

const Button: React.FC<Props> = ({
  onClick,
  children,
  theme = "primary",
  textClassName,
}) => {
  const buttonClassName: string = [BASE_STYLE, THEME[theme], textClassName].join(" ");

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
