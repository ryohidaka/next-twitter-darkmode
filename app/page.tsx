"use client";

import { useUserTimeline } from "../hooks/tweet";

export default function Home() {
  // Fetch Tweets
  const tweets = useUserTimeline();

  return (
    <div>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id_str}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
}
