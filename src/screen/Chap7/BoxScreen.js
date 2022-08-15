import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const BoxScreen = ({navigation}) => {
     

    return (
        <><View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
        <View style={styles.viewStyle2}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
        <View style={styles.viewStyle3}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
        <Button
          title="Go to BoxScreen"
          onPress={() => navigation.navigate('BoxScreen2')}
        />
        </>
        
    )
};

const styles=StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-start'
    },
    viewStyle2: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center'
    },
    viewStyle3: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-end'
    },
    textStyle:{
        borderWidth: 3,
        borderColor: 'red',
    }

});

export default BoxScreen;