import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import ProfileCard from '../components/ProfileCard'; // Import the ProfileCard component
import Logo from '../components/Logo';

const menuItems = [
  {id: '1', name: 'Fees', image: require('../assets/fees.png')},
  {id: '2', name: 'Notice', image: require('../assets/notice.png')},
  {id: '3', name: 'Calender', image: require('../assets/calender.png')},
  {
    id: '4',
    name: 'Home Work / Assignment',
    image: require('../assets/homework.png'),
  },
  {id: '5', name: 'Profile', image: require('../assets/boyAvatar.png')},
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />

      {/* Header with Select Profile and Bell */}
      <View style={styles.headerContainer}>
        <Text style={styles.selectProfileText}>Your Dashboard</Text>

        {/* Notification Bell */}
        <TouchableOpacity
          onPress={() => console.log('Notification clicked')}
          style={styles.bellIconContainer}>
          <Image
            source={require('../assets/bell.png')}
            style={styles.bellIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <FlatList
        data={menuItems}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProfileCard
            name={item.name}
            image={item.image}
            onPress={() => console.log(`${item.name} clicked`)}
          />
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 80,
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  selectProfileText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D2D2D',
    marginBottom: 10,
    marginLeft: 10,
  },
  bellIconContainer: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
  },
  bellIcon: {
    width: 30,
    height: 30,
  },
  flatListContent: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
