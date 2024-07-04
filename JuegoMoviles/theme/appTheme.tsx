import React from 'react';
import {StyleSheet} from 'react-native';
import {BUTTON_COLOR, INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR} from '../commons/constantsColor';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    padding:20,
    gap:30,
  },
  logo: {
    height: 60,
    width: '100%',
    alignSelf:'center',
    resizeMode: 'contain',
  },
  textStart: {
    color: TEXT_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
  },
  titleContainer: {
    backgroundColor: PRIMARY_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: TEXT_COLOR,
    width:240,
    fontSize: 27,
    fontWeight: 'bold',
  },
  bodyContainer: {
    backgroundColor: 'black',
    gap:30,
  },
  inputContainer: {
    marginHorizontal: 10,
  },
  inputText: {
    backgroundColor: TEXT_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal:30,
    borderRadius: 10,
  },
  buttonContainer2: {
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal:30,
    marginHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal:30,
    alignSelf:'center',
  },
  buttonText: {
    color: TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
  },
  imagen: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  imagen1: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  containerIcon: {
    backgroundColor:INPUT_COLOR,
    padding:7,
    borderRadius:100,
    alignSelf:'center',
  },
  buttonIcon: {
    backgroundColor:BUTTON_COLOR,
    flexDirection: 'row',
    width:'100%',
    borderRadius:100,
    gap:20,
    padding:20,
    justifyContent:'space-between',
    alignItems:'center',
  },
  icon: {
    width:35,
    height:35,
    resizeMode:'contain',
  },
  iconSmall: {
    backgroundColor:INPUT_COLOR,
    width:35,
    height:35,
    resizeMode:'contain',
    borderRadius:100,
    padding:7,
    // textAlign:'center',
  },
  productHeader:{
    backgroundColor:PRIMARY_COLOR,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
  },
  textIconCar:{
    backgroundColor:SECONDARY_COLOR,
    color:TEXT_COLOR,
    textAlign:'center',
    borderRadius:20,
    fontWeight:'bold',
    fontSize:12
  },
  productContainer:{
    backgroundColor:BUTTON_COLOR,
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    gap:10,
    borderRadius:10,
    marginBottom:20,
  },
  productImage:{
    width:70,
    height:70
  },
  productIcon:{
    flex:1,
    alignItems:'flex-end'
  },
  cardContainer:{
    backgroundColor:'#1F2328',
    margin:20,
    padding:20,
    gap:20,
    borderRadius:10,
  },
  cardHeader:{
    backgroundColor:'#1F2328',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  quantityContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
  buttonQuantity:{
  height:50,
  width:50,
  justifyContent:'center',
  backgroundColor:BUTTON_COLOR,
  borderRadius:100,
  margin:20,
  },
  descriptionText:{
    color:TEXT_COLOR,
    marginHorizontal:10,
    fontWeight:'bold',
  },
  infoTable:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textHeaderTable:{
    color:TEXT_COLOR,
    fontWeight:'bold',
  },
  textValue:{
    color:TEXT_COLOR,
    marginHorizontal:10,
  },
  textTotalPay:{
    color:TEXT_COLOR,
    alignItems:'flex-end',
    marginTop:15
  },
  formContainer: {
    height: '100%',
    justifyContent: 'space-evenly',
  },
  result: {
    color: TEXT_COLOR,
    backgroundColor: SECONDARY_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal:30,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
