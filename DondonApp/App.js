import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './src/screens/DrawerContent';
import { Home, SignIn, SignUp } from './src/screens';
import Router from './router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
           <Drawer.Screen name="Router" component={Router} options={{headerShown : false}} />
           <Drawer.Screen name="Home" component={Home} options={{headerShown : false}} />
           <Drawer.Screen name="SignIn" component={SignIn} options={{headerShown : false}} />
           <Drawer.Screen name="SignUp" component={SignUp} options={{headerShown : false}} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
