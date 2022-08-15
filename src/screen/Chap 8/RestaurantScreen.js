import React from "react";
import {Text, View, Button, FlatList, StyleSheet} from 'react-native'

const PlayerTeam1 = [
    {name: 'David de Gea', number: '1' },
    {name: 'Victor Lindelöf', number: '2'},
    {name: 'Eric Bailly', number: '3'},
    {name: 'Phil Jones', number: '4'},
    {name: 'Harry Maguire', number: '5'},
    {name: 'Cristiano Ronaldo', number: '7'},
    {name: 'Bruno Fernandes', number: '8'},
    {name: 'Raphael Varane', number: '19'},
    {name: 'Fred', number: '17'},
    {name: ' Alex Telles', number: '27'},
    {name: 'Aaron Wan-Bissaka', number: '29'},
    {name: 'Donny van de Beek', number: '34'},
    {name: 'Scott McTominay', number: '39'}
]



function FlatListScreen({ navigation }) {
    return (
      <View style={styles.containt}>
        <Text style={styles.text}>Player List</Text>
        <FlatList keyExtractor={PlayerTeam1 => PlayerTeam1.name} data={PlayerTeam1} renderItem={({item}) => {
            return( 
                    <Text style={styles.text2}> PlayerName: {item.name} : Number:{item.number} </Text>  
            )   
        }}/>
        <Button
          title="Go page 2"
          onPress={() => navigation.navigate('PlayerScreen2')}
          style={styles.button}
        />

        <Button
          title="Go Back Home"
          onPress={() => navigation.navigate('MUHome')}
          style={styles.button}
        />
      
      </View>
    );
  }
  const styles = StyleSheet.create({
    containt: {
      marginVertical: 20,
    },
    text:{
      textAlign: 'center',
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      alignContent: 'center'             
    },
    text2:{
        color: 'red',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        flex: 2
      },
      button:{
        marginTop: 20,
        color: 'green'
      },
    image: {
      width: 200,
      height: 200,
      shadowColor: 'red',
      marginHorizontal: 50
      
    }
  })

  export default FlatListScreen;