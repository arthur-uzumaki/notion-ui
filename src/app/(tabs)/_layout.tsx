import { Tabs } from 'expo-router'

import { Feather } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

export default function TabsLayout() {
  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: colors.gray[800],
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[100],
        tabBarInactiveTintColor: colors.gray[500],
        tabBarStyle: {
          backgroundColor: colors.gray[800],
          borderColor: colors.gray[400],
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="inbox" size={size} color={color} />
          ),
          tabBarBadge: 10,
          tabBarBadgeStyle: {
            backgroundColor: colors.red[300],
            borderRadius: 5,
          },
        }}
      />

      <Tabs.Screen
        name="edit"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="edit" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
