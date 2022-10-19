import axios from "axios";
import goToPage from "../routes/coordinator";
import swal from 'sweetalert';
import { BASE_URL_USER, BASE_URL_PRODUCT } from "../constants/urls";
import { useNavigate } from "react-router-dom";


export const loginAdmin = async(body, clear, Navigate) => {

    // const Navigate = useNavigate()

 await axios
    .post(`${BASE_URL_USER}/role`, body)
    .then((res) => {
    
      if(res.data.role === "ADMIN"){
        
        localStorage.setItem('token', res.data.token)

        goToPage(Navigate, 'adminHome')

      }else{
        
      return swal({
        title: "Erro",
        text: `Você não é um administrador !`,
        icon: "warning",

      })
      }
    })
    .catch((err) => {

      return swal({
        title: "Erro",
        text: `${err.response.data.message}`,
        icon: "warning",

      })
        
    });
};


export const getPendings = async(setPendings) => {

await axios
  .get(`${BASE_URL_PRODUCT}/pendings`)
  .then((res) => {
    
    setPendings(res.data)
    
  })
  .catch((err) => {

    return swal({
      title: "Erro",
      text: `${err.response.data.message}`,
      icon: "warning",

    })
      
  });
};

export const deletePendingAndUpdateStock = async(body) => {

  await axios
    .post(`${BASE_URL_PRODUCT}/`, body)
    .then((res) => {
      
      console.log(res)
      return swal({
        title: "Sucesso",
        text: `${res.data}`,
        icon: "success",
  
      })
      
    })
    .catch((err) => {
  
      return swal({
        title: "Erro",
        text: `${err.response.data.message}`,
        icon: "warning",
  
      })
        
    });
  };