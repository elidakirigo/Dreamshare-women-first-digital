'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

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
export const UseMoviesInstance = () => axios.create({ baseURL: process.env.NEXT_MOVIES_URL })

/**
 * Fetch user data from api returning all users
 * @returns an array of all users
 */
export const UsefetchMovies = () => {
	const [movies, setMovies] = useState([])
	// const dispatch = useDispatch()

	useEffect(() => {
		const fetchMovies = async () => {
			const options = {
				method: 'GET',
				url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
				params: {
					term: 'bojack',
					country: 'uk',
				},
				headers: {
					'x-rapidapi-key': 'f510619c58msh83c16e060744b4cp1940bfjsnf881fd6d4427',
					'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
				},
			}

			try {
				const response = await axios.request(options)
				console.log(response.data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchMovies()
	}, [])

	// return user
}

/**
 * fetches data from redux store and sends to homepage
 * @returns  users that were fetched from redux
 */
// export const UseUser = () => {
// 	const UserData = useAppSelector((state) => state.users)

// 	const user = Usefetchuser()

// 	if (UserData.users) return UserData.users

// 	return user
// }
