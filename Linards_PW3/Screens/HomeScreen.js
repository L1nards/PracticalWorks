import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default function HomeScreen({ navigation }) { const [counter, setCounter] = useState(0);
    return (
        <View style = { styles.container}> 
            <TouchableOpacity
                style={ styles.button }
                onPress={()=> navigation.navigate('List View')
            }>
                <Text style={styles.text}>Go to List View</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={ styles.button }
                onPress={() => {
                setCounter(counter + 1);
                  
            }}>
                <Text style={styles.text}>Increase Counter</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={ styles.button }
                onPress={() => { 
                setCounter(counter - 1);
            }}>
                <Text style={styles.text}>Decrease Counter</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.text1}>Counter value: {counter}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'lightgrey'
    },
    button: {
        backgroundColor: '#0388fc',
        flex: 0,
        width: 300,
        height: 50,
        marginTop: 10,
        borderRadius: 5
    },
    text: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        padding: 15
    },
    text1: {
        marginTop: 15,
        padding: 10
    }
});