import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import useProtectedPage from "../../hooks/useProtected";
import goToPage from "../../routes/coordinator";
import { DivProfile } from "./style";

function ProfilePage() {
  useProtectedPage();
  const Navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    goToPage(Navigate, "login");
  };

  return (
    <DivProfile>
      <Button
        bg={"#803829"}
        color={"white"}
        width={"139px"}
        height={"47px"}
        _hover={{ bg: "#803829" }}
        onClick={() => logout()}
      >
        {" "}
        Sair{" "}
      </Button>
      <Footer />
    </DivProfile>
  );
}

export default ProfilePage;
