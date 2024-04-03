import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Search from './Search';
import Browes from './Browes';
import AccountScreen from './AccountScreen';
import OpenPage1 from './src/screen/OpenPage1';
import OpenChapters1 from './src/screen/OpenChapters1';
import Favorite from './Favorite';
import OpenPage2 from './src/screen/OpenPage2';
import OpenChapters2 from './src/screen/OpenChapters2';
import OpenPage3 from './src/screen/OpenPage3';
import OpenChapters3 from './src/screen/OpenChapters3';
import MangaConvter from './MangaConvter';
import MangaMaker from './MangaMaker';
import UploadManga from './UploadManga';
import UploadChapters from './UploadChapters';
import All from './All';
import OpenPage4 from './src/screen/OpenPage4';
import OpenPage5 from './src/screen/OpenPage5';
import OpenPage6 from './src/screen/OpenPage6';
import OpenPage7 from './src/screen/OpenPage7';
import OpenPage8 from './src/screen/OpenPage8';
import OpenChapters4 from './src/screen/OpenChapters4';
import OpenChapters5 from './src/screen/OpenChapters5';
import OpenChapters6 from './src/screen/OpenChapters6';
import OpenChapters7 from './src/screen/OpenChapters7';
import OpenChapters8 from './src/screen/OpenChapters8';
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
        <Stack.Screen name="OpenPage4" component={OpenPage4} />
        <Stack.Screen name="OpenPage5" component={OpenPage5} />
        <Stack.Screen name="OpenPage6" component={OpenPage6} />
        <Stack.Screen name="OpenPage7" component={OpenPage7} />
        <Stack.Screen name="OpenPage8" component={OpenPage8} />
        <Stack.Screen name="OpenChapters1" component={OpenChapters1} />
        <Stack.Screen name="OpenChapters2" component={OpenChapters2} />
        <Stack.Screen name="OpenChapters3" component={OpenChapters3} />
        <Stack.Screen name="OpenChapters4" component={OpenChapters4} />
        <Stack.Screen name="OpenChapters5" component={OpenChapters5} />
        <Stack.Screen name="OpenChapters6" component={OpenChapters6} />
        <Stack.Screen name="OpenChapters7" component={OpenChapters7} />
        <Stack.Screen name="OpenChapters8" component={OpenChapters8} />
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
