import {takeLatest} from "@redux-saga/core/effects";
import ACTION_TYPES from "../actions/actionTypes";
import {createSuperHeroCardSaga} from "./createSuperHeroCardSaga";
import {getPaginatedCardsSaga} from "./getPaginatedCardsSaga";
import {getCardByIdSaga} from "./getCardByIdSaga";
import {updateCardByIdSaga} from "./updateCardByIdSaga";

const {
    CREATE_SUPERHERO_CARD_REQUEST,
    GET_CARDS_REQUEST, GET_CARD_BY_ID_REQUEST,
    UPDATE_CARD_BY_ID_REQUEST
} = ACTION_TYPES;

export default function* rootSaga() {
    yield takeLatest(CREATE_SUPERHERO_CARD_REQUEST, createSuperHeroCardSaga);
    yield takeLatest(GET_CARDS_REQUEST, getPaginatedCardsSaga);
    yield takeLatest(GET_CARD_BY_ID_REQUEST, getCardByIdSaga);
    yield takeLatest(UPDATE_CARD_BY_ID_REQUEST, updateCardByIdSaga)
}