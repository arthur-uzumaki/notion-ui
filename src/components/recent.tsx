import { Feather } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

interface RecentProps {
  data: {
    title: string
    cover?: string
  }
}

export function Recent({ data }: RecentProps) {
  return (
    <TouchableOpacity
      className="h-[134px] w-[134px]  rounded-[10px] overflow-hidden bg-gray-700"
      activeOpacity={0.7}
    >
      <Image
        className="w-full h-1/2 bg-gray-600"
        source={{ uri: data.cover }}
      />

      <View className=" w-full h-1/2 p-3">
        <Feather
          name="file-text"
          size={32}
          color={colors.zinc[400]}
          className="absolute left-1.5 -top-4"
        />

        <Text className="text-gray-100  text-base mt-2.5" numberOfLines={2}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
