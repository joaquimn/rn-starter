import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

const ExerciseTwo = () => {
    const friends = [
        { name: 'Friend #1', age: '29'},
        { name: 'Friend #2', age: '36' },
        { name: 'Friend #3', age: '32'},
        { name: 'Friend #4', age: '19' },
        { name: 'Friend #5', age: '76'},
        { name: 'Friend #6', age: '22'},
        { name: 'Friend #7', age: '45'},
        { name: 'Friend #8', age: '35'},
        { name: 'Friend #9', age: '34'},
    ]; 

    return (
        <FlatList
            keyExtractor={friends => friends.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 12,
        marginHorizontal: 15,
        marginVertical: 15
    }

});

export default ExerciseTwo;