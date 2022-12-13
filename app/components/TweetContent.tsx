// @see https://zenn.dev/catnose99/articles/329d7d61968efb

import dayjs from "dayjs";
import { Tweet } from "../../types/tweet";

type Props = {
  tweet: Tweet;
};

/**
 * Show embedded tweet content.
 * @param tweet
 * @returns
 */
export default function TweetContent({ tweet }: Props) {
  const user = tweet.user;
  const created_at = dayjs(tweet.created_at).format("MMMM D, YYYY");

  return (
    <>
      <p lang="ja" dir="ltr">
        {tweet.text}
      </p>
      &mdash; {user.name} (@{user.screen_name})
      <a
        href={`https://twitter.com/${user.screen_name}/status/${tweet.id_str}?ref_src=twsrc%5Etfw`}
      >
        {created_at}
      </a>
    </>
  );
}
