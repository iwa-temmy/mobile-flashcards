import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD, RESET_STORE } from '../actions'
import { decks as INITIAL_STATE } from '../utils/_DATA'

export default function decks (state = {}, action){
    switch (action.type){
        case RECEIVE_DECKS:
            return{
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            const { title } = action
            return {
                ...state,
                [action.title]: {
                    title,
                    questions:[]
                }
            }
        case REMOVE_DECK: 
            return state.filter((deck) => deck.id !== action.id)

        case ADD_CARD:
            const { deckId, card} = action
            
            return {
                ...state,
                [action.deckId]: {
                    ...state[deckId],
                    questions: [...state[deckId].questions].concat(card)
                }
            }
        case RESET_STORE:
            return INITIAL_STATE

        default :
            return state
    }

}