import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from '@apollo/client';
import API_BASE_URL from '../config/config';

const httpLink = createHttpLink({
  uri: API_BASE_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        gender
        species
        image
      }
      info {
        next
        count
      }
    }
  }
`;

export const getCharacters = async (page: number) => {
  const { data } = await client.query({
    query: GET_CHARACTERS,
    variables: { page },
  });

  const totalCount = data.characters.info.count;
  const characters = data.characters.results;
  const hasMoreData = !!data.characters.info.next;
  return { totalCount, characters, hasMoreData };
};
