import { View, Text } from '@tarojs/components'
import { MoeTag, MoeHeader } from '@fumoe/taro-components'
import { useNavInfo } from '@fumoe/taro-hooks'
import './index.scss'

export default function Index() {
  const navInfo = useNavInfo()
  return (
    <View className='index'>
      <MoeHeader>首页测试</MoeHeader>
      <Text>高度:  {navInfo.appHeaderHeight}</Text>
      <MoeTag label='标签'></MoeTag>
    </View>
  )
}
