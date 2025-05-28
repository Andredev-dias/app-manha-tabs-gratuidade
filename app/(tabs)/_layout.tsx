// import { Image } from 'expo-image';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerShown: false, tabBarIcon: () => (<Image style={styles.iconTab} source={require('@/assets/images/home.png')}/>)}}/>
      <Tabs.Screen name="explore" options={{headerShown: false, tabBarIcon: () => (<Image style={styles.iconTab} source={require('@/assets/images/magnifying-glass.png')}/>)}}/>
      <Tabs.Screen name="list" options={{headerShown: false, tabBarIcon: () => (<Image style={styles.iconTab} source={require('@/assets/images/to-do-list.png')}/>)}}/>
    </Tabs>
  );
}


const styles = StyleSheet.create({
  iconTab:{
    width: 25,
    height: 25
  }
})