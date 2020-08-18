import {put} from "redux-saga/effects";
import {
    createGetSuperHeroCardsSuccess,
    createGetSuperHeroCardsError,
} from "../actions/actionCreators";
import {getSuperHeroCards} from "../api";

export function * getPaginatedCardsSaga (action) {
    try {
        const {data: {cards, hasMore}} = yield getSuperHeroCards(action.filterObj);
        if (Array.isArray(cards)) {
            yield put(createGetSuperHeroCardsSuccess(cards, hasMore));
        }
    } catch (e) {
        yield put(createGetSuperHeroCardsError(e.response));
    }
}
