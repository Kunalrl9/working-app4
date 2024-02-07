import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator(); 
export default function App() {
  return (
    
  
 <NavigationContainer>
  <Stack.Navigator initialRouteName="signup">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
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
