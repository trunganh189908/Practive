import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import FlatListScreen from './src/screen/Flatlist';
import FlatListScreen2 from './src/screen/Flatlist2';
import ColorScreen from './src/screen/ColorScreen';
import SquareScreen from './src/screen/SquareScreen';
import BoxScreen from './src/screen/Chap7/BoxScreen';
import BoxScreen2 from './src/screen/Chap7/BoxScreen2';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="HomeScreen" >
        <Stack.Screen name="MUHome" component={HomeScreen} />
        <Stack.Screen name="PlayerScreen" component={FlatListScreen} />
        <Stack.Screen name="PlayerScreen2" component={FlatListScreen2} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
        <Stack.Screen name="BoxScreen" component={BoxScreen} />
        <Stack.Screen name="BoxScreen2" component={BoxScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;