import React from "react";
import { useForm } from "../../../hooks/useForm";
import { DivContainer, DivInput, InputUser, InputLock } from "./style";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import lock from "./../../../assets/images/lock.png";
import mail from "./../../../assets/images/mail.png";
import { loginAdmin } from "../../../services/admin";

function AdminLoginPage() {
  const onSubmitForm = (e) => {
    e.preventDefault();
    loginAdmin(form, cleanFields, Navigate);
  };

  const [form, onChange, cleanFields] = useForm({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  return (
    <DivContainer>
      <h1>Login</h1>

      <form onSubmit={onSubmitForm}>
        <DivInput>
          <InputGroup>
            <InputLeftElement marginBlock={4}>
              <InputUser src={mail} alt={"Input Mail"}></InputUser>
            </InputLeftElement>
            <Input
              variant={"flushed"}
              w={"100%"}
              pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
              placeholder="email@dominio.com"
              value={form.email}
              type={"email"}
              name="email"
              required
              onChange={onChange}
              h={"10vh"}
              marginBlock={"1vh"}
            ></Input>
          </InputGroup>

          <InputGroup>
            <InputLeftElement marginBlock={4}>
              <InputLock src={lock} alt={"Input Lock"}></InputLock>
            </InputLeftElement>
            <Input
              variant={"flushed"}
              w={"100%"}
              placeholder="senha"
              minLength={"6"}
              value={form.password}
              name="password"
              type={"password"}
              required
              onChange={onChange}
              h={"10vh"}
              marginBlock={"1vh"}
            ></Input>
          </InputGroup>
          <Button
            type="submit"
            bg={"#FFC700"}
            _hover={{ bg: "#FFC700" }}
            marginLeft={"1.5"}
            color={"white"}
            width={"309px"}
            height={"57px"}
            marginBlock={"5vh"}
          >
            Logar
          </Button>
        </DivInput>
      </form>
    </DivContainer>
  );
}

export default AdminLoginPage;
