import axios from "axios";
import { useState, useEffect } from "react";
import { Tweet } from "../types/tweet";

/**
 * Fetch UserTimeline
 * @returns
 */
export const useUserTimeline = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const fetchTweets = () => {
    const fetch = async () => {
      const baseUrl = `/api/tweets?screen_name=TwitterDev`;
      const { data } = await axios.get(baseUrl);

      setTweets(data);
    };

    fetch();
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return tweets;
};
