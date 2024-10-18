import Movie from "../models/Movie.js"

export const GetFilms=async (req,res)=>{
const Films=await Movie.find()
res.send(Films)
}


export async function GetFilmById (req,res){
    const FilmId =await Movie.findById(req.params.id)
if (FilmId) {
    res.send(FilmId)
} else {
    res.send({Message:`this film doesn't exist`})
}  
}

export async function UploadFilm(req,res){
   try {
    const OldFilm=await Movie.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    res.send({Message:"film  change by success"})
   } catch (error) {
    res.send({message:"their is a error with changes"+error})
   }
}

export const DeleteFilm=async (res,req)=>{
    try {
        const Delete =await Movie.findByIdAndDelete(req.params.id)
        res.send({message:"the film has been deleted"})
    } catch (error) {
        res.send({message:"theire is a problem"+error})
    }
}

export async function AddFilm(req,res) {
    const NewFilm=req.body
    try {

        const CreateFilm =await Movie.create(
            ...NewFilm
        )
        res.send({message:`${NewFilm.name}  has been created`})
    } catch (error) {
        res.send("--->"+ error)
    }
}