import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Character } from '../types';
import EllipsisText from './EllipsisText';

interface CharacterListItemProps {
  character: Character;
}

const CharacterListItem: React.FC<CharacterListItemProps> = ({ character }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          <EllipsisText text={character.name} maxLength={20} />
        </Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{character.gender}</Text>
          <Text style={styles.details}>{character.species}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 7,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 2)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: 1,
  },
  details: {
    fontSize: 12,
    color: '#888',
    marginRight: 10,
  },
});

export default CharacterListItem;
