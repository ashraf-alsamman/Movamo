import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersAsync } from '../redux/slices/charactersSlice';
import { RootState, AppDispatch } from '../redux/store';
import CharacterListItem from './CharacterListItem';
import PrimaryButton from './PrimaryButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CharacterList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const characters = useSelector(
    (state: RootState) => state.characters.characters
  );
  const loading = useSelector((state: RootState) => state.characters.loading);
  const hasMoreData = useSelector(
    (state: RootState) => state.characters.hasMoreData
  );
  const totalCount = useSelector(
    (state: RootState) => state.characters.totalCount
  );

  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    if (hasMoreData) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchCharactersAsync({ page }));
  }, []);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchCharactersAsync({ page }));
    }
  }, [dispatch, page]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Icon name="cloud-download-outline" size={30} color="#ccc" />
          <Text style={styles.infoText}>Loaded {characters.length}</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="earth" size={30} color="#ccc" />
          <Text style={styles.infoText}>All {totalCount}</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CharacterListItem character={item} />}
          ListFooterComponent={
            loading === 'loading' ? (
              <ActivityIndicator size="large" color="#051526" />
            ) : (
              <PrimaryButton
                title={hasMoreData ? 'Load More' : 'No more data'}
                onPress={handleLoadMore}
                disabled={!hasMoreData}
                icon={
                  hasMoreData ? (
                    <Icon name="reload" size={20} color="white" />
                  ) : null
                }
              />
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },

  listContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginTop: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 10,
    fontSize: 13,
    color: '#333',
  },
  infoSection: {
    flex: 1,
  },
});

export default CharacterList;
