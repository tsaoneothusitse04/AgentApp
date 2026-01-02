import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';



export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3b96e0ff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'chatbox-outline' : 'chatbox-outline' } size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
