import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Illustration from '../components/Illustration';
import {useNavigation} from '@react-navigation/native';
import Logo from '../components/Logo';

const profiles = [
  {id: '1', name: 'Anuv', image: require('../assets/boyAvatar.png')},
  {id: '2', name: 'Himanshi', image: require('../assets/girlAvatar.png')},
  {id: '3', name: 'Saurabh', image: require('../assets/boyAvatar.png')},
  {id: '4', name: 'Rishika', image: require('../assets/girlAvatar.png')},
  {id: '5', name: 'Lokesh', image: require('../assets/boyAvatar.png')},
];

const StudentSelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.topSection}>
        <Illustration source={require('../assets/studentSelection.png')} />
        <Text style={styles.selectProfileText}>Select Profile</Text>
      </View>

      {/* Profile List */}
      <FlatList
        data={profiles}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProfileCard
            name={item.name}
            image={item.image}
            onPress={() => {
              navigation.navigate('Home' as never);
            }}
          />
        )}
        contentContainerStyle={styles.profileListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  topSection: {
    marginBottom: 20,
  },
  selectProfileText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D2D2D',
    marginTop: 10,
    marginLeft: 20,
  },
  profileListContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    justifyContent: 'center',
  },
});

export default StudentSelectionScreen;
