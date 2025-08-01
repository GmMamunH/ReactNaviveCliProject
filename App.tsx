import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

type RootDrawerParamList = {
  Home: undefined;
  About: undefined;
  Contact: undefined;
};

type HomeScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Home'>;

function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('About')}
        title="Go to About"
      />
    </View>
  );
}

function AboutScreen({ navigation }: { navigation: DrawerNavigationProp<RootDrawerParamList, 'About'> }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>About Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function ContactScreen({ navigation }: { navigation: DrawerNavigationProp<RootDrawerParamList, 'Contact'> }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}