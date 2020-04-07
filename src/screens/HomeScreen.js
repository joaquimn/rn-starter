import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// if the entire props object is not fully needed, it's possible to use its internal proprieties
// instead - HomeScreen = props =>
const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Home Screen</Text>
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
                title="Go to Image Screen Demo"
            />
            <Button
                onPress={ () => navigation.navigate('Counter')}
                title="Go to Counter Demo"
            />
            <Button
                onPress={() => navigation.navigate('Color')}
                title="Go to Colors Demo"
            />
            <Button 
                onPress={() => navigation.navigate('Square')}
                title="Go to Square Demo"
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

