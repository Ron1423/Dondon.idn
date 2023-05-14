import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, SignIn, SignUp, Splash, Intro, OrderSummary, Menus, AboutUs,OrderSuccess } from '../src/screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen 
            name="Splash" 
            component={Splash}
            options={{headerShown : false}}
            />
            <Stack.Screen 
            name="Intro" 
            component={Intro}
            options={{headerShown : false}}
            />
            <Stack.Screen 
            name="Home" 
            component={Home}
            options={{headerShown : false}}
            />
            <Stack.Screen 
            name="Menus" 
            component={Menus}
            options={{headerShown : false}}
            />
            <Stack.Screen 
            name="OrderSummary" 
            component={OrderSummary}
            options={{headerShown : false}}
            />
            <Stack.Screen 
            name="AboutUs" 
            component={AboutUs}
            options={{headerShown : false}}
            />
            <Stack.Screen
              name="OrderSuccess"
              component={OrderSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{headerShown : false}}
            />
            <Stack.Screen 
            name="SignUp" 
            component={SignUp}
            options={{headerShown : false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;