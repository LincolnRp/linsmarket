import { BaseDatabase } from "./BaseDatabase"

export class StockDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "linsmarket_products"


public getProducts = async (): Promise<any> => {
        const result = await BaseDatabase
            .connection.raw(`

            SELECT * FROM linsmarket_products;

            `)



    return result[0]
    }

    public getProductsForId = async (product: string): Promise<any> => {
        const result = await BaseDatabase
            .connection.raw(`

            SELECT * FROM linsmarket_products WHERE id = "${product}";

            `)



    return result[0]
    }


    public pursacheProduct = async (product: string, quantity: number): Promise<any> => {
        const result = await BaseDatabase
            .connection.raw(`

            UPDATE linsmarket_products
            SET qty_stock = qty_stock - ${quantity}
            WHERE id = "${product}";

            `)


    return `Compra realizada com sucesso !`
    }
}