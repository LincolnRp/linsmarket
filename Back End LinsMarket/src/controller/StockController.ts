import { Request, Response } from "express";
import { StockBusiness } from "../business/StockBusiness";
import { BaseError } from "../errors/BaseError";

export class StockController {
  constructor(private stockBusiness: StockBusiness) {}

  public getItem = async (req: Request, res: Response) => {
    try {
      const product = req.body.name as string;
      const response = await this.stockBusiness.getProducts();

      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  public getItemWhitId = async (req: Request, res: Response) => {
    try {
      const product = req.params.id as string;
      const response = await this.stockBusiness.getProductsForId(product);

      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  public pursacheProduct = async (req: Request, res: Response) => {
    try {
      const user_id = req.body.user_id as string;
      const product = req.body.id as string;
      const quantity = req.body.quantity as number;

      const response = await this.stockBusiness.pursacheProduct(
        product,
        Number(quantity)
      );
      const deletePending = await this.stockBusiness.deletePending(
        user_id,
        product
      );

      res.status(200).send(deletePending);
    } catch (error) {
      console.log(error);
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  public stockPendings = async (req: Request, res: Response) => {
    try {
      const response = await this.stockBusiness.stockPendings();

      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };
}
