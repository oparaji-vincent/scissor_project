import React, { ReactNode } from "react";
import "../components/button.css";

const Button: React.FC<{
  className: string;
  onclick?:
    | ((event: React.MouseEvent) => void)
    | ((event: React.FormEvent) => void);
  children: ReactNode;
}> = (props) => {
  return (
    <button onClick={props.onclick} className={`btn ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
