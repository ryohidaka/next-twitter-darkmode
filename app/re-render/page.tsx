"use client";

import TweetEmbed from "../components/TweetEmbed";
import { useTheme } from "../../hooks/theme";
import { useUserTimeline } from "../../hooks/tweet";

export default function ReRender() {
  // Fetch Tweets
  const tweets = useUserTimeline();

  // Get Theme
  const { theme } = useTheme();

  return (
    <div>
      <h1>ReRender</h1>

      {/* User Timeline */}
      {tweets.map((tweet) => (
        <TweetEmbed
          key={`${tweet.id_str}_${theme}`}
          tweet={tweet}
          theme={theme}
        />
      ))}
    </div>
  );
}
