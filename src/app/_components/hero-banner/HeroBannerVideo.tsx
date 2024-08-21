"use client";

import clx from "classnames";
import styles from "./styles.module.css";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
    mute: 1,
  },
};

export const HeroBannerVideo = () => {
  return (
    <div className="h-[407px] rounded-3xl border">
      <YouTube
        className={clx("w-full h-full rounded-3xl", styles.yt)}
        videoId="ScMzIvxBSi4"
        opts={opts}
      />
    </div>
  );
};
