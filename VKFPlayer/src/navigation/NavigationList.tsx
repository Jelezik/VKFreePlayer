import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthPage from '../pages/AuthPage';

const Stack = createNativeStackNavigator();

const NavigationList = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthPage" component={AuthPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationList;
