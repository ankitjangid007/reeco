"use client";

import { changeOrderStatus } from "@/features/slices/productStatusSlice";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "./Button";
import Modal from "./modals/Modal";

import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import EditOrderModal from "./modals/EditOrderModal";

interface TableColumn {
  header: string;
  accessor: string;
}

interface TableProps {
  data: any[];
  columns: TableColumn[];
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  padding: 010px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
`;

const TableData = styled.td`
  padding: 15px 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductNameColumn = styled.td`
  padding: 15px 10px;
  width: 400px;
`;

const StatusText = styled.div<{
  isApproved?: boolean;
  isEmpty?: boolean;
}>`
  color: #fff;
  width: 150px;
  margin-right: 10px;
  padding: ${(props) => (props?.isEmpty ? "0" : "4px")};
  background-color: ${(props) => (props?.isApproved ? "green" : "red")};
  border-radius: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 3;
  justify-content: space-between;
`;

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
  const [selectProductName, setSelectProductName] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [itemId, setItemId] = useState<number | null>(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const dispatch = useDispatch();

  const handleApproveClick = (rowIndex: number) => {
    dispatch(changeOrderStatus({ rowIndex, status: "Approved" }));
  };

  const handleMissingClick = (rowIndex: number, productName: string) => {
    console.log("productName", productName);
    setSelectedRowIndex(rowIndex);
    setSelectProductName(productName);
    setIsModalOpen(true);
  };

  const handleSubmitMissingStatus = (isUrgent: boolean) => {
    if (selectedRowIndex !== null) {
      if (isUrgent) {
        dispatch(
          changeOrderStatus({
            rowIndex: selectedRowIndex,
            status: "Missing-Urgent",
          })
        );
      } else {
        dispatch(
          changeOrderStatus({ rowIndex: selectedRowIndex, status: "Missing" })
        );
      }
      setIsModalOpen(false);
      setIsUrgent((prev) => !prev);
    }
  };

  const handleMissingUrgent = () => {
    setIsUrgent(true);
    handleSubmitMissingStatus(true);
  };

  const handleEditClick = (id: number) => {
    setOpenEditModal(true);
    setItemId(id);
  };

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <TableHeader key={index}>{column.header}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableData key={colIndex}>
                  {column.accessor === "productImg" ? (
                    <Image
                      src={row[column.accessor]}
                      alt={row[column.accessor]}
                      width={50}
                      height={50}
                    />
                  ) : column.accessor === "status" ? (
                    <StatusContainer>
                      <StatusText
                        isApproved={row["status"] === "Approved"}
                        isEmpty={row["status"] == null}
                      >
                        {row["status"]}
                      </StatusText>
                      <ButtonContainer>
                        <Button
                          icon={BsCheckLg}
                          outline
                          noBorder
                          iconColor={
                            row["status"] === "Approved" ? "green" : "black"
                          }
                          onClick={() => handleApproveClick(rowIndex)}
                        />
                        <Button
                          icon={AiOutlineClose}
                          outline
                          noBorder
                          iconColor={
                            row["status"] === "Missing" ||
                            row["status"] === "Missing-Urgent"
                              ? "red"
                              : "black"
                          }
                          onClick={() =>
                            handleMissingClick(rowIndex, row["productName"])
                          }
                        />
                        <Button
                          label="Edit"
                          onClick={() => handleEditClick(row.productId)}
                        />
                      </ButtonContainer>
                    </StatusContainer>
                  ) : column.accessor === "productName" ? (
                    <ProductNameColumn>
                      {row[column.accessor]}
                    </ProductNameColumn>
                  ) : (
                    row[column.accessor]
                  )}
                </TableData>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <Modal
        title="Missing product"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        actionLabel="Yes"
        secondaryActionLabel="No"
        body={
          <div>
            {selectProductName}, <strong>urgent?</strong>
          </div>
        }
        secondaryAction={() => handleSubmitMissingStatus(false)}
        onSubmit={handleMissingUrgent}
      />

      <EditOrderModal
        itemId={itemId}
        isOpen={openEditModal}
        onClose={() => setOpenEditModal(false)}
      />

      {/* <Modal
        title={selectProductName}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        actionLabel="Yes"
        secondaryActionLabel="No"
        secondaryAction={() => handleSubmitMissingStatus(false)}
        onSubmit={handleMissingUrgent}
      /> */}
    </>
  );
};

export default Table;
