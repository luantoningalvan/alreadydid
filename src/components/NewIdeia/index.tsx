import React, { useCallback, useRef } from "react";
import Modal from "../Modal";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import Input from "../Input";
import Grid from "../Grid";
import { useIdeias } from "../../hooks/IdeiasContext";

interface NewIdeiaProps {
  open: boolean;
  onClose(): void;
}

interface FormData {
  title: string;
  description: string;
  category: string;
}

const NewIdeia: React.FC<NewIdeiaProps> = (props) => {
  const { open, onClose } = props;
  const formRef = useRef<FormHandles>(null);

  const { insertIdeia } = useIdeias();

  const handleSubmit: SubmitHandler<FormData> = useCallback((data) => {
    insertIdeia(data, onClose);
  }, []);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Adicionar ideia"
      footer={{
        primary: {
          text: "Publicar",
          onClick: () => formRef.current?.submitForm(),
        },
      }}
      closeButton
    >
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input name="title" placeholder="Sua ideia resumida" />
          </Grid>
          <Grid item xs={12}>
            <Input name="description" placeholder="Descrição" />
          </Grid>
          <Grid item xs={12}>
            <Input name="category" placeholder="Categoria" />
          </Grid>
        </Grid>
      </Form>
    </Modal>
  );
};

export default NewIdeia;
