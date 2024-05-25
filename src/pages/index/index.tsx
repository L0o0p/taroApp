import { View, Text, Navigator } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text style={{ color: 'red' }}>Hello world!</Text>
      <Navigator url='/pages/testpage/index' >测试路由</Navigator>
    </View>
  )
}
