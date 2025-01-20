import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { useState } from "react";

export const useUserData = () => {
  const { user } = useUser();
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserDetails = async () => {
    if (!user) return;

    try {
      const res = await axios.get(`/api/user/${user.sub}`);
      setUserDetails(res.data);
    } catch (error) {
      console.log("Error in fetchUser Details", error);
    }
  };

  const performAction = async (userId, pokemon, action) => {
    if (!user) return console.log("User not logged in");
    try {
      await axios.post("/api/pokemon", {
        userId,
        pokemon,
        action,
      });
    } catch (error) {
      console.log("Error in performAction", error);
    }
  };

  console.log("userDetails", userDetails);
  return { userDetails, performAction, fetchUserDetails };
};
