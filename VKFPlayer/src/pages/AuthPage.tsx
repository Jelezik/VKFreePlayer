import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import VKLogin from 'react-native-vkontakte-login';
import {useAppDispatch} from '../redux/utils/redux-utils';
import {authSlice} from '../redux/reducers/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthPage = ({navigation}: any): JSX.Element => {
  const [loadingKey, setLoadingKey] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {takeAuthToken} = authSlice.actions;

  const handleAuth = async (): Promise<void> => {
    const asyncAuthKey = await AsyncStorage.getItem('authKey');

    if (asyncAuthKey !== null) {
      navigation.navigate('MainPage');
    } else {
      const auth = await VKLogin.login(['friends', 'photos', 'audio']);
      dispatch(takeAuthToken(auth.access_token));

      try {
        await AsyncStorage.setItem('authKey', String(auth.access_token));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getUserKey = useCallback(async () => {
    setLoadingKey(true);
    try {
      const userAuthToken = await AsyncStorage.getItem('authKey');
      if (userAuthToken) {
        navigation.navigate('MainPage');
        setLoadingKey(false);
      } else {
        setLoadingKey(false);
      }
    } catch (e) {
      console.log(e);
      setLoadingKey(false);
    }
  }, [navigation]);

  useEffect(() => {
    getUserKey();
  }, [getUserKey]);

  if (loadingKey) {
    <Text>Загрузочка</Text>;
  }

  return (
    <View>
      <Text>Пройдите авторизацию</Text>
      <TouchableOpacity onPress={handleAuth}>
        <Text>Авторизироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthPage;
