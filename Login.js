import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both username/email and password');
      return;
    }else if (password==="kunal"){
      navigation.navigate('Home');
    }else{
      Alert.alert("wrong password")
    }

    // Your login logic
    console.log('Username:', username);
    console.log('Password:', password);

    // You can navigate to home page after successful login
    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login </Text>
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo:{
    width:150,
    height:150,
    marginBottom:10,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    height:110,
    
    
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 10,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    width: '80%',
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  signUpLink: {
    marginTop: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
export default Login;