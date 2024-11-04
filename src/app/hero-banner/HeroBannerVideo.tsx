'use client'

import clx from 'classnames'
import styles from './styles.module.css'
import YouTube from 'react-youtube'

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
    mute: 1,
  },
}

export const HeroBannerVideo = () => {
  return (
    <div className="m-auto w-full h-[400px] md:h-[495px] lg:h-[620px] max-w-[1120px] rounded-3xl md:px-14 md:pt-14 lg:px-20 lg:pt-20 bg-primary/5">
      <YouTube
        className={clx('h-full w-full md:rounded-t-3xl', styles.yt)}
        videoId="FeT8KWcWgLc"
        opts={opts}
      />
    </div>
  )
}
