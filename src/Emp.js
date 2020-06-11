import React, { Component } from 'react';
import { StyleSheet, Text, View, 
  FlatList, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {Card,Icon} from 'native-base';


class Emp extends Component{
    render(){
    return (
    <FlatList data={Object.values(this.props.data)}
    renderItem={({item})=>{
      return <Card style={styles.container}>
      <View style={styles.idcontainer}>
      <Text style={styles.idtext}>
      {item.empid}
      </Text>
      </View>
      <View style={styles.namecontainer}>
      <Text style={styles.nametext}>
      {`Name : ${item.empName}`}
      </Text>
      <Text style={styles.saltext}>
      {`Salary : ${item.salary.toFixed(2)}`}
      </Text>
      </View>
      <View style={styles.percontainer}>
      <TouchableOpacity onPress={()=>this.props.badp(item.empid)}>
      <Icon android='md-thumbs-down' ios='ios-thumbs-down'
       style={styles.badp}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.goodp(item.empid)}>
      <Icon android='md-thumbs-up' ios='ios-thumbs-up'
       style={styles.goodp}/>
      </TouchableOpacity>
      </View>
      </Card>
    }}
    keyExtractor={item=item.empid.toString()}
    />
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
