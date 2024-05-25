import { View, Image } from "@tarojs/components"
import { icon } from '../iconStore'
import './index.module.scss';


export const TitleBlock = () => {
    const songName = '富士山下'
    const handleClick = () => {
        console.log('点击分享', songName);
    }
    return (
        <View className='titleBlock'>
            <View className='title'>
                {songName}
            </View>
            <View className='shareIcon' onClick={handleClick}>
                <Image style={{ width: '24px', height: '24px' }} src={icon.shareIcon} />
            </View>
        </View>
    )
}