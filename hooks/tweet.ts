import axios from "axios";
import { useEffect, useRef, useState } from "react";
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

export const useContainerRef = () => {
  const containerRef = useRef(null); // コンポーネントのルートとなる要素を取得

  useEffect(() => {
    // @ts-ignore
    twttr.widgets.load(containerRef.current); // ツイートの埋め込みを実行
  }, []);

  return containerRef;
};
