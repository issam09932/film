import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    story: {
        type: String,
        required: true,
    },
    type: {
        type: [String],
        required: true, 
    },
    rate: {
        type: Number,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
