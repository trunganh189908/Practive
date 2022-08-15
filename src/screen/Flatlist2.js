import React from "react";
import {Text, View, Button, FlatList, StyleSheet} from 'react-native'

const PlayerTeam2 = [
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



function FlatListScreen2({ navigation }) {
    return (
      <View style={styles.containt}>
        <Text style={styles.text}>Player List</Text>
        <FlatList 
          style={styles.flatlist}
          horizontal 
          keyExtractor={PlayerTeam2 => PlayerTeam2.name}
          data={PlayerTeam2} renderItem={({item}) => {
            return( 
                    <Text style={styles.text2}> PlayerName: {item.name}  Number:{item.number} </Text>  
            )   
        }}/>
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

    },
    text2:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        flex: 2,
        width: 250,
        height: 50,
        backgroundColor: '#FF0000',
        marginLeft: 10
      },
      flatlist: {
        flexDirection: 'row'
      },
      button:{
        marginTop: 20,
        color: 'green'
      },
    image: {
      width: 200,
      height: 200,
      padding: 150, 
      marginHorizontal: 50
    }
  })

  export default FlatListScreen2;