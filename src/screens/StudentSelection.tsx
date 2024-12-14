import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ProfileCard from '../components/ProfileCard'; // Import the new ProfileCard component
import Illustration from '../components/Illustration';

const profiles = [
  {id: '1', name: 'Anuv', image: require('../assets/boyAvatar.png')},
  {id: '2', name: 'Himanshi', image: require('../assets/girlAvatar.png')},
  {id: '3', name: 'Saurabh', image: require('../assets/boyAvatar.png')},
  {id: '4', name: 'Rishika', image: require('../assets/girlAvatar.png')},
  {id: '5', name: 'Lokesh', image: require('../assets/boyAvatar.png')},
];

const StudentSelectionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        <Text style={styles.highlightedText}>Class</Text>pus
      </Text>

      <Illustration source={require('../assets/studentSelection.png')} />

      <Text style={styles.selectProfileText}>Select Profile</Text>

      <FlatList
        data={profiles}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProfileCard
            name={item.name}
            image={item.image}
            onPress={() => console.log(`${item.name} clicked`)}
          />
        )}
        contentContainerStyle={{
          paddingLeft: 10,
          paddingRight: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D2D2D',
    textAlign: 'left',
  },
  highlightedText: {
    color: '#6C63FF',
  },
  illustrationContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  illustrationImage: {
    width: 250,
    height: 180,
  },
  selectProfileText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D2D2D',
    marginBottom: 10,
    marginLeft: 10,
  },
  profileList: {
    justifyContent: 'flex-start',
    marginTop: 10,
  },
});

export default StudentSelectionScreen;
