import {put} from "redux-saga/effects";
import {
    createGetCardByIdSuccess,
    createGetCardByIdError,
} from "../actions/actionCreators";
import {getSuperHeroCardCardById} from "../api";

export function * getCardByIdSaga (action) {
    try {
        const {id} = action;
        const {data} = yield getSuperHeroCardCardById({id});
        if (data) {
            yield put(createGetCardByIdSuccess(data));
        }
    } catch (e) {
        yield put(createGetCardByIdError(e.response));
    }
}
