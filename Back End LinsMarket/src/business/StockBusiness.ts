import { ParamsError } from "../errors/ParamsError";
import { StockDatabase } from "./../database/StockDatabase";

export class StockBusiness {
  constructor(private stockDatabase: StockDatabase) {}

  public getProducts = async (): Promise<any> => {
    let response = await this.stockDatabase.getProducts();

    return response;
  };

  public getProductsForId = async (idProduct: string): Promise<any> => {
    if (typeof idProduct !== "string") {
      throw new ParamsError("Parâmetro 'email' inválido");
    }

    let response = await this.stockDatabase.getProductsForId(idProduct);

    return response;
  };

  public pursacheProduct = async (
    product: string,
    quantity: number
  ): Promise<any> => {
    if (typeof product !== "string") {
      throw new ParamsError("Parâmetro 'product' inválido");
    }

    if (typeof quantity !== "number") {
      throw new ParamsError("Parâmetro 'number' inválido");
    }

    let response = await this.stockDatabase.pursacheProduct(product, quantity);

    return response;
  };

  public stockPendings = async (): Promise<any> => {
    let response = await this.stockDatabase.getStockPendings();

    return response;
  };

  public deletePending = async (
    user_id: string,
    product: string
  ): Promise<any> => {
    if (typeof user_id !== "string") {
      throw new ParamsError("Parâmetro 'email' inválido");
    }

    if (typeof product !== "string") {
      throw new ParamsError("Parâmetro 'email' inválido");
    }

    let response = await this.stockDatabase.deletePending(user_id, product);

    return response;
  };
}
