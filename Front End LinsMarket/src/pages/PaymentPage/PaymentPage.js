import React, { useContext } from "react";
import { Button, Input, InputGroup, Stack } from "@chakra-ui/react";
import {
  DivContainer,
  DivInput,
  DivImage,
  DivLocation,
  DivImageMethods,
} from "./style";

import { useForm } from "../../hooks/useForm";
import HomeCard from "./../../assets/images/IconsHomeCard.png";
import PaymentMethods from "./../../assets/images/PaymentMethod.png";
import Card from "./../../assets/images/Card.png";
import Footer from "./../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtected";
import { GlobalContext } from "../../global/GlobalContext";
import { purchase } from "./../../services/user";

function PaymentPage() {
  useProtectedPage();
  const [form, onChange, cleanFields] = useForm({
    name: "",
    number: "",
    ccv: "",
  });
  const Navigate = useNavigate();

  const values = useContext(GlobalContext);
  const adress = values.adress;
  const car = values.car;
  const setCar = values.setCar;
  const userInfo = values.userInfo;

  const onSubmitForm = (e) => {
    e.preventDefault();

    const newPurshace = {
      id: userInfo.id,
      name: userInfo.name,
      city: adress.city,
      road: adress.road,
      complement: adress.complement,
      number: adress.number,
      car,
    };

    purchase(newPurshace, setCar);
    cleanFields();
  };

  return (
    <DivContainer>
      <DivImage>
        <img src={HomeCard} />
      </DivImage>
      <DivImageMethods>
        <img src={PaymentMethods}></img>
      </DivImageMethods>
      <DivLocation>
        <img src={Card}></img>
        <p>Cartão de crédito</p>
      </DivLocation>

      <form onSubmit={onSubmitForm}>
        <DivInput>
          <Stack>
            <InputGroup>
              <Input
                w={"340px"}
                placeholder="nome"
                value={form.name}
                type={"text"}
                name="name"
                border={"solid"}
                required
                onChange={onChange}
                h={"10vh"}
                marginBlock={"1vh"}
              ></Input>
            </InputGroup>

            <InputGroup>
              <Input
                border={"solid"}
                w={"340px"}
                placeholder="número cartão"
                minLength={"6"}
                value={form.number}
                name="number"
                type={"number"}
                required
                onChange={onChange}
                h={"10vh"}
                marginBlock={"1vh"}
              ></Input>
            </InputGroup>

            <InputGroup>
              <Input
                border={"solid"}
                w={"340px"}
                placeholder="ccv"
                maxLength={"3"}
                value={form.ccv}
                name="ccv"
                type={"number"}
                required
                onChange={onChange}
                h={"10vh"}
                marginBlock={"1vh"}
              ></Input>
            </InputGroup>
          </Stack>
        </DivInput>
        <Button
          bg={"#03D725"}
          marginBlock={"4%"}
          color={"white"}
          width={"139px"}
          height={"47px"}
          _hover={{ bg: "#03D725" }}
          w={"344px"}
          type="submit"
        >
          Finalizar
        </Button>
      </form>

      <Footer></Footer>
    </DivContainer>
  );
}

export default PaymentPage;
