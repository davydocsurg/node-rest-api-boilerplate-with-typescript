import express from "express";
import { CartController } from "../controllers";
import { catchAsync } from "../helpers";
import { isAuthenticated } from "../middlewares";

const cartRoute = express.Router();

cartRoute.post(
    "/add/:productId",
    isAuthenticated,
    catchAsync(CartController.addProdToCart)
);

cartRoute.get("/fetch", isAuthenticated, catchAsync(CartController.fetchCart));

export default cartRoute;
