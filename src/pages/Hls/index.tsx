import React, { useEffect, useRef, useState } from 'react';
import { history } from 'umi';
import Hls from 'hls.js';
import { Button, Input, Radio, Tabs } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

const HlsVideo: React.FC = () => {
  const [supported, setSupported] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  const [isLive, setIsLive] = useState<boolean>(true);
  const ref = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Hls>();

  const destroyPlayer = () => {
    playerRef.current?.destroy();
  }

  useEffect(() => {
    setSupported(Hls.isSupported());

    return () => {
      destroyPlayer();
    }
  }, []);

  const initPlayer = (url: string, isLive: boolean) => {
    console.log('initPlayer', url, isLive);
    destroyPlayer();
    // http://kbs-dokdo.gscdn.com/dokdo_300/definst/dokdo_300.stream/playlist.m3u8
    // https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8
    const player = new Hls();
    playerRef.current = player;
    player.attachMedia(ref.current!);
    player.loadSource(url);
    ref.current?.play();
  }

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
      {supported ? (
        <>
          <video ref={ref} className={classNames([styles.video, isLive ? styles.videoLive : null])} controls controlsList='noplaybackrate' disablePictureInPicture autoPlay playsInline>
            不支持HTML5 video
          </video>
          <Input
            placeholder='播放地址'
            className={styles.input}
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
          <Button
            type='primary'
            disabled={!url}
            className={styles.button}
            onClick={() => initPlayer(url, isLive)}
          >
            播放
          </Button>
          <Radio.Group
            value={isLive}
            onChange={e => setIsLive(e.target.value)}
            className={styles.radio}
            options={[
              { label: '直播', value: true },
              { label: '录像', value: false },
            ]}
          />
        </>
      ) : '不支持hls.js'}
    </div>
  );
}

export default HlsVideo;
