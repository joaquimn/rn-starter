import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ExerciseOneScreen = () => {

    const yourName = 'Joaquim';

    return (
        <View>
            <Text style={styles.textStyleHeader}>Getting started with react native!</Text>
            <Text style={styles.textStyleSubHeader}>My name is {yourName}</Text>
        </View>
    );

}


const styles = StyleSheet.create({
    textStyleHeader: {
        fontSize: 45
    },
    textStyleSubHeader: {
        fontSize: 20
    }
});

export default ExerciseOneScreen;