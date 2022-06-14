import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../../components/Card/Card';
import Separator from '../../components/Separator';
import {style} from './Favorites.style';

const Favorites = ({navigation}) => {
  const favlist = useSelector(state => state.favList.list);

  const renderCard = item => {
    return (
      <Card
        name={item.name}
        company={item.company}
        location={item.location}
        level={item.level}
        nav={navigation}
        contents={item.contents}
        id={item.id}
      />
    );
  };

  return (
    <View style={style.main}>
      <FlatList
        ListHeaderComponent={Separator}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Separator}
        data={favlist}
        keyExtractor={item => item.id}
        renderItem={({item}) => renderCard(item)}
      />
    </View>
  );
};

export default Favorites;
