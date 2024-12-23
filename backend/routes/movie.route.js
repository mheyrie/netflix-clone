import express from "express";
import { getTrendingMovie } from "../controllers/movie.controller";

const router = express.Router()

router.get(' /trending', getTrendingMovie)

export default router