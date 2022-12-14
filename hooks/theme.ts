// @see https://zenn.dev/minguu42/articles/20220113-nextjs-darkmode
"use client";

import { useEffect } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { Theme } from "../types/theme";

const themeState = atom<Theme>({
  key: "themeState",
  default: "light",
});

export const useSetTheme = () => useSetRecoilState(themeState);

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    const root = window.document.documentElement;
    root.setAttribute("data-theme", newTheme);
  };

  return { theme, toggleTheme };
};
