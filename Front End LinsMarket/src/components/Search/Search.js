import React from "react";
import { DivContainerSearch, ImageCart } from "./style";
import { Input, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";
import { useForm } from "../../hooks/useForm";
import carHeader from "./../../assets/images/carHeader.png";
import searchHeader from "./../../assets/images/searchHeader.png";
import goToPage from "./../../routes/coordinator";
import { useNavigate } from "react-router-dom";

function Search() {
  const Navigate = useNavigate();

  const [form, onChange, cleanFields] = useForm({
    search: "",
  });

  return (
    <DivContainerSearch>
      <InputGroup width={"75%"}>
        <Input
          marginLeft={"4px"}
          width={"120%"}
          h={"25px"}
          placeholder="buscar"
          value={form.search}
          type={"text"}
          name="search"
          onChange={onChange}
          marginBlock={"1vh"}
        ></Input>

        <InputRightElement>
          <img src={searchHeader} alt={"Search Icon"}></img>
        </InputRightElement>
      </InputGroup>

      <ImageCart
        src={carHeader}
        alt={"Car Market Icon"}
        onClick={() => goToPage(Navigate, "cart")}
      ></ImageCart>
    </DivContainerSearch>
  );
}

export default Search;
