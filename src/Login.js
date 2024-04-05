import { StyleSheet, Text, View, Image, Pressable, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
    const [username, setusername] = useState("");
    const [passwd, setpasswd] = useState("");
    const dologin = ()=> {
            if (username.length == 0) {
                alert("chưa nhập Email"); return;
            }
            if (passwd.length == 0) {
                alert("chưa nhập pass"); return;
            }

            let url_check_login = "http://192.168.0.107:3000/acount?user=" + username;
           
            fetch(url_check_login)
            .then((res)=> {return res.json();})
            .then( async  (res_login)=> {
              if (res_login.length != 1) {
                alert("Sai Emailadmin");
                return; 
              } else{
                let objU =  res_login[0];
                if (objU.passwd != passwd) {
                  alert("sai password"); return;
                } else{
                  try {
                    await AsyncStorage.setItem('lognInfo', JSON.stringify(objU));
                    props.navigation.navigate('Tab')
                    
                  } catch (e) {
                    // saving error
                  }
                }
              }
            })
    } 

  return (
    <View style={styles.back}>
         <Image resizeMode='center' style={{width: 400, height:200, marginTop:0}} 
          source={ require ('../src/logo.png')}/>  
          
            <Text style={styles.text}>Welcome to Lungo !!</Text>

            <Text style={{fontSize: 12, color:'#828282',
             fontFamily: 'Poppins', fontWeight: '700',
              lineHeight: 26, letterSpacing: 0.50}}>Login to Continue</Text>

              <TextInput style={styles.textinput} placeholder="Email address" onChangeText={(txt)=> {setusername(txt)}} />
              <TextInput style={styles.textinput} placeholder="Password" secureTextEntry={true} textContentType='password' onChangeText={(txt)=> {setpasswd(txt)}}/>

              <Pressable style={styles.buttonLogin} onPress={dologin}>
                <Text style={styles.textLogin}>Login</Text>
              </Pressable>
              <Pressable style={styles.buttonGoogle}>
              {/* <Image style={styles.imageGG} source={require('../src/gg.png')}/> */}
                <Text style={styles.textGoogle}>Sign in with Google</Text>
              </Pressable>
             <Text style={styles.textForget}>Don’t have account? Click Register</Text>
             <Text style={styles.textForget}>Forget Password? Click Reset</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  back:{ flex: 1, justifyContent: "center", alignItems:"center", backgroundColor:"#FFF"},
  text:{color:"#FFF",fontFamily: 'Popins', fontSize:16,fontStyle:'normal', fontWeight: '700'},
  textinput:{width:348, height:48, flexShrink:0, borderColor:'#000', marginTop:15, borderRadius:8, borderWidth:1},
  buttonLogin:{width:348, height:57, flexShrink:0, borderRadius:20, backgroundColor:'#D17842', marginTop: 50, justifyContent:'center', alignItems:'center'},
  buttonGoogle:{flexDirection:'row',width:348, height:57, flexShrink:0, borderRadius:20, backgroundColor:'#000', marginTop: 20, justifyContent:'center', alignItems:'center'},
  textLogin:{color:'#FFF', fontFamily: 'Poppins', fontSize:14, fontStyle: 'normal', fontWeight: 'bold', lineHeight:26, letterSpacing: 0.5},
  textGoogle:{color:'#FFF', fontFamily: 'Poppins', fontSize:14, fontStyle: 'normal', fontWeight: 'bold', lineHeight:26, letterSpacing: 0.5},
  imageGG:{width:15, height:15, flexShrink:0, justifyContent:'center', alignItems:'flex-start'},
  textForget:{color:'#828282',
              fontFamily:'Poppins',
              fontSize:12,
              fontStyle: 'normal',
              fontWeight:'700',
              lineHeight:26,
              letterSpacing: 0.5, 
              marginTop:40
  }
})