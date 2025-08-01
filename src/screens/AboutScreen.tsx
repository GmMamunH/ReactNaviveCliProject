import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../types';

export default function AboutScreen({
  navigation,
}: {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'About'>;
}) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">About Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
