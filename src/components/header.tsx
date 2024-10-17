import { colors } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export function Header() {
  return (
    <View className="w-full flex-row gap-2.5 items-center p-5 border-b border-b-gray-300 ">
      <Image
        source={{ uri: 'https://github.com/arthur-uzumaki.png' }}
        className="size-[42px]"
      />

      <View className="flex-1">
        <Text className="text-gray-100 font-medium text-lg">Arthur Sousa</Text>
        <Text className="text-gray-400  text-sm">
          arthursousarabelo2@gmail.com
        </Text>
      </View>

      <TouchableOpacity>
        <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
      </TouchableOpacity>
    </View>
  )
}
