import React, { useEffect, useRef, useState } from 'react';
import { history } from 'umi';
import mpegts from 'mpegts.js';
import { Button, Input, Radio, Tabs } from 'antd';
import styles from './index.less';

const Flv: React.FC = () => {
  const [supported, setSupported] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  const [isLive, setIsLive] = useState<boolean>(true);
  const ref = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<mpegts.Player>();

  const destroyPlayer = () => {
    playerRef.current?.unload();
    playerRef.current?.destroy();
  }

  useEffect(() => {
    setSupported(mpegts.isSupported());

    return () => {
      destroyPlayer();
    }
  }, []);

  const initPlayer = (url: string, isLive: boolean) => {
    console.log('initPlayer', url, isLive);
    destroyPlayer();
    // https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv
    const player = mpegts.createPlayer({
      type: 'flv',
      isLive,
      url,
    });
    playerRef.current = player;
    player.attachMediaElement(ref.current!);
    player.load();
    player.play();
  }

  return (
    <div className={styles.container}>
      <Tabs
        defaultActiveKey='flv'
        accessKey='flv'
        items={[
          { key: 'flv', label: 'FLV' },
          { key: 'hls', label: 'HLS' },
        ]}
        onChange={key => history.push(`/${key}`)}
      />
      {supported ? (
        <>
          <video ref={ref} className={styles.video} controls={!isLive} autoPlay playsInline>
            不支持HTML5 video
          </video>
          <Input
            placeholder='直播地址'
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
      ) : '不支持mpegts.js'}
    </div>
  );
}

export default Flv;