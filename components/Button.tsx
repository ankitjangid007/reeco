"use client";

import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

interface ButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  iconColor?: string;
  noBorder?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 30px;
  cursor: pointer;
  padding: 5px 15px;
  border: ${(props) => (props?.noBorder ? "none" : "2px solid #20361b")};
  font-size: ${(props) => (props?.small ? "0.875rem" : "1rem")};
  color: ${(props) => (props?.outline ? "#20361b" : "#fff")};
  background-color: ${(props) => (props?.outline ? "#fff" : "#20361b")};
  opacity: ${(props) => (props?.disabled ? "0.7" : "1")};
  pointer-events: ${(props) => (props?.disabled ? "none" : "auto")};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  iconColor,
  noBorder,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      outline={outline}
      small={small}
      noBorder={noBorder}
    >
      {Icon && <Icon size={24} fill={iconColor} />}
      {label && label}
    </StyledButton>
  );
};

export default Button;
