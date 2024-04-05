import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const QandA = (props) => {
  return (
    <ScrollView style={styles.conner}>
        <View style={{flexDirection:'row',marginVertical:20}}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
            <Image style={{width:35, height:35}} source={require('../Img/chevron-left.png')}/></TouchableOpacity>
            <Text style={{textAlign:'center',fontSize:23, color:'black', fontWeight:'400',marginLeft: 130}}>Q & A</Text>
        </View>
        <View style={{flexDirection:'row',marginHorizontal:50,marginTop:20}}><Text style={[styles.txt1,{width:'95%'}]}>Tôi trộn các chất dinh dưỡng theo thứ tự nào?</Text>
        <Image style={{alignSelf: 'center'}} source={require('../Img/chevron-up.png')}/>
        </View>
        <View style={{flexDirection:'row',marginHorizontal:50,marginTop:20}}><Text style={[styles.txt1,{width:'95%'}]}>Tôi có thể giữ dung dịch dinh dưỡng hỗn hợp trong bao lâu?</Text>
        <Image style={{alignSelf: 'center'}} source={require('../Img/chevron-up.png')}/>
        </View>
        <View style={{flexDirection:'row',marginHorizontal:50,marginTop:20}}><Text style={[styles.txt1,{width:'95%'}]}>Khi nào tôi thêm bộ điều chỉnh pH?</Text>
        <Image style={{alignSelf: 'center'}} source={require('../Img/chevron-up.png')}/>
        </View>
        <View style={{flexDirection:'row',marginHorizontal:50,marginTop:20}}><Text style={[styles.txt1,{width:'95%'}]}>Các chất điều chỉnh tăng trưởng có được sử dụng trong các sản phẩm Planta không?</Text>
        <Image style={{alignSelf: 'center'}} source={require('../Img/chevron-up.png')}/>
        </View>
        <View style={{flexDirection:'row',marginHorizontal:50,marginTop:20}}><Text style={[styles.txt1,{width:'95%'}]}>Các sản phẩm Planta có phải là hữu cơ không?</Text>
        <Image style={{alignSelf: 'center'}} source={require('../Img/chevron-up.png')}/>
        </View>
    </ScrollView>
  )
}

export default QandA

const styles = StyleSheet.create({
    conner:{
        marginHorizontal:30
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