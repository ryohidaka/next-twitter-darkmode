"use client";

import React, { Fragment } from "react";
import TweetEmbed from "../components/TweetEmbed";
import { useTheme } from "../../hooks/theme";
import { useUserTimeline } from "../../hooks/tweet";

export default function ConditionalRendering() {
  // Fetch Tweets
  const tweets = useUserTimeline();

  // Get Theme
  const { theme } = useTheme();

  return (
    <div>
      <h1>ConditionalRendering</h1>

      {/* User Timeline */}
      {tweets.map((tweet) => (
        <Fragment key={`${tweet.id_str}_${theme}`}>
          {theme === "light" ? (
            <TweetEmbed tweet={tweet} theme="light" />
          ) : (
            <TweetEmbed tweet={tweet} theme="dark" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
