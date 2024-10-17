import { FlatList, Text, View } from 'react-native'
import { Recent } from '@/components/recent'

interface RecentListProps {
  data: {
    id: string
    title: string
    cover?: string
  }[]
}

export function RecentList({ data }: RecentListProps) {
  return (
    <View className="w-full gap-3 ">
      <Text className="text-zinc-400 text-base ml-5">Recentes</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-3 px-5"
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Recent data={item} />}
        scrollEnabled={false}
      />
    </View>
  )
}
