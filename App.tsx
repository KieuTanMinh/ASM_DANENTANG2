import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DangNhap from './ManHinh/DangNhap'
import DangKy from './ManHinh/DangKy'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ButtomMenu from './ManHinh/ButtomMenu'
import PROFILE from './ManHinh/PROFILE'
import QandA from './ManHinh/QandA'
import TrangChu from './ManHinh/TrangChu'
import XemThemCayTrong from './ManHinh/XemThemCayTrong'
import XemHangMoiVe from './ManHinh/XemHangMoiVe'
import ChiTietCayTrong from './ManHinh/ChiTietCayTrong'
import XemThemChauCayChong from './ManHinh/XemThemChauCayChong'

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
      
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='dangNhap' component={DangNhap}/>
        <stack.Screen name='dangKy' component={DangKy}/>
        <stack.Screen name='menu' component={ButtomMenu}/>
        <stack.Screen name='qanda' component={QandA}/>
        <stack.Screen name='xemThemCt' component={XemThemCayTrong}/>
        <stack.Screen name='xemHangMv' component={XemHangMoiVe}/>
        <stack.Screen name='chiTietCt' component={ChiTietCayTrong}/>
        <stack.Screen name='xemThemChauCt' component={XemThemChauCayChong}/>
      </stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})