import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import VKLogin from 'react-native-vkontakte-login';
import {useAppDispatch} from '../redux/utils/redux-utils';
import {authSlice} from '../redux/reducers/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainPage = ({navigation}: any) => {
  const {takeAuthToken} = authSlice.actions;
  const dispatch = useAppDispatch();

  const handleLogout = async (): Promise<void> => {
    await VKLogin.logout();
    dispatch(takeAuthToken(''));
    await AsyncStorage.clear();
    navigation.navigate('AuthPage');
  };

  return (
    <View>
      <Text>MainPage</Text>
      <Button title={'exit'} onPress={handleLogout} />
    </View>
  );
};

export default MainPage;
