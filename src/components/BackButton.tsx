import React from 'react';
import { TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton: React.FC = () => {
  const handleClose = () => {
    BackHandler.exitApp();
  };

  return (
    <TouchableOpacity
      style={styles.closeButton}
      onPress={handleClose}
      testID="backButton"
    >
      <Icon name="chevron-back" size={30} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    marginLeft: 10,
  },
  closeButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default BackButton;
