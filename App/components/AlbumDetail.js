import React from 'react';
import {View, Text, Image,Linking} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbNailContainer}>
        <Image style={styles.thumbNailStyle} source={{uri: props.album.thumbnail_image}}/>
        </View>

        <View style={styles.headerContentStyle}>
          <Text style={{fontSize:18}}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>

      </CardSection>

      <CardSection>
          <Image style={styles.imageStyle} source={{uri: props.album.image}}/>
      </CardSection>

      <CardSection>
          <Button onPress={()=> Linking.openURL(props.album.url)} buttonText={'Buy now'}/>
      </CardSection>
    </Card>
  );
};


const styles={
    headerContentStyle:{
        justifyContent:'space-around',
        flexdirection:'column'
    },
    thumbNailStyle:{
        height:50,
        width:50
    },
    thumbNailContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },

    imageStyle:{
        height:300,
        flex:1,
        width:null,
    }

}

export default AlbumDetail;
