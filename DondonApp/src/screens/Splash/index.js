import React, { useEffect } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { splash } from "../../assets";

const Splash = ({ navigation }) => {
    useEffect( () => {
        setTimeout( () => {
            navigation.replace('Intro')
        }, 1500)
    }, [navigation]);

    return(
        <ImageBackground source={splash} style = {styles.bg}>

        </ImageBackground>
    );
}

export default Splash;

const styles = StyleSheet.create ({
    bg : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
})
