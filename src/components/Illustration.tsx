import React from 'react';
import {View, Image, StyleSheet, ImageSourcePropType} from 'react-native';

// Props type definition
interface IllustrationProps {
  source: ImageSourcePropType;
  style?: object;
}

const Illustration: React.FC<IllustrationProps> = ({source, style}) => {
  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={[styles.image, style]} // Merge default style with passed style
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default Illustration;
