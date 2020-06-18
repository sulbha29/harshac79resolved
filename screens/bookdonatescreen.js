import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList} from 'react-native';
import Myheader from '../components/myheader';
import firebase from 'firebase';
import db from '../config';
import {ListItem} from 'react-native-elements'

export default class Bookdonation extends Component {
  constructor(){
    super();
    this.state={
      requestedbooks:[]
    }
    this.requestreferrence=null
  }
  requestedbookslist=()=>{
    this.requestreferrence=db.collection('requestbooks').onSnapshot((snapshot)=>{
    var tradelist=snapshot.docs.map(document=>document.data());
    this.setState({requestedbooks:tradelist})
    })  
  }
  componentDidMount(){this.requestedbookslist()}
  componentWillUnmount(){this.requestreferrence()}
  keyExtractor=(item,index)=>index.toString()
  renderItem=({item,i})=>{
    return(
      <ListItem key={i}
      title={item.bookname}
      subtitle={item.reason}
      titleStyle ={{color:'black',fontWeight:'bold'}}
      rightElement={
      <TouchableOpacity>
        <Text>
          View
        </Text>
      </TouchableOpacity>}bottomDivider/>
    )
  }
    render(){
  return (
    <View>
        <Text>book donate</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
  button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor:"#000",
      shadowOffset:{
          width:0,
          height:8
      }
  }
})