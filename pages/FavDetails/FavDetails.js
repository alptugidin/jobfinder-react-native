import React from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {style} from './FavDetails.style';
import RenderHTML from 'react-native-render-html';

const FavDetails = ({route}) => {
  const {name, company, location, level, id, contents} = route.params;
  const {width} = useWindowDimensions();
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
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default FavDetails;
