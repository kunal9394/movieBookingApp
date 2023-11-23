import express from "express";
import { addMovie, getMovies,getMovieById } from "../controllers/movie-controller";

const movieRouter=express.Router();
movieRouter.get("/",getMovies);
movieRouter.get("/:id",getMovieById);
movieRouter.post("/",addMovie);

export default movieRouter;