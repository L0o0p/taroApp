
import { useState } from "react";
import { View, Text, Textarea } from "@tarojs/components";
import './index.module.scss';

export const InputPannel = () => {
    const [inputContent, setInputContent] = useState('');
    const handleClick = () => {
        console.log('提交用户输入：', inputContent)
    }
    return (
        <View className='inputWindow'>
            <View className='inputWindowContainer'>
                <View className='inputBlock'>
                    <View className='inputWindowTitle'><Text>歌曲描述</Text></View>
                    <Textarea
                      className='inputPrompt'
                      placeholder='我想要一首...'
                      focus
                      onInput={(e) => setInputContent(e.detail.value)}
                      value={inputContent}
                    />
                </View>
                <View className='createButton' onClick={handleClick}>
                    开始创作
                </View>
            </View>
        </View>
    );
}