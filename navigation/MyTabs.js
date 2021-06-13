import * as React from 'react';
import { Platform} from 'react-native'
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator,  } from '@react-navigation/bottom-tabs';
import DeckListScreen from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import Settings from '../components/Settings'

import { darkGray, white, green, lightGreen } from '../utils/colors';

const isIOS = Platform.OS === 'ios' ? true : false;

const Tab = createBottomTabNavigator()

function MyTabs(){
    return (
        <Tab.Navigator           
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
              ? 'ios-bookmarks'
              : 'ios-bookmarks'
            } else if (route.name === 'Settings') {
              iconName = focused
              ? 'ios-settings'
              : 'ios-settings';
            }else if (route.name === 'Add Deck'){
                iconName = focused
                ? 'ios-add-circle'
                : 'ios-add-circle';
            }
      
      return <Ionicons name={iconName} size={size} color={color}     />;
         },
      })}
      tabBarOptions={{
      activeTintColor: green,
      inactiveTintColor: darkGray,
      }}
        >
            <Tab.Screen name="Home" component={DeckListScreen} />
            <Tab.Screen name="Add Deck" component={AddDeck} />
            <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    )
}
export default MyTabs;
