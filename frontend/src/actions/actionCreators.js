import ACTION_TYPE from "./actionTypes";

export const createSuperHeroCardCreationRequest = data => ({
    type: ACTION_TYPE.CREATE_SUPERHERO_CARD_REQUEST,
    data
});

export const createSuperHeroCardCreationSuccess = () => ({
    type: ACTION_TYPE.CREATE_SUPERHERO_CARD_SUCCESS,
});

export const createSuperHeroCardCreationError = error => ({
    type: ACTION_TYPE.CREATE_SUPERHERO_CARD_ERROR,
    error
});

export const createGetSuperHeroCardsRequest = filterObj => ({
    type: ACTION_TYPE.GET_CARDS_REQUEST,
    filterObj
});

export const createGetSuperHeroCardsSuccess = (cards, hasMore) => ({
    type: ACTION_TYPE.GET_CARDS_SUCCESS,
    cards,
    hasMore
});

export const createGetSuperHeroCardsError = error => ({
    type: ACTION_TYPE.GET_CARDS_ERROR,
    error
});


export const createUpdateCardByIdRequest = (id, values) => ({
    type: ACTION_TYPE.UPDATE_CARD_BY_ID_REQUEST,
    id,
    values
});

export const createUpdateCardByIdSuccess = updatedCard => ({
    type: ACTION_TYPE.UPDATE_CARD_BY_ID_SUCCESS,
    updatedCard
});


export const createUpdateCardByIdError = error => ({
    type: ACTION_TYPE.UPDATE_CARD_BY_ID_ERROR,
    error
});

export const createGetCardByIdRequest = id => ({
    type: ACTION_TYPE.GET_CARD_BY_ID_REQUEST,
    id,
});

export const createGetCardByIdSuccess = currentCard => ({
    type: ACTION_TYPE.GET_CARD_BY_ID_SUCCESS,
    currentCard,
});

export const createGetCardByIdError = error => ({
    type: ACTION_TYPE.GET_CARD_BY_ID_ERROR,
    error
});

export const createClearErrorAction = () => ({
    type: ACTION_TYPE.CLEAR_ERROR
})


