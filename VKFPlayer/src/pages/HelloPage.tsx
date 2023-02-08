import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const HelloPage = ({navigation}: any): JSX.Element => {
  // const [loadingKey, setLoadingKey] = useState<boolean>(false);
  // const dispatch = useAppDispatch();
  // const {takeAuthToken} = authSlice.actions;
  // const {token} = useAppSelector(state => state.auth);

  // const handleAuth = async () => {
  // const asyncAuthKey = await AsyncStorage.getItem('authKey');
  //
  // if (asyncAuthKey !== null && token) {
  //   navigation.navigate('MainPage');
  // } else {
  // const auth = await VKLogin.login(['friends', 'photos', 'audio']);
  // dispatch(takeAuthToken(auth.access_token));
  // try {
  //   await AsyncStorage.setItem('authKey', String(auth.access_token));
  // } catch (e) {
  //   console.log(e);
  //   }
  // }
  // };

  // const getUserKey = useCallback(async () => {
  //   setLoadingKey(true);
  //   try {
  //     const userAuthToken = await AsyncStorage.getItem('authKey');
  //     if (userAuthToken && token) {
  //       navigation.navigate('MainPage');
  //       setLoadingKey(false);
  //     } else {
  //       setLoadingKey(false);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     setLoadingKey(false);
  //   }
  // }, [navigation, token]);
  //
  // useEffect(() => {
  //   getUserKey();
  // }, [getUserKey]);
  //
  // if (loadingKey) {
  //   <Text>Загрузочка</Text>;
  // }

  return (
    <View>
      <Text>Пройдите авторизацию</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AuthPage')}>
        <Text>Авторизироваться</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
        <Text>mainpage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelloPage;
