import React ,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App = () => {
  
  return (
    <SafeAreaView style={{flex: 1}}>

      


       

       <View style={[styles.container,{flexDirection: "column"}]}>
            <StatusBar
          
            backgroundColor="#217373"
          
          />
          

          <Text>Helloooo </Text>
          <View style={{ flex: 2, backgroundColor: "#000" , justifyContent : 'center' , alignItems:'center' }} >
            <Text style={{color: 'white'}} > HASHNODE </Text>
          </View>
          <View style={{ flex: 2, backgroundColor: "darkorange"  , justifyContent:'center' ,alignItems:'center'}} >
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap',   alignContent:'center' , gap:30 }}>
                <View style={{ width: 100, height: 120, backgroundColor: 'red' }} />
                <View style={{ width: 100, height: 120, backgroundColor: 'blue' }} />
                <View style={{ width: 100, height: 120, backgroundColor: 'green' }} />
               
          </View>
          </View>
          <View style={{ flex: 2, backgroundColor: "green" }} />
          <View style={{ flex: 2, backgroundColor: "red" }} />
    </View>
      

    

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
    
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    color : '#fff',

  },
});

export default App;
