import React from 'react';
import {View} from 'react-native';


const CardSection = (props) => {
    return (
      <View style={styles.viewContainer}>
        {props.children}
      </View>
    );
  };
  
  const styles = {
    viewContainer: {
      padding:5,
      backgroundColor:'#fff',   
      borderBottomWidth: 1,
      justifyContent:'flex-start',
      alignItem:'flex-start',
      position:'relative',
      elevation: 2,
      flexDirection:'row',
    },
  };
  
  export default CardSection;