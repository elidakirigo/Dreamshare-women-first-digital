'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { usefetchuser } from '../../../github/N---Z/Savvannah-app/client/Hooks/useUser';

/**
 * Fetch user data from api returning one user
 * @returns an array of all user data
 */

export const UseProfile = () => {
	const [profile, setProfile] = useState('')
	// const dispatch = useDispatch();

	useEffect(() => {
		const fetchUser = async () => {

			const { data: profile } = await axios.get(process.env.NEXT_PUBLIC_RANDOM_PROFILE as string)

			console.log(profile);
			
			setProfile(profile)
		}
		fetchUser()
	}, [])

	return profile
}

export const UseFetchData = async() => {
	const {results} =  UseProfile()

	return  results.map((person: { name: { first: string; last: string }; picture: { large: string } }) => ({
		name: `${person.name.first} ${person.name.last}`,
		picture: person.picture.large,
	}))
}

