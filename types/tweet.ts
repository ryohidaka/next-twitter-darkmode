export type Tweet = {
  id_str: string;
  text: string;
  created_at: string;
  user: {
    name: string;
    screen_name: string;
  };
};
