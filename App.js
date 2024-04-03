import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Search from './Search';
import Browes from './Browes';
import AccountScreen from './AccountScreen';
import OpenPage1 from './OpenPage1';
import OpenChapters1 from './OpenChapters1';
import Favorite from './Favorite';
import OpenPage2 from './OpenPage2';
import OpenChapters2 from './OpenChapters2';
import OpenPage3 from './OpenPage3';
import OpenChapters3 from './OpenChapters3';
import MangaConvter from './MangaConvter';
import MangaMaker from './MangaMaker';
import UploadManga from './UploadManga';
import UploadChapters from './UploadChapters';
import All from './All';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator(); 


export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Browes" component={Browes} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="OpenPage1" component={OpenPage1} />
        <Stack.Screen name="OpenPage2" component={OpenPage2} />
        <Stack.Screen name="OpenPage3" component={OpenPage3} />
        <Stack.Screen name="OpenChapters1" component={OpenChapters1} />
        <Stack.Screen name="OpenChapters2" component={OpenChapters2} />
        <Stack.Screen name="OpenChapters3" component={OpenChapters3} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="MangaConvter" component={MangaConvter} />
        <Stack.Screen name="MangaMaker" component={MangaMaker} />
        <Stack.Screen name="UploadManga" component={UploadManga} />
        <Stack.Screen name="UploadChapters" component={UploadChapters} />
        <Stack.Screen name="All" component={All} />
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
