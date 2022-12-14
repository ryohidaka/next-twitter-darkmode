"use client";

import { useUserTimeline } from "../hooks/tweet";
import TweetEmbed from "./components/TweetEmbed";

export default function Home() {
  // Fetch Tweets
  const tweets = useUserTimeline();

  return (
    <div>
      {/* User Timeline */}
      {tweets.map((tweet) => (
        <TweetEmbed key={tweet.id_str} tweet={tweet} />
      ))}
    </div>
  );
}
