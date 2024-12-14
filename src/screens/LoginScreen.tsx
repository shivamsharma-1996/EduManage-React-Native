import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Illustration from '../components/Illustration';

type LoginScreenProps = {};

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const navigation = useNavigation();

  const [inputText, setInputText] = useState('');
  const themeColor = '#6C63FF';

  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  const handlePress = () => {
    console.log('OTP Requested');
    navigation.navigate('Otp' as never);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/educonnect.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Illustration source={require('../assets/login.png')} />

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.subtitle}>Sign up with your mobile number</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.prefix}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={inputText}
            onChangeText={handleInputChange}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: inputText ? themeColor : '#DDDCF3'},
          ]}
          disabled={!inputText}
          onPress={handlePress}>
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 80,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  placeholder: {
    width: 200,
    height: 200,
  },
  contentContainer: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  prefix: {
    marginRight: 5,
    fontSize: 16,
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;
