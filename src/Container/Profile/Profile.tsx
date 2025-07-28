
import React, { use, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { launchCamera, launchImageLibrary, Asset } from 'react-native-image-picker';
import { Alert, Platform, ActionSheetIOS } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const STATIC_PROFILE = {
  name: 'Nitin Prakash Singh',
  totalTests: 12,
  passedTest : 10,
  mobile: '+91 9876543210',
  email: 'john.doe@example.com',
  image: null, // Default image can be set here
};

const Profile = () => {
  const [profile, setProfile] = useState(STATIC_PROFILE);
  const [image, setImage] = useState<string | null>(null);
  const isFocused = useIsFocused

  const onImagePicked = (assets: Asset[] | undefined) => {
    if (assets && assets.length > 0 && assets[0].uri) {
      setImage(assets[0].uri);
    }
  };

  const openCamera = () => {
    launchCamera({ mediaType: 'photo', quality: 0.7 }, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Error', response.errorMessage || 'Camera error');
        return;
      }
      onImagePicked(response.assets);
    });
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Error', response.errorMessage || 'Gallery error');
        return;
      }
      onImagePicked(response.assets);
    });
  };

  const pickImage = () => {
    if (!isFocused) return;
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Take Photo', 'Choose from Library'],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) openCamera();
          else if (buttonIndex === 2) openGallery();
        }
      );
    } else {
      console.log("in the else part")
      Alert.alert(
        'Select Image',
        'Choose an option',
        [
          { text: 'Camera', onPress: openCamera },
          { text: 'Gallery', onPress: openGallery },
          { text: 'Cancel', style: 'cancel' },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        <Image
          source={
            image
              ? { uri: image }
              : require('../../Assets/Images/header/illustration.png')
          }
          style={styles.profileImage}
        />
        <Text style={styles.changeImageText}>Change Image</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{profile.name}</Text>
        <Text style={styles.label}>Total Tests Given:</Text>
        <Text style={styles.value}>{profile.totalTests}</Text>
        <Text style={styles.label}>Total Passed Test:</Text>
        <Text style={styles.value}>{profile.passedTest}</Text>
        <Text style={styles.label}>Mobile No:</Text>
        <Text style={styles.value}>{profile.mobile}</Text>
        <Text style={styles.label}>Email ID:</Text>
        <Text style={styles.value}>{profile.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 40,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
  },
  changeImageText: {
    color: '#007bff',
    marginTop: 8,
    fontSize: 14,
  },
  infoContainer: {
    width: '80%',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});

export default Profile;
