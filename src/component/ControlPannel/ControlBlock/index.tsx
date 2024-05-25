import { useState } from "react";
import { useAtom } from "jotai";
import { View, Image } from "@tarojs/components"
import { diskRotationAtom } from '@/store/index'
import { icon } from '../iconStore'
import './index.module.scss';

export const ControlBlock = () => {
    return (
        <View className='controlBlock'>
            <PlayMode />
            <PlayControl />
            <Download />
        </View>
    )
}

const PlayMode = () => {
    const handleClick = () => {
        console.log('点击了播放模式')
    }
    return (
        <View className='playmode' onClick={handleClick}>
            <Image className='featherButton' src={icon.playmode} />
        </View>
    )
}
const Download = () => (
    <View className='download'>
        <Image className='featherButton' src={icon.download} onClick={() => console.log('功能键')} />
    </View>
)
const PlayControl = () => {
    const [diskRotation, setDiskRotation] = useAtom(diskRotationAtom)
    const [isPlaying, setIsPlaying] = useState(false);
    // 播放或暂停音乐
    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        setDiskRotation(!diskRotation)
        console.log('变换了旋转状态', diskRotation)
    };
    return (
        <View className='playControl'>
            <Image className='featherButton' src={icon.previousbutton} onClick={() => console.log('功能键')} />
            <Image className='playbutton' src={isPlaying ? icon.playButtonT : icon.playButtonF} onClick={togglePlayPause}></Image>
            <Image className='featherButton' src={icon.nextbutton} onClick={() => console.log('功能键')} />
        </View>
    )
}


