import React, {Component} from 'react'
import {Text,ScrollView, View, TouchableOpacity, StyleSheet} from 'react-native' 
import { connect } from 'react-redux';
import Deck from './Deck';
import { gray, green } from '../utils/colors';
import { handleInitialData } from '../actions/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeckDetail from './DeckDetail'



class DeckList extends Component{
    componentDidMount(){
        this.props.handleInitialData()
    }
    render(){
        const { decks, navigation } = this.props;
        return(
            <ScrollView>
                <Text style={styles.title}>Mobile Flashcards</Text>
                {Object.values(decks).map(deck => {
                return (
                    <TouchableOpacity
                    key={deck.title}
                    onPress={() =>
                        navigation.navigate('DeckDetail', { title: deck.title })
                    }
                    >
                    <Deck id={deck.title} />
                    </TouchableOpacity>
                    )
                })}
                <View style={{marginBottom: 30}}/>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 16,
      backgroundColor: gray
    },
    title: {
      fontSize: 40,
      textAlign: 'center',
      marginBottom: 16,
      color: green
    }
  });

  const DeckListStack = createStackNavigator();

  function DeckListScreen (){
    return (
        <DeckListStack.Navigator>
         <DeckListStack.Screen name="Home" component={DeckList} />             
         <DeckListStack.Screen name="Deck Detail" component={DeckDetail} />
        </DeckListStack.Navigator>
       );
  }


  
  const mapStateToProps = state => ({ decks: state });
  
  export default connect(
    mapStateToProps,
    { handleInitialData }
  )(DeckList);