import { deleteUser, getAllusers, getBookingsOfUser, getUserById, login, signup, updateUser } from "../controllers/user-controller";
import express from "express";

const userRouter =express.Router();

userRouter.get("/",getAllusers);
userRouter.get("/:id",getUserById);
userRouter.post("/signup",signup);
//to update user with given id
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);
userRouter.post("/login",login);
userRouter.get("/bookings/:id",getBookingsOfUser);
export default userRouter;
