import { ParamsError } from '../errors/ParamsError'
import {StockDatabase} from './../database/StockDatabase'

export class StockBusiness {

  constructor(private stockDatabase: StockDatabase,){}

  public getProducts = async ( ): Promise<any> => {

    let response = await this.stockDatabase.getProducts()


    return response
}

public getProductsForId = async (idProduct: string): Promise<any> => {

  if (typeof idProduct !== "string") {
    throw new ParamsError("Parâmetro 'email' inválido")
}


  let response = await this.stockDatabase.getProductsForId(idProduct)


  return response
}

public pursacheProduct = async (idProduct: string, quantity: number): Promise<any> => {

  if (typeof idProduct !== "string") {

    throw new ParamsError("Parâmetro 'email' inválido")
}

if (typeof quantity !== "number") {

  throw new ParamsError("Parâmetro 'email' inválido")
}

  let response = await this.stockDatabase.pursacheProduct(idProduct, quantity)

  return response
}

}