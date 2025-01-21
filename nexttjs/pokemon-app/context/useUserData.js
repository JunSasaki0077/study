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
    try {
      setUserDetails((prev) => {
        const updatedBookmarks =
          action === "bookmark"
            ? prev.bookmarks.includes(pokemon)
              ? prev.bookmarks.filter((p) => p !== pokemon)
              : [...prev.bookmarks, pokemon]
            : prev.bookmarks;

        const updatedLikes =
          action === "like"
            ? prev.liked.includes(pokemon)
              ? prev.liked.filter((p) => p !== pokemon)
              : [...prev.liked, pokemon]
            : prev.liked;

        return {
          ...prev,
          bookmarks: updatedBookmarks,
          liked: updatedLikes,
        };
      });

      await axios.post("/api/pokemon", {
        userId,
        pokemon,
        action,
      });
    } catch (error) {
      console.log("Error in performAction", error);
      fetchUserDetails(userId);
    }
  };

  console.log("userDetails", userDetails);
  return { userDetails, performAction, fetchUserDetails };
};
