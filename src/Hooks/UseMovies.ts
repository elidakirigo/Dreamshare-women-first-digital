'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

/**
 * requests done to TMDB
 */
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY

export const requests = {
	fetchingTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

/**
 * Fetch user data from api returning all trending movies
 * @returns an object of all trending movies
 */

export const UsefetchMovies = () => {
	const [movies, setMovies] = useState<{ results: [] }>({ results: [] })

	useEffect(() => {
		const fetchMovies = async () => {
			// const UseMoviesInstance = () => axios.create({ baseURL: process.env.NEXT_MOVIES_URL })

			const { data: movie } = await axios.get(`${process.env.NEXT_PUBLIC_MOVIES_URL}${requests.fetchingTrending}`)

			setMovies(movie)
		}
		fetchMovies()
	}, [])

	return movies
}
