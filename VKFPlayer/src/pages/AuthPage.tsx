import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import VKLogin from 'react-native-vkontakte-login';

const AuthPage = (): JSX.Element => {
  const handleAuth = async (): Promise<void> => {
    const isLoggedIn = await VKLogin.isLoggedIn();
    console.log(isLoggedIn);
    const auth = await VKLogin.login(['friends', 'photos', 'audio']);
    console.log(auth.access_token);
  };

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
