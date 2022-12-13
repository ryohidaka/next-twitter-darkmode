// @see https://qiita.com/deren2525/items/39d151e0cf31d1bd231c
// @see https://zenn.dev/bom_shibuya/articles/f0a6d7daddfa6f

"use client";

import { useTheme } from "../../../hooks/theme";

import styles from "./ToggleDarkMode.module.scss";

/**
 * Show ColorMode Button.
 * @param tweet
 * @returns
 */
export default function ToggleDarkMode() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className={styles["toggle-wrapper"]}>
      <span>Light</span>
      <div className={styles["toggle-switch"]}>
        <input
          id="toggle"
          className={styles["toggle"]}
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
        />
        <label htmlFor="toggle" className={styles["toggle-label"]} />
        <span></span>
      </div>
      <span>Dark</span>
    </div>
  );
}
