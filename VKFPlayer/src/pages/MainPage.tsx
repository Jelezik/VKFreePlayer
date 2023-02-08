import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/utils/redux-utils';
import {authSlice} from '../redux/reducers/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserMusic} from '../redux/actions/musicAction';

const MainPage = ({navigation}: any) => {
  const {takeAuthToken} = authSlice.actions;
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(state => state.auth);
  const {musicData} = useAppSelector(state => state.music);

  console.log('user token', token);

  const handleLogout = async (): Promise<void> => {
    dispatch(takeAuthToken(''));
    await AsyncStorage.clear();
    navigation.navigate('HelloPage');
  };

  useEffect(() => {
    dispatch(getUserMusic({token}));
  }, [dispatch, token]);

  console.log(musicData);

  return (
    <View>
      <Text>MainPage</Text>
      <Button title={'exit'} onPress={handleLogout} />
    </View>
  );
};

export default MainPage;
