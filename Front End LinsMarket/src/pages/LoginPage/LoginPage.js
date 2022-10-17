import React, { useEffect } from 'react'
import { useForm } from "./../../hooks/userForm";
import { Button,Icon, Stack, Input, InputGroup, InputLeftElement ,InputRightElement } from '@chakra-ui/react'
import { DivContainer, Logo, DivContainerLogin,PText, BlueText , DivInput, TextInput, InputLock, InputUser } from './style' 
import { useNavigate } from "react-router-dom";
import logoPNG from './../../assets/images/linsmarket-logo-bg.png'
import { login } from "./../../services/user";
import goToPage from "./../../routes/coordinator";
import lock from './../../assets/images/lock.png'
import mail from './../../assets/images/mail.png'
import useUnProtectedPage from '../../hooks/useUnprotected';

function LoginPage() {

  useUnProtectedPage();

  const Navigate = useNavigate();


  const [form, onChange, cleanFields] = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, cleanFields, Navigate);
  };

  return (
    <DivContainer>

       <Logo src={logoPNG}
          width='320px' 
         height='46px'
           onClick={() => goToPage(Navigate, "")}
           alt={"Logo LinsMarket"}
      ></Logo>

      <DivContainerLogin>

      <form onSubmit={onSubmitForm}>
      <DivInput>
                <TextInput>Informe seu E-mail</TextInput>
                <InputGroup>
                <InputLeftElement marginBlock={4}>
                <InputUser src={mail}  alt={"Input Mail"}></InputUser>
                </InputLeftElement>
                    <Input
                      variant={'flushed'}
                      w={'320px'}
                      pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
                      placeholder="email@dominio.com"
                      value={form.email}
                      type={"email"}
                      name="email"
                      required
                      onChange={onChange}
                      h={'10vh'}
                      marginBlock={'1vh'}
                    ></Input>
                  
                </InputGroup>

                <TextInput>sua senha</TextInput>

                <InputGroup>
                <InputLeftElement marginBlock={4}>
                <InputLock src={lock}  alt={"Input Lock"}></InputLock>
                </InputLeftElement>
                    <Input
                     variant={'flushed'}
                      w={'320px'}
                      placeholder="senha"
                      minLength={"6"}
                      value={form.password}
                      name="password"
                      type={"password"}
                      required
                      onChange={onChange}
                      h={'10vh'}
                      marginBlock={'1vh'}
                    ></Input>
                    <InputRightElement  marginBlock={4} width={'100px'}>
                     <BlueText>Esqueceu ?</BlueText>
                    </InputRightElement>
                </InputGroup>
              </DivInput>
    
  
      <Button type="submit" 
      bg={'#FD8700'} 
      marginLeft={'1.5'}
      color={'white'} 
      width={'309px'}
      height={'57px'}
      marginBlock={'5vh'}
      >Logar</Button>
      </form>

      <PText>Não tem uma conta ? <BlueText onClick={() => goToPage(Navigate, "signup")}>Cadastre-se !</BlueText></PText>
  
      </DivContainerLogin>
    </DivContainer>
 
    
  )
}

export default LoginPage