import React, {useEffect, useState} from 'react';
import {
  Linking,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {style} from './Detail.style';
import RenderHTML from 'react-native-render-html';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import {useDispatch, useSelector} from 'react-redux';
import {add, remove} from '../../stores/favList';

const Detail = ({route}) => {
  const {name, company, location, level, id, contact, contents} = route.params;
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();
  const favlist = useSelector(state => state.favList.list);

  const [dupState, setDupState] = useState(false);

  const submit = async () => {
    await Linking.openURL(contact);
  };

  const addFavorites = () => {
    const job = {name, location, level, contents, company, id};
    dispatch(add(job));
  };

  const removeFromFav = () => {
    dispatch(remove(id));
  };

  useEffect(() => {
    const dupx = favlist.every(job => job.id !== id);
    setDupState(dupx);
  }, [favlist]);

  return (
    <View style={style.main}>
      <View style={style.main}>
        <View style={style.headerView}>
          <Text style={style.header}>{name}</Text>
          <View style={style.locationView}>
            <Text style={style.locationLabel}>Locations: </Text>
            <Text style={style.locationText}>{location}</Text>
          </View>
          <View style={style.levelView}>
            <Text style={style.levelLabel}>Job Level: </Text>
            <Text style={style.levelText}>{level}</Text>
          </View>
          <Text style={style.jobDetail}>Job Detail</Text>
        </View>
        <ScrollView>
          <View style={style.htmlView}>
            <RenderHTML source={{html: contents}} contentWidth={width} />
            <View style={style.buttonView}>
              <SubmitButton
                onPress={submit}
                title="Submit"
                icon="briefcase-plus"
              />
              {dupState ? (
                <SubmitButton
                  onPress={addFavorites}
                  title="Favorite"
                  icon="heart"
                />
              ) : (
                <SubmitButton
                  onPress={removeFromFav}
                  title="Remove"
                  icon="trash-can-outline"
                />
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Detail;
