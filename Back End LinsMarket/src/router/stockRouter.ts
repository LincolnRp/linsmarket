import { Router } from "express";
import { StockBusiness } from "../business/StockBusiness";
import { StockController } from "../controller/StockController";
import { StockDatabase } from "../database/StockDatabase";

export const stockRouter = Router();

const stockController = new StockController(
  new StockBusiness(new StockDatabase())
);

stockRouter.get("/product/:id", stockController.getItemWhitId);
stockRouter.get("/pendings", stockController.stockPendings);
stockRouter.get("/", stockController.getItem);
stockRouter.post("/", stockController.pursacheProduct);
