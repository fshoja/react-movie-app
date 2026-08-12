

import React from 'react'

export default function Detail({selected, closed}) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 text-center">
                        <img src={selected.Poster} alt="" />
                    </div>
                    <div className="col-12 col-md-6 text-white">
                        <h2>{selected.Title}</h2>
                        <p>{selected.Year}</p>
                        <p>Rating{selected.imdbRating}</p>
                        <p>{selected.Plot}</p>
<button onClick={closed} className='btn btn-danger'>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
