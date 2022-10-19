import React, { useContext } from "react";
import { Button, Input, InputGroup, Stack } from "@chakra-ui/react";
import {
  DivContainer,
  DivInput,
  DivImage,
  DivLocation,
} from "./style";
import { useForm } from "../../hooks/useForm";
import HomeCard from "./../../assets/images/IconsHomeCard.png";
import Location from "./../../assets/images/Location.png";
import Footer from "./../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import goToPage from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtected";
import { GlobalContext } from "../../global/GlobalContext";
function AdressPage() {
  const [form, onChange, cleanFields] = useForm({
    city: "",
    road: "",
    complement: "",
    number: "",
    date: "",
  });

  useProtectedPage();
  const Navigate = useNavigate();

  const values = useContext(GlobalContext);
  const adress = values.adress;
  const setAdress = values.setAdress;

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()+1
  const day = date.getDate()
  const onSubmitForm = (e) => {
    e.preventDefault();
    setAdress(form);
    goToPage(Navigate, "payment");
  };
  
  return (
    <DivContainer>

      <DivImage>
        <img src={HomeCard} />
      </DivImage>

      <DivLocation>
        <img src={Location}></img>
        <p>Endereço de Entrega</p>
      </DivLocation>

      <form onSubmit={onSubmitForm}>
        <DivInput>
          <Stack>

            <InputGroup>
              <Input
                w={"340px"}
                placeholder="cidade e bairro"
                value={form.city}
                type={"text"}
                name="city"
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
                placeholder="rua"
                minLength={"6"}
                value={form.road}
                name="road"
                type={"text"}
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
                placeholder="complemento"
                minLength={"6"}
                value={form.complement}
                name="complement"
                type={"text"}
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
                placeholder="número"
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
          Pagar
        </Button>
      </form>

      <Footer></Footer>
    </DivContainer>
  );
}

export default AdressPage;
