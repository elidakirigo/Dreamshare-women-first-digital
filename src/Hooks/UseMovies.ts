'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'

/**
 * requests done to IMDB
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
 * Fetch movies url from api
 * @returns url
 */
 /**
 * Fetch user data from api returning all users
 * @returns an array of all users
 */
export const UsefetchMovies = () => {
	const [movies, setMovies] = useState<{ results: [] }>({ results: [] })
	// const dispatch = useDispatch()

	useEffect(() => {
		const fetchMovies = async () => {
			// const UseMoviesInstance = () => axios.create({ baseURL: process.env.NEXT_MOVIES_URL })
		
      
			const { data: movie } = await 
			// toast.promise(
				axios.get(`${process.env.NEXT_PUBLIC_MOVIES_URL}${requests.fetchingTrending}`)
			// 	,{
			// 		pending: 'loading movies ',
			// 		success: 'movies loaded successfully',
			// 		error: 'No movie found ',
			// 	},
			// 	{
			// 		position: 'top-center',
			// 		autoClose: 3000,
			// 		hideProgressBar: false,
			// 		closeOnClick: true,
			// 		pauseOnHover: true,
			// 		draggable: true,
			// 		progress: undefined,
			// 		theme: 'light',
			// 		transition: Bounce,
			// 	},
			// )

			// const data = await axios.get(`${process.env.NEXT_MOVIES_URL}${requests.fetchingTrending}`)

			setMovies(movie)
		}
		fetchMovies()
	}, [])

	return movies
}

/**
 * fetches data from redux store and sends to homepage
 * @returns  users that were fetched from redux
 */
