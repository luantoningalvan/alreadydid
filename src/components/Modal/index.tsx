import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  Backdrop,
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "./styles";
import { FiX } from "react-icons/fi";
import IconButton from "../IconButton";
import Button from "../Button";

interface ModalProps {
  open: boolean;
  onClose(): void;
  title?: string;
  closeButton?: boolean;
  footer?: {
    primary: {
      text: string;
      onClick(): void;
    };
  };
}

const Modal: React.FC<ModalProps> = (props) => {
  const { open, onClose, title, closeButton, footer, children } = props;

  const modalRef = useRef(null);

  if (!document.getElementById("modal-root")) {
    const elem = document.createElement("div");
    elem.setAttribute("id", "modal-root");
    document.body.appendChild(elem);
  }

  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  useEffect(() => {
    if (open) {
      modalRoot.setAttribute(
        "style",
        "position: fixed;z-index: 1300;inset: 0px;"
      );
    }

    return () => {
      modalRoot.setAttribute("style", "");
    };
  }, [open]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    /* @ts-ignore */
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "Escape") return;

    event.stopPropagation();

    if (onClose) {
      onClose();
    }
  };

  return !open
    ? null
    : ReactDOM.createPortal(
        <>
          <Backdrop />
          <ModalContainer onClick={handleBackdropClick}>
            <ModalBackground ref={modalRef} onKeyDown={handleKeyDown}>
              <ModalHeader>
                {title && <h3>{title}</h3>}
                {closeButton && <IconButton onClick={onClose} icon={FiX} />}
              </ModalHeader>

              <ModalContent>{children}</ModalContent>

              {footer && (
                <ModalFooter>
                  <Button onClick={footer.primary.onClick}>
                    {footer.primary.text}
                  </Button>
                </ModalFooter>
              )}
            </ModalBackground>
          </ModalContainer>
        </>,

        modalRoot as HTMLElement
      );
};

export default Modal;
