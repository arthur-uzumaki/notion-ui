import { ScrollView, View } from 'react-native'
import { Header } from '@/components/header'
import { RecentList } from '@/components/recent-list'

import { DATA } from '@/utils/data'
import { PageList } from '@/components/page-list'

export default function Index() {
  return (
    <View className="flex-1 pt-8">
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pt-6 pb-[100px]"
      >
        <RecentList data={DATA.RECENT} />
        <PageList data={DATA.PAGES} />
      </ScrollView>
    </View>
  )
}
