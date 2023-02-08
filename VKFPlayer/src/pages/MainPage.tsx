import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/utils/redux-utils';
import {authSlice} from '../redux/reducers/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainPage = ({navigation}: any) => {
  const {takeAuthToken} = authSlice.actions;
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(state => state.auth);
  const {musicData} = useAppSelector(state => state.music);

  console.log('user token', token);

  const handleLogout = async (): Promise<void> => {
    // await VKLogin.logout();
    dispatch(takeAuthToken(''));
    await AsyncStorage.clear();
    navigation.navigate('AuthPage');
  };

  // useEffect(() => {
  //   dispatch(getUserMusic({token}));
  // }, [dispatch, token]);

  console.log(musicData);

  return (
    <View>
      <Text>MainPage</Text>
      <Button title={'exit'} onPress={handleLogout} />
    </View>
  );
};

export default MainPage;
