// @see https://zenn.dev/catnose99/articles/329d7d61968efb

import { useContainerRef } from "../../hooks/tweet";
import { Theme } from "../../types/theme";
import { Tweet } from "../../types/tweet";
import TweetContent from "./TweetContent";

type Props = {
  tweet: Tweet;
  theme?: Theme;
};

/**
 * Show embedded tweets.
 * @param tweet
 * @returns
 */
export default function TweetEmbed({ tweet, theme }: Props) {
  const ref = useContainerRef();
  const tweetId = tweet.id_str;

  return (
    <div key={tweetId} id={tweetId} ref={ref}>
      <blockquote className="twitter-tweet" data-theme={theme}>
        <TweetContent tweet={tweet} />
      </blockquote>
    </div>
  );
}
