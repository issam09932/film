import React from 'react'
import "./Add.css"
import { FaRegStar } from "react-icons/fa"
import { TbXboxX } from "react-icons/tb"
import { useStore } from "../utils/Store.js"

export default function Add() {
    const { MovieList = [], setMovieList } = useStore();
    const handleDelete = (index) => {
        const updatedMovieList = MovieList.filter((_, i) => i !== index)
        setMovieList(updatedMovieList)
    }

    return (
        <div className="add">
            <h1 style={{ margin: "20px" }}>My WatchList</h1>
            {MovieList.length === 0 ? (
                <p>Add Movie To Watch Later</p>
            ) : (
                MovieList.map((e, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            border: "2px gray solid",
                            borderRadius: "10px",
                            margin: "0 10px 20px",
                            gap: "5px",
                            position: "relative",
                        }}
                        className="boox"
                    >
                        <div className="left-side">
                            <img
                                style={{ width: "400px", height: "400px", objectFit: "cover",backgroundRepeat:"no-repeat" ,borderRadius: "10px 0 0 10px" }}
                                src={e.image}
                                alt={e.name}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "15px",
                                padding: "15px",
                                flex: 1,
                            }}
                            className="right-side"
                        >
                            <div className="name" style={{ fontSize: "24px", fontWeight: "bold" }}>{e.name}</div>
                            <div className="rate" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <FaRegStar style={{ color: "gold" }} /> 
                                <span>{e.howManyPeopleWantToSeeIt}% Want To See</span>
                            </div>
                            <div className="story" style={{ fontSize: "14px", lineHeight: "1.5" }}>{e.story}</div>
                            <div className="types">
                                <div className="type" style={{ 
                                    backgroundColor: "#f0f0f0", 
                                    padding: "5px 10px", 
                                    borderRadius: "15px", 
                                    display: "inline-block", 
                                    width:"200px"
                                }}>
                                    {e.type}
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                fontSize: "24px",
                                cursor: "pointer",
                                backgroundColor: "rgba(255, 255, 255, 0.8)",
                                borderRadius: "50%",
                                padding: "5px",
                            }}
                            className="aside"
                            onClick={() => handleDelete(index)}
                        >
                            <TbXboxX />
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}