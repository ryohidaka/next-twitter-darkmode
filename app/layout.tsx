import "./globals.css";
import TweetScript from "./components/TweetScript";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}

        {/* Load Twitter Widjet Script */}
        <TweetScript />
      </body>
    </html>
  );
}
