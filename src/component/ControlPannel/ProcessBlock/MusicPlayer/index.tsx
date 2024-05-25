import { useState, useEffect, useRef } from 'react';

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioPlayer = useRef(); // 访问audio元素
    const footage = { imagUrl: '/conclusion.jpeg', audioUrl: '/conclusion.mp3' }

    // 播放或暂停音乐
    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
      
    };
;

    // 格式化时间显示
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${String(seconds).padStart(2, '0')}`;
    };

    // 处理进度条的改变
    const handleProgress = (e) => {
    };

    return (
        <div>
            <div className='footageContainer' >
                <img style={{ height: '200px', width: '200px', borderRadius: '30px' }} src={footage.imagUrl} alt='conclusion' />
            </div>
            <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <input
                type="range"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleProgress}
            />
            <div>
                <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
            </div>
        </div>
    );
}

export default MusicPlayer;