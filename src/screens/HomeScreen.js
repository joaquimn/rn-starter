import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// if the entire props object is not fully needed, it's possible to use its internal proprieties
// instead - HomeScreen = props =>
const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Hi there</Text>
            <Button
                //onPress={ () => props.navigation.navigate('Components') }
                onPress={ () => navigation.navigate('Components') }
                title="Go to Components Demo"
            />
            <Button
                onPress={ () => navigation.navigate('List') }
                title="Go to List Demo"
            />
            <Button
                onPress={ () => navigation.navigate('ImageScreen')}
                title="Go to Image Screen"
            />
        </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

