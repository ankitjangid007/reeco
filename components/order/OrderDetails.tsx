"use client";

import styled from "styled-components";
import { BiDrink } from "react-icons/bi";
import { PiPinwheelLight } from "react-icons/pi";
import { GiChicken, GiShipWheel, GiCakeSlice } from "react-icons/gi";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px auto;
  padding: 20px;
`;

const InnerDiv = styled.div`
  padding: 10px 25px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const DetailTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #ccc;
  margin-bottom: 10px;
`;

const DetailContent = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const Separator = styled.div`
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 80%;
  background-color: #ccc;
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OrderDetail = () => {
  return (
    <Container>
      <InnerDiv>
        <DetailTitle>Supplier</DetailTitle>
        <DetailContent>East Coast fruits & vegetable</DetailContent>
        <Separator />
      </InnerDiv>
      <InnerDiv>
        <DetailTitle>Shipping Date</DetailTitle>
        <DetailContent>Thu, Feb 10</DetailContent>
        <Separator />
      </InnerDiv>
      <InnerDiv>
        <DetailTitle>Total</DetailTitle>
        <DetailContent>$ 15,028.3</DetailContent>
        <Separator />
      </InnerDiv>
      <InnerDiv>
        <DetailTitle>Category</DetailTitle>
        <DetailContent>
          <Category>
            <PiPinwheelLight size={24} fill="gray" />
            <GiShipWheel size={24} fill="gray" />
            <GiCakeSlice size={24} fill="gray" />
            <GiChicken size={24} fill="gray" />
            <BiDrink size={24} fill="gray" />
            <BiDrink size={24} fill="gray" />
          </Category>
        </DetailContent>
        <Separator />
      </InnerDiv>
      <InnerDiv>
        <DetailTitle>Department</DetailTitle>
        <DetailContent>300-444-678</DetailContent>
        <Separator />
      </InnerDiv>
      <InnerDiv>
        <DetailTitle>Status</DetailTitle>
        <DetailContent>Awaiting for approval</DetailContent>
      </InnerDiv>
    </Container>
  );
};

export default OrderDetail;
