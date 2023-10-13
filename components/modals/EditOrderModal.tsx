"use client";

import { memo } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import styled from "styled-components";

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Title = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Brand = styled.p`
  color: gray;
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ProductImage = styled.div`
  width: 30%;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Label = styled.p`
  width: 30%;
`;

const InputContent = styled.div`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 10px;
  width: 30%;
`;

interface EditOrderModalProps {
  itemId: number | null;
  isOpen: boolean;
  onClose: () => void;
}

const EditOrderModal: React.FC<EditOrderModalProps> = ({
  itemId,
  isOpen,
  onClose,
}) => {
  const orderData = useSelector((state: any) => state.product);

  const order = orderData?.filter((item: any) => item.productId === itemId);

  const bodyContent = (
    <>
      <PopupHeader>
        <Title>Title That May Be Long and Overflow</Title>
        <Brand>Brand Name</Brand>
      </PopupHeader>
      <PopupContent>
        <ProductImage>
          <Image
            src={order[0]?.productImg}
            alt={order[0]?.productname}
            width={100}
            height={100}
          />
        </ProductImage>
        <ProductDetails>
          <DetailsRow>
            <InputContent>
              <Label>Price($)</Label>
              <Input type="text" name="price" id="price" />
            </InputContent>
          </DetailsRow>
          <DetailsRow>
            <InputContent>
              <Label>Quantity</Label>
              <Input type="text" name="quantity" id="quantity" />
            </InputContent>
          </DetailsRow>
          <DetailsRow>
            <InputContent>
              <Label>Total</Label>
              <Input type="text" name="total" id="total" />
            </InputContent>
          </DetailsRow>
        </ProductDetails>
      </PopupContent>
    </>
  );

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        actionLabel="Send"
        secondaryActionLabel="Cancel"
        body={bodyContent}
        secondaryAction={onClose}
        onSubmit={() => {}}
      />
    </div>
  );
};

export default memo(EditOrderModal);
