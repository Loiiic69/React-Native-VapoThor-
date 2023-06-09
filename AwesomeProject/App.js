import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './composant/login';
import SignIn from './composant/signin';
import Profil from './composant/profil';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown : false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Profil" component={Profil} />
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;