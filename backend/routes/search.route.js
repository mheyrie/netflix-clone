import express from "express";
import { searchMovie, searchPerson, searchTv } from "../controllers/search.controller.js";
import { get } from "mongoose";

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history", getSearchHistory);
router.get("/history/:id",removeItemFromHistory);


export default router;