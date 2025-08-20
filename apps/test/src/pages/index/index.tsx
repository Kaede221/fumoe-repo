import { View, Text } from '@tarojs/components'
import { MoeTag } from '@fumoe/taro-components'
import './index.scss'

export default function Index() {
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <MoeTag label='标签'></MoeTag>
    </View>
  )
}
