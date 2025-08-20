import { View, Text } from '@tarojs/components'
import { MoeTag, MoeHeader } from '@fumoe/taro-components'
import './index.scss'

export default function Index() {
  return (
    <View className='index'>
      <MoeHeader>首页测试</MoeHeader>
      <Text>Hello world!</Text>
      <MoeTag label='标签'></MoeTag>
    </View>
  )
}
