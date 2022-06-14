import React from 'react';
import {Text, View} from 'react-native';
import {style} from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';

const Detail = ({route}) => {
  const {id} = route.params;

  const {data, error, loading} = useFetch(
    'https://www.themuse.com/api/public/jobs/' + id,
  );

  return (
    <View style={style.main}>
      {error.state ? (
        <Text>ERROR</Text>
      ) : loading ? (
        <Loading />
      ) : (
        <View>
          <Text>detai page {id}</Text>
          <Text>detai page {data.name}</Text>
        </View>
      )}
    </View>
  );
};

export default Detail;
