import React from "react";
import {Text, View, Button, StyleSheet, Image, SafeAreaView} from 'react-native'

const Name = {
    name: 'Manchester United'
}


function HomeScreen({ navigation }) {
    return (
      <SafeAreaView >
        <View style={styles.containt }>
        <Text style={styles.text}>Club</Text>
        <Text style={styles.text2}>{Name.name}</Text>
        <Button
          title="Go to Player List"
          onPress={() => navigation.navigate('PlayerScreen')}
        />
        <Button
          title="Go to ColorScreen"
          onPress={() => navigation.navigate('ColorScreen')}
        />

      <Button
          title="Go to ColorScreen"
          onPress={() => navigation.navigate('SquareScreen')}
        />
        <Button
          title="Go to BoxScreen"
          onPress={() => navigation.navigate('BoxScreen')}
        />
        <Image style={styles.image} source={require('../image/logo.png')} />
         </View>
      </SafeAreaView>
    
    );
  }

  const styles = StyleSheet.create({
  
    containt: {
      marginVertical: 20,
      alignContent: 'space-around',
    },
    text:{
      textAlign: 'center',
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,

    
    },
    text2:{
      textAlign: 'center',
      color: 'red',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 20,

    },
    image: {
      width: 200,
      height: 200,
      padding: 150, 
      marginHorizontal: 50,
      marginTop: 10
    }
  })
  export default HomeScreen;