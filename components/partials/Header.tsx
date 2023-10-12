"use client";

import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import { TfiShoppingCart } from "react-icons/tfi";
import Logo from "../Logo";
import { IoIosArrowDown } from "react-icons/io";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 3%;
  background-color: #20361b;
  color: #fff;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.div`
  font-size: 18px;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;

const CartIconContainer = styled.div`
  position: relative;
  margin-right: 16px;
`;

const CartBadge = styled.div`
  position: absolute;
  top: -6px;
  left: -10px;
  background-color: green;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 10px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSide>
        <Logo />
        <Navbar />
      </LeftSide>
      <RightSide>
        <CartIconContainer>
          <TfiShoppingCart size={24} />
          <CartBadge>2</CartBadge>{" "}
        </CartIconContainer>
        <Username>
          Hello, Ankit <IoIosArrowDown />
        </Username>
      </RightSide>
    </HeaderContainer>
  );
};

export default Header;
