"use client";

import styled from "styled-components";
import Button from "../Button";

const OrderHeaderContainer = styled.div`
  padding: 5px 5%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Breadcrumb = styled.div`
  font-size: 16px;
  color: #0074e4;
  margin-right: 8px;
  margin-bottom: 10px;
`;

const Order = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const OrderHeader = () => {
  return (
    <OrderHeaderContainer>
      <div>
        <Breadcrumb>Order &gt; Order 325GJG865</Breadcrumb>
      </div>
      <InnerDiv>
        <Order>Order 325GJG865</Order>
        <ButtonsContainer>
          <Button label="Back" onClick={() => {}} outline />
          <Button label="Approve Order" onClick={() => {}} />
        </ButtonsContainer>
      </InnerDiv>
    </OrderHeaderContainer>
  );
};

export default OrderHeader;
