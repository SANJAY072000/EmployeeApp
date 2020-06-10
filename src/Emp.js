import React, { Component } from 'react';
import { StyleSheet, Text, View, 
  FlatList, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';


class Emp extends Component{
    render(){
    return (
    <View style={styles.container}>
        <Text>Welcome to Emp</Text>
    </View>
          );
    }
}

function mapStateToProps(state){
return {
  data:state
};
}

function mapDispatchToProps(dispatch){
  return {
    goodp:id=>dispatch({
      type:'GOODP',id
    }),
    badp:id=>dispatch({
      type:'BADP',id
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Emp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
