import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {style} from '../../pages/Jobs/Jobs.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Card from '../../components/Card/Card';

const Jobs = ({navigation}) => {
  const url = 'https://www.themuse.com/api/public/jobs?page=1';
  const {data, error, loading} = useFetch(url);

  const Seperator = () => {
    return <View style={{padding: 5}} />;
  };

  const renderCard = item => {
    return (
      <Card
        name={item.name}
        company={item.company.name}
        location={item.locations[0].name}
        level={item.levels[0].name}
        nav={navigation}
        id={item.id}
      />
    );
  };
  return (
    <View style={style.main}>
      {error.state ? (
        <Text>ERROR {error.message}</Text>
      ) : loading ? (
        <Loading />
      ) : (
        <View style={style.main}>
          <FlatList
            ItemSeparatorComponent={Seperator}
            ListHeaderComponent={Seperator}
            ListFooterComponent={Seperator}
            data={data.results}
            renderItem={({item}) => renderCard(item)}
          />
        </View>
      )}
    </View>
  );
};

export default Jobs;
