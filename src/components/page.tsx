import { colors } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

interface PageProps {
  title: string
}

export function Page({ title }: PageProps) {
  return (
    <View className="w-full flex-row gap-2 items-center p-4">
      <Feather name="chevron-right" size={20} color={colors.gray[300]} />
      <Feather name="file-text" size={20} color={colors.gray[300]} />

      <Text className="text-gray-100 text-base flex-1">{title}</Text>

      <TouchableOpacity>
        <Feather name="plus" size={20} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  )
}
