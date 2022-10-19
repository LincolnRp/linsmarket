import React, { useContext } from "react";
import { useForm } from "./../../hooks/useForm";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import {
  DivContainer,
  DivHeaderSignup,
  HeaderOval,
  LogoOval,
  DivContainerLogin,
  PText,
  BlueText,
  DivInput,
  TextInput,
  InputLock,
  InputUser,
} from "./style";
import { useNavigate } from "react-router-dom";
import logoPNG from "./../../assets/images/logo.png";
import { login, signup } from "./../../services/user";
import goToPage from "./../../routes/coordinator";
import ovalBG from "./../../assets/images/oval.png";
import lock from "./../../assets/images/lock.png";
import user from "./../../assets/images/user.png";
import mail from "./../../assets/images/mail.png";
import useUnProtectedPage from "../../hooks/useUnprotected";
import { GlobalContext } from "../../global/GlobalContext";

function LoginPage() {
  useUnProtectedPage();
  const Navigate = useNavigate();

  const values = useContext(GlobalContext);
  const setUserInfo = values.setUserInfo;

  const [form, onChange, cleanFields] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    await signup(form, cleanFields, Navigate, setUserInfo);
  };

  return (
    <DivContainer>
      <DivHeaderSignup>
        <HeaderOval src={ovalBG} alt={"Oval Image"} />
        <LogoOval
          src={logoPNG}
          alt={"LinsMarket Logo"}
          onClick={() => goToPage(Navigate, "")}
        />
      </DivHeaderSignup>
      <DivContainerLogin>
        <form onSubmit={onSubmitForm}>
          <DivInput>
            <TextInput>nome</TextInput>
            <InputGroup>
              <InputLeftElement marginBlock={4}>
                <InputUser src={user} alt={"User Image Input"}></InputUser>
              </InputLeftElement>
              <Input
                variant={"flushed"}
                w={"320px"}
                placeholder="nome"
                value={form.name}
                minLength={"6"}
                type={"text"}
                name="name"
                required
                onChange={onChange}
                h={"10vh"}
                marginBlock={"1vh"}
              ></Input>
            </InputGroup>

            <TextInput>e-mail</TextInput>
            <InputGroup>
              <InputLeftElement marginBlock={4}>
                <InputUser src={mail} alt={"Mail Image Input"}></InputUser>
              </InputLeftElement>
              <Input
                variant={"flushed"}
                w={"320px"}
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

            <TextInput>senha</TextInput>

            <InputGroup>
              <InputLeftElement marginBlock={4}>
                <InputLock src={lock} alt={"Lock Image Input"}></InputLock>
              </InputLeftElement>
              <Input
                variant={"flushed"}
                w={"320px"}
                placeholder="Mínimo de 6 caracteres"
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
          </DivInput>

          <Button
            type="submit"
            bg={"#FD8700"}
            _hover={{ bg: "#FD8700" }}
            marginLeft={"1.5"}
            color={"white"}
            width={"309px"}
            height={"57px"}
            marginBlock={"5vh"}
          >
            Logar
          </Button>
        </form>

        <PText>
          Já tem uma conta ?{" "}
          <BlueText onClick={() => goToPage(Navigate, "login")}>
            Entre !
          </BlueText>
        </PText>
      </DivContainerLogin>
    </DivContainer>
  );
}

export default LoginPage;
