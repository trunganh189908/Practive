
import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";   




const ColoCounterScreen = ({color, onIncrease, onDecrease}) => {
  return(
     <View>
        <Text>{color}</Text>
        <Button 
        onPress={() => onIncrease()}
        title={`Increase ${color}`} />
        <Button 
        onPress={() => onDecrease()}
        title={`Decrease ${color}`} />
    </View>
    );
}



const styles=StyleSheet.create({

});
export default ColoCounterScreen;