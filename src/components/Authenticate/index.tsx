import React, { useState } from "react";
import Modal from "../Modal";
import { Form } from "@unform/web";
import Input from "../Input";
import Grid from "../Grid";
import Button from "../Button";
import { useAuth } from "../../hooks/AuthContext";

interface NewIdeiaProps {
  open: boolean;
  onClose(): void;
}

const NewIdeia: React.FC<NewIdeiaProps> = (props) => {
  const { open, onClose } = props;
  const [form, setForm] = useState("signin");
  const { login, signup } = useAuth();

  const handleSignIn = ({ email, password }: any) => {
    login({ email, password });
    onClose();
  };

  const handleSignUp = ({ email, password }: any) => {
    signup({ email, password });
    onClose();
  };

  return (
    <Modal title="Entrar" open={open} onClose={onClose} closeButton>
      {form === "signin" ? (
        <Form onSubmit={handleSignIn}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input name="email" placeholder="E-mail" />
            </Grid>
            <Grid item xs={12}>
              <Input name="password" placeholder="Senha" type="password" />
            </Grid>
            <Grid item xs={12}>
              <Button>Entrar</Button>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <button type="button" onClick={() => setForm("signup")}>
                Não possui uma conta? Crie uma agora mesmo
              </button>
            </Grid>
          </Grid>
        </Form>
      ) : (
        <Form onSubmit={handleSignUp}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input name="email" placeholder="E-mail" />
            </Grid>
            <Grid item xs={12}>
              <Input name="password" placeholder="Senha" type="password" />
            </Grid>
            <Grid item xs={12}>
              <Button>Criar conta</Button>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <button type="button" onClick={() => setForm("signin")}>
                Já possui uma conta? Faça login
              </button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Modal>
  );
};

export default NewIdeia;
