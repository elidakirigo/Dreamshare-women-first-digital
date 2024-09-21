"use client";
import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Fetch user data from api returning one user
 * @returns an array of all user profile data
 */

export const UseProfile = () => {
  const [profile, setProfile] = useState<{ results: [] }>({ results: [] });

  useEffect(() => {
    const fetchUser = async () => {
      const { data: profile } = await axios.get(
        `${process.env.NEXT_PUBLIC_RANDOM_PROFILE}`,
      );

      setProfile(profile);
    };
    fetchUser();
  }, []);

  return profile;
};
