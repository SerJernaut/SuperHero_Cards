import express from 'express';
import {
    createSuperHeroCardAndSend,
    getCardById,
    getPaginatedCardsAndSend, updateCardById
} from "../controllers/superHeroCardController";
import {createValidationMW} from "../middlewares/validation/createValidationMW";
import {LIMIT_SKIP_SCHEMA} from "../utils/validation/limitSkipSchema";
import {saveCardImage} from "../middlewares/saveCardImage";
import {CREATE_SUPERHERO_SCHEMA, UPDATE_SUPERHERO_SCHEMA} from "../utils/validation/superHeroCardSchema";
import {checkExistingOfCardImage} from "../middlewares/checkExistingOfCardImage";
import {ID_SCHEMA} from "../utils/validation/idSchema";

const superHeroCardRouter = express();

superHeroCardRouter.post('/create_superhero_card',
    createValidationMW(CREATE_SUPERHERO_SCHEMA),
    saveCardImage,
    checkExistingOfCardImage,
    createSuperHeroCardAndSend
    )

superHeroCardRouter.post('/get_paginated_cards',
    createValidationMW(LIMIT_SKIP_SCHEMA),
    getPaginatedCardsAndSend
    )

superHeroCardRouter.post('/update_card_by_id',
    createValidationMW(UPDATE_SUPERHERO_SCHEMA),
    updateCardById
    )

superHeroCardRouter.post('/get_card_by_id',
    createValidationMW(ID_SCHEMA),
    getCardById
    )


export default superHeroCardRouter;