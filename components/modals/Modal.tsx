"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import styled from "styled-components";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const StyledModal = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
  }

  .modal-content {
    position: relative;
    width: 100%;
    max-width: 500px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.3s, opacity 0.3s;

    .modal-header {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #e0e0e0;

      .close-button {
        position: absolute;
        top: 6px;
        right: 9px;
        padding: 1px;
        transition: border 0.3s;

        svg {
          font-size: 18px;
        }

        &:hover {
          opacity: 0.7;
        }
      }

      .title {
        text-align: center;
        font-size: 16px;
        font-weight: 600;
      }
    }

    .modal-body {
      padding: 10px;
    }

    .modal-footer {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      float: right;

      .button-container {
        display: flex;
        align-items: center;
        gap: 10px;

        .secondary-button {
          width: 100%;
        }
      }
    }
  }

  &.closed {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <StyledModal>
      <div className={`overlay ${showModal ? "" : "closed"}`}>
        <div className="modal-content">
          <div className="modal-header">
            <button className="close-button" onClick={handleClose}>
              <IoMdClose />
            </button>
            <div className="title">{title}</div>
          </div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">
            <div className="button-container">
              {secondaryAction && secondaryActionLabel && (
                <Button
                  disabled={disabled}
                  label={secondaryActionLabel}
                  onClick={handleSecondaryAction}
                  outline
                />
              )}
              <Button
                disabled={disabled}
                label={actionLabel}
                onClick={handleSubmit}
              />
            </div>
            {footer}
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
