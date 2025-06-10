import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#D3D3D3',
          borderTopWidth: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="history"
        options={{
          title: 'Historial',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Cámaras',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="video-camera" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'Reporte',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="exclamation-circle" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Menú',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bars" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
