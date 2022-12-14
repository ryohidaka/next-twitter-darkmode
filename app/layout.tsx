"use client";

import ToggleDarkMode from "./components/ToggleDarkMode";
import TweetScript from "./components/TweetScript";
import "./globals.scss";

import { RecoilRoot } from "recoil";
import Theme from "./components/Theme";

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
        <RecoilRoot>
          <Theme>
            {/* Switch Color Mode */}
            <ToggleDarkMode />
            <main>{children}</main>
          </Theme>
        </RecoilRoot>

        {/* Load Twitter Widjet Script */}
        <TweetScript />
      </body>
    </html>
  );
}
