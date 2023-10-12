"use client";

import Button from "@/components/Button";
import OrderHeader from "@/components/order/OrderHeader";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import styled from "styled-components";
import data from "@/data/data.json";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeData } from "@/features/slices/productStatusSlice";
import OrderDetail from "@/components/order/OrderDetails";
import { AiOutlinePrinter } from "react-icons/ai";

const columns = [
  { header: "", accessor: "productImg" },
  { header: "Product Name", accessor: "productName" },
  { header: "Brand", accessor: "brand" },
  { header: "Price", accessor: "price" },
  { header: "Quantity", accessor: "quantity" },
  { header: "Total", accessor: "total" },
  { header: "Status", accessor: "status" },
];

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80vw;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px auto;
  padding: 20px;
`;

const HeaderActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  justify-content: space-around;
`;

const Orderpage = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state: any) => state.product);

  useEffect(() => {
    dispatch(initializeData(data));
  }, [dispatch]);

  return (
    <>
      <OrderHeader />
      <OrderDetail />
      <Container>
        <HeaderActions>
          <SearchBar />
          <ButtonContainer>
            <Button label="Add item" onClick={() => {}} outline />
            <AiOutlinePrinter size={30} fill="#20361b" />
          </ButtonContainer>
        </HeaderActions>
        <Table data={orderData} columns={columns} />
      </Container>
    </>
  );
};

export default Orderpage;
