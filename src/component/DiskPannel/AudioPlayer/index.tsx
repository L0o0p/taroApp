import { Component } from 'react';
import Taro from '@tarojs/taro';


interface AudioPlayerProps {
    src: string; // 将 src 定义为字符串类型
}
class AudioPlayer extends Component<AudioPlayerProps> {

    componentDidMount() {
        this.audioContext = Taro.createInnerAudioContext();
        this.audioContext.src = '@/store/Im-sorry.mp3'; // 使用传入的 src prop 设置音频资源的地址
        this.audioContext.onPlay(() => {
            console.log('开始播放');
        });
        this.audioContext.onError((res) => {
            console.error('播放失败', res.errMsg);
        });
    }

    componentWillUnmount() {
        if (this.audioContext) {
            this.audioContext.destroy();
        }
    }
    // 类的属性声明放在生命周期方法之后
    audioContext: Taro.InnerAudioContext | null = null;
    playAudio = () => {
        if (this.audioContext) {
            this.audioContext.play();
        }
    }

    pauseAudio = () => {
        if (this.audioContext) {
            this.audioContext.pause();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.playAudio}>播放</button>
                <button onClick={this.pauseAudio}>暂停</button>
            </div>
        );
    }
}

export default AudioPlayer;