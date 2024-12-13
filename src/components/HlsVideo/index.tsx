import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';

interface HlsVideoProps {
  options?: any;
  onReady?: (player: Player) => void;
}

const defaultOptions = {
  aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
  autoplay: true, // 如果true,浏览器准备好时开始回放
  // bigPlayButton: true, // 中间的大按钮
  controls: true, // 是否显示操作按钮
  fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
  language: 'zh-CN', // 语言
  languages: {
    'zh-CN': {
      Play: '播放',
      Pause: '暂停',
      Replay: '重播',
      Mute: '静音',
      Unmute: '取消静音',
      Fullscreen: '全屏',
      'The media could not be loaded, either because the server or network failed or because the format is not supported.':
        '无法加载媒体，原因可能是服务器或网络出现故障，或者不支持该格式',
    },
  },
  // loop: true, // 自动重播
  muted: false, // 默认情况下将会消除任何音频
  notSupportedMessage: '此视频暂无法播放', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
  // playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
  // noUITitleAttributes: false, // 是否去掉功能按钮的title
  // poster: videoInfo.img, // 封面地址
  preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据 auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
  // audioOnlyMode: false, // 只显示控制栏
  // width: document.documentElement.clientWidth,
  controlBar: {
    // volumePanel: true, // 音量控制
    // playToggle: true, // 播放暂停按钮
    remainingTimeDisplay: true, // 显示剩余时间
    // progressControl: true, // 进度条
    fullscreenToggle: true, // 全屏按钮
    pictureInPictureToggle: false, // 画中画按钮
    timeDivider: true,
    durationDisplay: true,
  },
};

const HlsVideo: React.FC<HlsVideoProps> = (props) => {
  const { options, onReady } = props;
  const ref = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    const initPlayer = () => {
      const player = videojs(ref.current!, { ...defaultOptions, ...options }, () => {
        videojs.log('player is ready');
        onReady?.(player);
      });
      playerRef.current = player;
    };
    if (!playerRef.current) {
      initPlayer();
    } else {
      playerRef.current.src(options?.sources ?? []);
    }
  }, [options]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={ref} className="video-js vjs-big-play-centered" />
    </div>
  );
};

export default HlsVideo;
