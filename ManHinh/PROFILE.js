import { Image, ImageBackground, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
const PROFILE = ({navigation}) => {
  return (

      <ScrollView style={styles.conner}>
         
      <Text style={{textAlign:'center',color:'black',fontSize:18,margin:20}}>Thông tin cá nhân</Text>

      <View style={{flexDirection:'row'}}>
        <Image style={{width:100,height:100,borderRadius:50,marginRight:30}}
         source={{uri:'https://i.pinimg.com/236x/97/d5/59/97d559878c51ebaeab84c290db834356.jpg'}}/>
        <Text style={{fontSize:18,color:'black'}}>Kiều Tấn Minh
          {'\n'}
          <Text style={{fontSize:17,color:'gray'}}>minhktph40749@fpt.edu.vn</Text>
        </Text>
        </View>
        <View style={{backgroundColor:'gray',height:1,marginVertical:5}}/>
        <Text style={styles.txt1}>Chỉnh sửa thông tin</Text>
        <Text style={styles.txt1}>Câm nang trồng cây</Text>
        <Text style={styles.txt1}>Lịch sử giao dịch</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('qanda')}>
        <Text style={styles.txt1}>Q & A</Text></TouchableOpacity>
        <View style={{backgroundColor:'gray',height:1,marginVertical:5}}/>
        <Text style={styles.txt1}>Điều khoản và điều kiện</Text>
        <Text style={styles.txt1}>Chính sách riêng tư</Text>
        <Text style={[styles.txt1,{color:'red'}]}>Đăng Xuất</Text>
     
        </ScrollView>

  )
}

export default PROFILE

const styles = StyleSheet.create({
  conner:{
    marginHorizontal:50,
    height: 1000
  },
  txt1:{
    fontSize:17,
    marginVertical:10,
    color:'black'
  },txt2:{
    fontSize:17,
    marginTop:50,
  }
})