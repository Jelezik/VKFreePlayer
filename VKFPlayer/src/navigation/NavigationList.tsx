import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';

const NavigationList = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthPage"
          component={AuthPage}
          options={{title: 'Авторизация', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name={'MainPage'}
          component={MainPage}
          options={{title: 'Мэин пэйдж', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationList;
