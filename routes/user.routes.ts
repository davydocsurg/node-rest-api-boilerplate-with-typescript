import express from "express";
import { UserController } from "../controllers";
import { catchAsync } from "../helpers";
import { isAuthenticated } from "../middlewares";

const userRoutes = express.Router();

userRoutes.get(
    "/auth-user",
    isAuthenticated,
    catchAsync(UserController.getAuthUser)
);

export default userRoutes;
