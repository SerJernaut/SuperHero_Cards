import * as Yup from 'yup';

import CONSTANTS from '../../../constants/index';

const {
    SUPERHERO_NICKNAME_PATTERN,
    SUPERHERO_REAL_NAME_PATTERN,
    ORIGIN_DESCRIPTION_PATTERN,
    SUPERPOWERS_PATTERN,
    CATCH_PHRASE_PATTERN
} = CONSTANTS


const NICKNAME_PATTERN_MESSAGE = 'Nickname must starts with capital letter and be no longer than 32 characters';
const REAL_NAME_PATTERN_MESSAGE = 'RealName must starts with capital letter and contains at least 2 words separated by a space';
const ORIGIN_DESCRIPTION_PATTERN_MESSAGE = 'Origin description must starts with capital letter and be no longer than 300 symbols';
const SUPERPOWERS_PATTERN_MESSAGE = 'Superpowers must starts with capital letter and be no longer than 300 symbols';
const CATCH_PHRASE_PATTERN_MESSAGE = 'Catch phrase must starts with capital letter and be no longer than 64 symbols';


const nickname = {nickname: Yup.string().label('Nick name').matches(SUPERHERO_NICKNAME_PATTERN, NICKNAME_PATTERN_MESSAGE).required()};
const real_name = {real_name: Yup.string().label('Real name').matches(SUPERHERO_REAL_NAME_PATTERN, REAL_NAME_PATTERN_MESSAGE).required()};
const origin_description = {origin_description: Yup.string().label('Origin description').matches(ORIGIN_DESCRIPTION_PATTERN, ORIGIN_DESCRIPTION_PATTERN_MESSAGE).required()};
const superpowers = {superpowers: Yup.string().label('Super powers').matches(SUPERPOWERS_PATTERN, SUPERPOWERS_PATTERN_MESSAGE).required()};
const catch_phrase = {catch_phrase: Yup.string().label('Catch phrase').matches(CATCH_PHRASE_PATTERN, CATCH_PHRASE_PATTERN_MESSAGE).required()};

const superHeroCardSchema = Yup.object( {
    ...nickname,
    ...real_name,
    ...origin_description,
    ...superpowers,
    ...catch_phrase
} );


export {
    superHeroCardSchema
}
