import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.viewContainer}>
      {props.children}
    </View>
  );
};

const styles = {
  viewContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export default Card;
