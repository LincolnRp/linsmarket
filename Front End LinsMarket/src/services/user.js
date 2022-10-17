import axios from "axios";
import goToPage from "../routes/coordinator";
import swal from 'sweetalert';
import { BASE_URL_USER } from "../constants/urls";

export const login = async(body, clear, Navigate) => {
 await axios
    .post(`${BASE_URL_USER}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToPage(Navigate, "");
    })
    .catch((err) => {

      return swal({
        title: "Erro",
        text: `${err.response.data.message}`,
        icon: "warning",

      })
        
    });
};

export const signup = async(body, clear, Navigate) => {

      const bodyT = {   
        name: body.name,
        email: body.email,
        password: body.password
    } 


   await axios
      .post(`${BASE_URL_USER}/signup`, bodyT)
      .then((res) => {
        clear();
        localStorage.setItem("token", res.data.token);
        goToPage(Navigate, "");
      })
      .catch((err) => {

      return swal({
        title: "Erro",
        text: `${err.response.data.message}`,
        icon: "warning",

      })

      
      });
    


};