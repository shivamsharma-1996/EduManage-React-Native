import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo: React.FC = () => {
  return (
    <Image
      source={require('../assets/educonnect.png')}
      style={styles.logo}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    marginStart: 20,
    width: 150,
    height: 80,
  },
});

export default Logo;
