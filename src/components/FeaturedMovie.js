import React from "react";
import "./FeaturedMovie.css";

export default ({item})=> {
    return(
        <div className="featured" style={{
            backgroudSize: 'cover',
            backgroudPosition: 'center',
            backgroudImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` 
        }}>
            <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} />
            <div> {item.original_name} </div>
        </div>
    );
}