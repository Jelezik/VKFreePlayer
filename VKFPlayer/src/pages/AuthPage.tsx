import React from 'react';
import {WebView, WebViewNavigation} from 'react-native-webview';

const AuthPage = () => {
  const onNavigationStateChange = (navigationState: WebViewNavigation) => {
    const parseURL = (url: string) => {
      let regex = /[?#&]([^=#]+)=([^&#]*)/g,
        params: any = {},
        match;
      while ((match = regex.exec(url))) {
        params[match[1]] = match[2];
      }
      return params;
    };

    const url = navigationState.url;

    const params = parseURL(url);

    console.log('that params', params);
    console.log('token', params.access_token);

    if (params.access_token) {
      // Save token for native requests & move to the next screen
    }
  };

  return (
    <WebView
      source={{
        uri: 'https://oauth.vk.com/authorize?client_id=51545973&redirect_uri=https://oauth.vk.com/blank.html&scope=10&response_type=token&display=mobile',
      }}
      onNavigationStateChange={onNavigationStateChange}
    />
  );
};

export default AuthPage;
