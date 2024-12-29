import express from "express";
import { getSearchHistory, removeItemFromHistory, searchMovie, searchPerson, searchTv } from "../controllers/search.controller.js";


const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history", getSearchHistory);
router.get("/history/:id",removeItemFromHistory);


export default router;