import ACTION_TYPES from "../actions/actionTypes";
import _ from 'lodash';

const {
    CREATE_SUPERHERO_CARD_REQUEST,
    CREATE_SUPERHERO_CARD_SUCCESS,
    CREATE_SUPERHERO_CARD_ERROR,
    GET_CARDS_REQUEST,
    GET_CARDS_SUCCESS,
    GET_CARDS_ERROR,
    GET_CARD_BY_ID_REQUEST,
    GET_CARD_BY_ID_SUCCESS,
    GET_CARD_BY_ID_ERROR,
    CLEAR_ERROR,
    UPDATE_CARD_BY_ID_REQUEST,
    UPDATE_CARD_BY_ID_SUCCESS,
    UPDATE_CARD_BY_ID_ERROR
} = ACTION_TYPES;

const initialState = {
    isFetching: false,
    cards: [],
    hasMore: false,
    error: null,
    currentCard: null
}

export default function cardsReducer (state = initialState, action) {

    switch (action.type) {

        case CREATE_SUPERHERO_CARD_REQUEST:
        case GET_CARD_BY_ID_REQUEST:
        case GET_CARDS_REQUEST:
        case UPDATE_CARD_BY_ID_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        case CREATE_SUPERHERO_CARD_SUCCESS:
            return {
                ...state,
                isFetching: false,
            };
        case GET_CARDS_SUCCESS:
            return {
                ...state,
                cards: [...action.cards, ...state.cards],
                isFetching: false,
                hasMore: action.hasMore
            }

        case GET_CARD_BY_ID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentCard: action.currentCard
            }

        case UPDATE_CARD_BY_ID_SUCCESS: {
            const cardsClone = _.clone(state.cards);
            const {updatedCard} = action;
            const oldCardIndex = cardsClone.findIndex(card=> card._id == updatedCard._id);
            cardsClone[oldCardIndex] = updatedCard;

            return {
                ...state,
                isFetching: false,
                cards: cardsClone,
                currentCard: updatedCard
            }
        }

        case CREATE_SUPERHERO_CARD_ERROR:
        case GET_CARDS_ERROR:
        case GET_CARD_BY_ID_ERROR:
        case UPDATE_CARD_BY_ID_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

