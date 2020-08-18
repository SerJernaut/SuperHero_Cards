import {put} from "redux-saga/effects";
import {
   createUpdateCardByIdSuccess,
    createUpdateCardByIdError
} from "../actions/actionCreators";
import {updateCardById} from "../api";

export function * updateCardByIdSaga (action) {
    try {
        const {id, values} = action;
        const {data} = yield updateCardById({id, ...values});
        if (data) {
            yield put(createUpdateCardByIdSuccess(data));
        }
    } catch (e) {
        yield put(createUpdateCardByIdError(e.response));
    }
}
