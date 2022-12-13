import { NextApiRequest, NextApiResponse } from "next";
import { Tweet } from "../../types/tweet";
import { twitterClient } from "../../lib/tweet";

export default async (req: NextApiRequest, res: NextApiResponse<Tweet[]>) => {
  const data: any = await (() => {
    return new Promise((resolve, reject) => {
      twitterClient.get(
        "statuses/user_timeline",
        {
          screen_name: req.query.screen_name,
        },
        (error: any, tweets: any, response: any) => {
          resolve(tweets);
        }
      );
    });
  })();

  return res.status(200).json(data);
};
