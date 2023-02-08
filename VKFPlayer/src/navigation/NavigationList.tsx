import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from '../pages/MainPage';
import HelloPage from '../pages/HelloPage';
import AuthPage from '../pages/AuthPage';

const NavigationList = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HelloPage"
          component={HelloPage}
          options={{title: 'Авторизация', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="AuthPage"
          component={AuthPage}
          options={{title: 'Авторизация', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name={'MainPage'}
          component={MainPage}
          options={{
            title: 'Мэин пэйдж',
            headerTitleAlign: 'center',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationList;
