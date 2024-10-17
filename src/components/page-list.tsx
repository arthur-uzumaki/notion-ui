import { colors } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Page } from '@/components/page'

interface PageListProps {
  data: {
    id: string
    title: string
  }[]
}

export function PageList({ data }: PageListProps) {
  return (
    <View className="p-5 gap-3">
      <View className="flex-row items-center gap-4 pr-4 ">
        <Text className="text-gray-300 text-base flex-1">Privado</Text>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={20} color={colors.gray[300]} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name="plus" size={20} color={colors.gray[300]} />
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        className="bg-gray-700 rounded-lg"
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Page title={item.title} />}
        ItemSeparatorComponent={() => (
          <View className="flex-1 h-[1px] bg-gray-500 ml-[42px]  " />
        )}
        scrollEnabled={false}
      />
    </View>
  )
}
