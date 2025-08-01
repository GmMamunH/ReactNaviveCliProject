import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../types';

type HomeScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  'Home'
>;

export default function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('About')}
        title="Go to About"
      />
    </View>
  );
}
