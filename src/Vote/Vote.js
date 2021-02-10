import React, { useRef, useState, useEffect } from 'react'
import './Vote.css'
import key from './omdbkey'
const Vote = props => {
    const searchVal= useRef()
    const [movieData, setMovieData] = useState([])
    const [hidden, setHidden] = useState('hidden')

    let movieVotes = []

    const movieSearch = () => {
        setHidden('')
        return fetch(`http://www.omdbapi.com/?apikey=${key}&s=${searchVal.current.value}&type=movie`)
            .then(movies => movies.json())
            .then(movies => {
                setMovieData(movies.Search)
            })
    }

    const voteMovie = movie => {
        const voteData = 
        {
            'title': movie.movie.Title,
            'year': movie.movie.Year,
            'imdb': movie.movie.imdbID
        }
        movieVotes.push(voteData)
    }



    useEffect(() => {
        
    },[])
    return(
        <>
            <div className="box w60 centered search-div bg60">
                <p className="title is-3 vote-title">Vote here!</p>
                <div className="input-and-search">
                    <input className="input search-field" placeholder="Movie Title Here (eg. Shrek)" ref={searchVal}/>
                    <button className="button search-btn" onClick={() => {movieSearch()}}>Search</button>
                </div>
            </div>

            <div className={`results-votes-div w60 centered ${hidden}`}>
                <div className="box w40 results bg60">
                    <p className="title is-4 vote-title">Results</p>
                    <hr className="results-div-hr"/>
                    <div className="results">
                        {movieData.map((movie) =>{
                            return(
                            <>
                                <div className="result-and-btn">
                                    <p className="title-name">{movie.Title} ({movie.Year})</p>
                                    <button className="button is-small vote-btn" onClick={() => voteMovie({movie})}>Vote</button>
                                </div>
                            </>
                            )
                        })}
                    </div>
                </div>
                <div className="box w40 votes bg60">
                    <p className="title is-4 vote-title">Your Picks ({movieVotes.length}/5)</p>
                </div>
            </div>
        </>
    )
}

export default Vote