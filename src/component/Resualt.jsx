import React from 'react'

export default function Resualt({ movie,openDetails }) {
    return (
        <div className='result ' onClick={(e)=> openDetails(movie.imdbID)}>
            <div className='border-4 border-dark '>
                <img src={movie.Poster} alt="" />
            </div>
            <div className='bg-dark text-white p-2'>
                <h3>{movie.Title}</h3>
            </div>



        </div>
    )
}
