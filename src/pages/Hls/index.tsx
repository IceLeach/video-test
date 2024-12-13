import React, { useMemo, useRef, useState } from 'react';
import { history } from 'umi';
import { Button, Input, Tabs } from 'antd';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import HlsVideo from '@/components/HlsVideo';
import styles from './index.less';

const Hls: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [playUrl, setPlayUrl] = useState<string>();
  const playerRef = useRef<Player | null>(null);

  const handlePlayerReady = (player: Player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  const video = useMemo(() => {
    const videoJsOptions = {
      controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: true,
        fullscreenToggle: true, // 全屏按钮
        pictureInPictureToggle: false,
      },
      // http://kbs-dokdo.gscdn.com/dokdo_300/definst/dokdo_300.stream/playlist.m3u8
      // https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8
    };
    return (
      <HlsVideo
        options={{ ...videoJsOptions, sources: playUrl ? [{ src: playUrl, type: 'video/x-mpegURL' }] : undefined }}
        onReady={handlePlayerReady}
      />
    )
  }, [playUrl]);

  return (
    <div className={styles.container}>
      <Tabs
        defaultActiveKey='hls'
        accessKey='hls'
        items={[
          { key: 'flv', label: 'FLV' },
          { key: 'hls', label: 'HLS' },
        ]}
        onChange={key => history.push(`/${key}`)}
      />
      <div className={styles.video}>
        {video}
      </div>
      <Input
        placeholder='直播/回放地址'
        className={styles.input}
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <Button
        type='primary'
        disabled={!url}
        className={styles.button}
        onClick={() => setPlayUrl(url)}
      >
        播放
      </Button>
    </div>
  );
}

export default Hls;
