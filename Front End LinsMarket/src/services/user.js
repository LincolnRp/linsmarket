import axios from "axios";
import goToPage from "../routes/coordinator";
import swal from 'sweetalert';
import { BASE_URL_USER } from "../constants/urls";


export const login = async(body, clear, Navigate, setUserInfo) => {

  

 await axios
    .post(`${BASE_URL_USER}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      setUserInfo(res.data.userInfo)

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

export const signup = async(body, clear, Navigate,setUserInfo) => {

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
        setUserInfo(res.data.userInfo)
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

    export const purchase = async(body, setCar) =>{
      
    const newRequesition = {
         city: body.city,
         complement: body.complement,
         id: body.id,
         name: body.name,
         number: Number(body.number),
         road: body.road,
         car: body.car

      }

      await axios
      .post(`${BASE_URL_USER}/purchase`, newRequesition)

      .then((res) => {

          setCar([])
        return swal({
          title: "Sucesso !",
          text: `Seu pedido está sendo encaminhado !`,
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
    
      }