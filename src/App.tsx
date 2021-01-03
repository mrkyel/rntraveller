import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './Screens/WelcomePage';
import Login from './Screens/Login';
import Register from './Screens/Register';

const Stack = createStackNavigator();

const NavigationMainOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#52b669',
    shadowColor: 'transparent',
  },
  headerTitleStyle: {
    fontSize: 20,
  },
  cardStyle: {
    backgroundColor: '#52b669',
  },
};

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name=" "
          component={WelcomePage}
        />
        <Stack.Screen
          options={{
            title: '로그인',
            headerTitleAlign: 'center',
            ...NavigationMainOptions,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
