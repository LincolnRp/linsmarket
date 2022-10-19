import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { ILoginInputDTO, ISignupInputDTO, IPurchaseInputDTO } from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.signup(input);
      res.status(201).send(response);
    } catch (error) {
      console.log(error);
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const input: ILoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.login(input);
      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" });
    }
  };

  public loginAdmin = async (req: Request, res: Response) => {
    try {
      const input: ILoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.loginAdmin(input);

      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" });
    }
  };

  public purchase = async (req: Request, res: Response) => {
    try {
        
        const input: IPurchaseInputDTO = {
                id: req.body.id,
                name: req.body.name,
                city: req.body.city,
                road: req.body.road,
                complement: req.body.complement,
                number: req.body.number,
                car: req.body.car
          };

      const response = await this.userBusiness.purchase(input);

      res.status(200).send(response);

    } catch (error) {
      console.log(error);
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" });
    }
  };
}
