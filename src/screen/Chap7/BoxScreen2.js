import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const BoxScreen2 = ({navigation}) => {
     

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
        <View style={styles.viewStyle4}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
        <View style={styles.viewStyle5}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
        <Button
          title="Go to BoxScreen"
          onPress={() => navigation.navigate('BoxScreen')}
        />
        </>
        
    )
};

const styles=StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: "row",
        height: 150
    },
    viewStyle2: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'column',
        width: 200
    },
    viewStyle3: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50
    },
    viewStyle4: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50
    },
    viewStyle5: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50
    },
    textStyle:{
        borderWidth: 3,
        borderColor: 'red',
    }

});

export default BoxScreen2;