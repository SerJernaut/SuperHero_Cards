import {put} from "redux-saga/effects";
import {toast} from 'react-toastify';
import {
    createSuperHeroCardCreationSuccess,
    createSuperHeroCardCreationError
} from "../actions/actionCreators";
import {createSuperHeroCard} from "../api";

export function* createSuperHeroCardSaga(action) {
    try {
        const {data} = yield createSuperHeroCard(action.data);
        if (data) {
            toast.success('Superhero card was created.');
            yield put(createSuperHeroCardCreationSuccess());
        }
    } catch (e) {
        toast.error('Cannot create card, card with same nickname or real name already existing.');
        yield put(createSuperHeroCardCreationError(e.response));
    }
}