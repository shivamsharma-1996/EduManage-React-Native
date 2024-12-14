import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Illustration from '../components/Illustration';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Logo from '../components/Logo';

const OtpScreen: React.FC = () => {
  const navigation = useNavigation();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [timer, setTimer] = useState(10);
  const [showResendButton, setShowResendButton] = useState(false);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Reference for the timer interval

  useEffect(() => {
    // Start the timer when the component is mounted
    startTimer();

    // Cleanup interval on component unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    // Clear any existing interval
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Start a new interval
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setShowResendButton(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Restart Timer when Resend is clicked
  const handleResendOtp = () => {
    console.log('OTP Resent');
    setTimer(10);
    setShowResendButton(false);
    startTimer(); // Start the timer again

    Toast.show({
      type: 'success',
      text1: 'OTP Sent',
      text2: 'A new OTP has been sent successfully.',
    });
    // TODO: Add API call to resend OTP here
  };

  // Check if OTP is completely filled
  useEffect(() => {
    const isFilled = otp.every(digit => digit !== '');
    setIsButtonDisabled(!isFilled);
  }, [otp]);

  // Handle input change for each box
  const handleChange = (text: string, index: number) => {
    if (text.length > 1) {
      return;
    }
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
    navigation.navigate('StudentSelection' as never);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <Logo />

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

        {showResendButton ? (
          <TouchableOpacity onPress={handleResendOtp}>
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.resendText}>
            Re-send code in{' '}
            <Text style={styles.boldText}>{`0:${
              timer < 10 ? `0${timer}` : timer
            }`}</Text>
          </Text>
        )}
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
