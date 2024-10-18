import express from "express"
import { AddFilm, DeleteFilm, GetFilmById, GetFilms, UploadFilm } from "../controllers/Movie.js"

const MovieRouter =express.Router()

MovieRouter.get("/",GetFilms)
MovieRouter.get("/:id",GetFilmById)
MovieRouter.put("/:id",UploadFilm)
MovieRouter.delete("/:id",DeleteFilm)
MovieRouter.post("/AddFilm",AddFilm)

export default MovieRouter