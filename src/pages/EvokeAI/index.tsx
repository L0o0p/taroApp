import { useRef } from 'react'
import { View } from '@tarojs/components'
import { InputPannel } from '../../component/InputPannel'
import './index.module.scss'
import { DiskPannel } from '../../component/DiskPannel'
import { ControlPannel } from '../../component/ControlPannel'

export default function Index() {
    const audioPlayer = useRef(); // 访问audio元素

    return (
        <View className='container'>
            <DiskPannel />
            <ControlPannel />
            <InputPannel />
        </View>
    )
}

