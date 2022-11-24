import { getMovies, getMoviesById, addMovie, updateMovie, deleteMovie } from "../controllers/controllerMovie.js";
import { Router } from "express";
const router = Router();

router.get("/movies", getMovies);
router.get("/movies/:id", getMoviesById);
router.post("/movies", addMovie);
router.put("/movies/:title", updateMovie);
router.delete("/movies/:id", deleteMovie);
export default router;