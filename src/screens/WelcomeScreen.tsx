import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../components/Logo';

type WelcomeScreenProps = {};

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
        <Text style={styles.subtitle}>
          Welcome to EduConnect: Bridging the Gap Between Schools, Teachers, and
          Parents.
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.parentButton}
          onPress={() => {
            // TODO: Pass userType to the Login screen
            // navigation.navigate('Login', {
            //   userType: 'userType',
            // });
            navigation.navigate('Login' as never);
          }}>
          <Text style={styles.parentButtonText}>Login as Parent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.staffButton}
          onPress={() => navigation.navigate('Login' as never)}>
          <Text style={styles.staffButtonText}>Login as Staff</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 0,
    alignItems: 'center',
    marginTop: height * 0.2, // Positions logo at 30% of screen height
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: -height * 0.1,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  parentButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  parentButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  staffButton: {
    backgroundColor: '#EDEBFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  staffButtonText: {
    color: '#4B5FFF',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default WelcomeScreen;
