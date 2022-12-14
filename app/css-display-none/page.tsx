// @see https://www.redpeppers.jp/unitoro/index.php?mode=permlink&uid=6271#:~:text=Twitter%E3%81%AE%E3%82%A6%E3%82%A3%E3%82%B8%E3%82%A7%E3%83%83%E3%83%88%E5%9F%8B%E3%82%81%E8%BE%BC%E3%81%BF%E3%82%82,%E3%83%80%E3%83%BC%E3%82%AF%E3%83%A2%E3%83%BC%E3%83%89%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%9D%E3%81%86%E3%80%82

"use client";

import React, { Fragment } from "react";
import TweetEmbed from "../components/TweetEmbed";
import { useUserTimeline } from "../../hooks/tweet";

import styles from "./CSSDisplayNone.module.scss";

export default function CSSDisplayNone() {
  // Fetch Tweets
  const tweets = useUserTimeline();

  return (
    <div>
      <h1>CSS Display None</h1>

      {/* User Timeline */}
      {tweets.map((tweet) => (
        <Fragment key={tweet.id_str}>
          <TweetEmbed
            tweet={tweet}
            theme="light"
            className={styles["tw_light"]}
          />
          <TweetEmbed
            tweet={tweet}
            theme="dark"
            className={styles["tw_dark"]}
          />
        </Fragment>
      ))}
    </div>
  );
}
