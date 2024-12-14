import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import Illustration from '../components/Illustration';

const OtpScreen: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Check if OTP is fully filled
  useEffect(() => {
    const isFilled = otp.every(digit => digit !== '');
    setIsButtonDisabled(!isFilled);
  }, [otp]);

  // Handle input change for each box
  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return; // Allow only single digit
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace for navigation
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmitOtp = () => {
    const finalOtp = otp.join('');
    console.log('OTP Submitted:', finalOtp);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <Image
        source={require('../assets/educonnect.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Illustration source={require('../assets/otp.png')} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Enter OTP</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={styles.otpBox}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              autoFocus={index === 0}
            />
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isButtonDisabled ? '#D6CFFF' : '#7E57FF'},
          ]}
          disabled={isButtonDisabled}
          onPress={handleSubmitOtp}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        <Text style={styles.resendText}>
          Re-send code in{' '}
          <Text style={styles.boldText}>{`0:${
            timer < 10 ? `0${timer}` : timer
          }`}</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 80,
    marginTop: 30,
  },
  contentContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  otpBox: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    width: 50,
    height: 50,
    marginHorizontal: 5,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#F7F7F7',
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resendText: {
    marginTop: 15,
    fontSize: 14,
    color: '#7E57FF',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default OtpScreen;
