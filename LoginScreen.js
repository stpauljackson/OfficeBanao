import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('username')
      .then(username => {
        if (username) {
          setIsLoggedIn(true);
          navigation.navigate('Dashboard');
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error reading AsyncStorage:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return null;
  }

  const handleLogin = async () => {
    // Perform authentication logic here (e.g., check username and password)
    if (username === 'dummy' && password === 'password') {
      // Save user information to AsyncStorage
      await AsyncStorage.setItem('username', username);

      // Navigate to the Dashboard screen
      navigation.navigate('Dashboard');
    } else {
      console.log('password did not match');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#5417D7',
          height: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: 200,
          paddingHorizontal: 20,
          marginTop: 20,
          backgroundColor:'#5417D7'
        }}
        onPress={handleLogin}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default LoginScreen;
