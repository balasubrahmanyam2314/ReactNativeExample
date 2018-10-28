import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

const Button =({onPress ,buttonText})=>{
    const { textStyle,buttonStyle}=styles;
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles={
    textStyle:{
        fontSize:18,
        color:'#007aff',
        alignSelf:'center', 
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,   
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        borderColor:'#007aff',
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'#fff',
        marginLeft:5,
        marginRight:5,

    }
}

export default Button;