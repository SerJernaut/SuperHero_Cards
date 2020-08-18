import Joi from "@hapi/joi";

import CONSTANTS from "../../constants";

const {SUPERPOWERS_PATTERN, CATCH_PHRASE_PATTERN, ORIGIN_DESCRIPTION_PATTERN, SUPERHERO_REAL_NAME_PATTERN, SUPERHERO_NICKNAME_PATTERN} = CONSTANTS;

const superHeroCardSchema = Joi.object( {
    id: Joi.number().integer(),
    nickname: Joi.string().pattern(SUPERHERO_NICKNAME_PATTERN),
    real_name: Joi.string().pattern(SUPERHERO_REAL_NAME_PATTERN),
    origin_description: Joi.string().pattern(ORIGIN_DESCRIPTION_PATTERN),
    superpowers: Joi.string().pattern(SUPERPOWERS_PATTERN),
    catch_phrase: Joi.string().pattern(CATCH_PHRASE_PATTERN),
    image: Joi.any()
} );

export const UPDATE_SUPERHERO_SCHEMA = superHeroCardSchema.and(...['id']);

export const CREATE_SUPERHERO_SCHEMA = superHeroCardSchema.and(...
    ['nickName',
    'real_name',
    'origin_description',
    'superpowers',
    'catch_phrase',
    'image'
])


