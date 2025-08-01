import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingScreen from './SettingScreen';
import PrivacyScreen from './PrivacyScreen';
import QuizScreen from './QuizScreen';
import BlogScreen from './BlogScreen';
import { View, Text } from 'react-native';
import { RootDrawerParamList, BottomTabParamList } from '../types';
import { DrawerScreenProps } from '@react-navigation/drawer';

type HomeScreenProps = DrawerScreenProps<RootDrawerParamList, 'Home'>;

const Tab = createBottomTabNavigator<BottomTabParamList>();

function HomeContent() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">Home Content Screen</Text>
    </View>
  );
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Privacy') {
            iconName = focused ? 'shield-checkmark' : 'shield-checkmark-outline';
          } else if (route.name === 'Quiz') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          } else if (route.name === 'Blogs') {
            iconName = focused ? 'book' : 'book-outline';
          } else {
            iconName = 'alert-circle'; // Default icon for unknown routes
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Hide header for nested tabs
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeContent} options={{ title: 'Home' }} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Privacy" component={PrivacyScreen} />
      <Tab.Screen name="Quiz" component={QuizScreen} />
      <Tab.Screen name="Blogs" component={BlogScreen} />
    </Tab.Navigator>
  );
} 