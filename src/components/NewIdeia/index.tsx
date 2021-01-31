import React from "react";
import Modal from "../Modal";
import { Form } from "@unform/web";
import Input from "../Input";

interface NewIdeiaProps {
  open: boolean;
  onClose(): void;
}

const NewIdeia: React.FC<NewIdeiaProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Modal open={open} onClose={onClose} title="Adicionar ideia" closeButton>
      <Form onSubmit={() => {}}>
        <Input name="fo" placeholder="Sua ideia resumida" />
      </Form>
    </Modal>
  );
};

export default NewIdeia;
