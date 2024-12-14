import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ProfileCard = ({name, image, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.profileImageContainer}>
      <Image source={image} style={styles.profileImage} resizeMode="contain" />
    </View>
    <Text style={styles.profileName}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
    width: 90,
  },
  profileImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  profileName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#2D2D2D',
  },
});

export default ProfileCard;
