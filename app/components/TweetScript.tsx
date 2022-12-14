// @see https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites

import Script from "next/script";

/**
 * Import Twitter Widjet Script
 * @returns
 */
export default function TweetScript() {
  return (
    <Script
      id="twitter-widjet-base"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.twttr = (function (d, s, id) {
            var js,
              fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
              if (d.getElementById(id)) return t;
              js = d.createElement(s);
              js.id = id;
              js.src = "https://platform.twitter.com/widgets.js";
              fjs.parentNode.insertBefore(js, fjs);

              t._e = [];
              t.ready = function (f) {
                t._e.push(f);
              };

              return t;
            })(document, "script", "twitter-wjs");
          `,
      }}
    />
  );
}
