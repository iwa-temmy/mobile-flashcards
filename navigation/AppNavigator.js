import React from 'react';
import {  NavigationContainer  } from '@react-navigation/native'
import MyTabs from './MyTabs'

export default function AppNavigator(){
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}