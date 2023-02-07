import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthPage from '../pages/AuthPage';

const NavigationList = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthPage" component={AuthPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationList;
