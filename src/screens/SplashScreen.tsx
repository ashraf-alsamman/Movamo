import React, { useEffect } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  ImageSourcePropType,
  ImageResolvedAssetSource,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const logoImage: ImageSourcePropType = require('../assets/logo.png');
    const resolvedAssetSource: ImageResolvedAssetSource =
      Image.resolveAssetSource(logoImage);

    if (!resolvedAssetSource || !resolvedAssetSource.uri) {
      console.error('Logo image not found or invalid.');
    } else {
      setTimeout(() => {
        navigation.navigate('Home' as never);
      }, 4000);
    }
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#051526',
      }}
    >
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 192, height: 79.2 }}
      />
      <ActivityIndicator size="small" color="#ffffff" />
    </View>
  );
};

export default SplashScreen;
