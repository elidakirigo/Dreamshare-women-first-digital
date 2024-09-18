'use client'
import axios from 'axios'
import { useMemo, useState } from 'react'

/**
 * requests done to IMDB
 */
const API_KEY = process.env.NEXT_MOVIE_API_KEY

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
 * Fetch movies url from api
 * @returns url
 */
export /**
 * Fetch user data from api returning all users
 * @returns an array of all users
 */
const UsefetchMovies = () => {
	const [movies, setMovies] = useState<{ results: [] }>({ results: [] })
	// const dispatch = useDispatch()

	useMemo(() => {
		const fetchMovies = async () => {
			// const UseMoviesInstance = () => axios.create({ baseURL: process.env.NEXT_MOVIES_URL })
			const { data } = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=08a54f16e86e6344d3964b95ed863abf&language=en-US')
			// const data = await axios.get(`${process.env.NEXT_MOVIES_URL}${requests.fetchingTrending}`)

			setMovies(data)
		}
		fetchMovies()
	}, [])

	return movies
}

/**
 * fetches data from redux store and sends to homepage
 * @returns  users that were fetched from redux
 */
