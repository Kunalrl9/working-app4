import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Search from './Search';
import Browes from './Browes';
import AccountScreen from './AccountScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator(); 


export default function App() {
  return (
    
  
 <NavigationContainer>
  <Stack.Navigator initialRouteName="Browes">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Browes" component={Browes} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
      </Stack.Navigator>
 </NavigationContainer>


  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
    
//     alignItems: 'center',
//     justifyContent: 'center',


    
    
//   },
// });
