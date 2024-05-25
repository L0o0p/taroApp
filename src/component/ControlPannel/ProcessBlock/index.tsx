import { useState } from "react";
import { View, Slider } from "@tarojs/components"
import './index.module.scss';

export const ProcessBlock = () => {
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // 处理进度条的改变
    const handleProgress = (e) => {
    };

    return (
        <View className='processBlock'>
            {/* <View className='processBar'>
                <View className='bar' />
            </View> */}
            <Slider
                backgroundColor='#A0A0A2'
                activeColor='#FF283E'
                blockSize={16}
                trackSize={16}
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleProgress}
            />
            <View className='processTime'>
                <View className='nowTime' >00:00</View>
                <View className='fullTime' >00:00</View>
            </View>
        </View>
    )
}
