import { cloneElement } from 'react';
import { StyleSheet } from 'react-native';

import variables from '../variables';

const HomeStyle = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: variables.call().colors._primary,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        color: variables.call().colors._secondary,
        fontSize: variables.call().typography._labelSize,
        textAlign: "center"
    }

    

});

export default HomeStyle;