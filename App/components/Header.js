import React from 'react';
import {View, Text} from 'react-native';

const Header = props => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.headerTextStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewContainer: {
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#f8f8f8',
      height:60,
      padding:20,
      shadowColor:'#000000',
      shadowOpacity:0.7,
      shadowOffset: {width :0, height:2},
      elevation:2,
      position:'relative',
  },
  headerTextStyle: {
    fontSize: 18,
    color: '#000000',
  },
};

export default Header;
