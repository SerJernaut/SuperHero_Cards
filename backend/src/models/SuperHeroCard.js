'use strict';
import CONSTANTS from '../constants';

const {SUPERHERO_NICKNAME_PATTERN, SUPERHERO_REAL_NAME_PATTERN, ORIGIN_DESCRIPTION_PATTERN, SUPERPOWERS_PATTERN, CATCH_PHRASE_PATTERN} = CONSTANTS

const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;

const schema = {
    nickname: {
        type: Schema.Types.String,
        required: true,
        validate: SUPERHERO_NICKNAME_PATTERN,
        unique: true
    },
    real_name: {
        type: Schema.Types.String,
        required: true,
        validate: SUPERHERO_REAL_NAME_PATTERN,
        unique: true
    },
    origin_description:  {
        type: Schema.Types.String,
        required: true,
        validate: ORIGIN_DESCRIPTION_PATTERN,
    },
    superpowers: {
        type: Schema.Types.String,
        required: true,
        validate: SUPERPOWERS_PATTERN,
    },
    catch_phrase: {
        type: Schema.Types.String,
        required: true,
        validate: CATCH_PHRASE_PATTERN,
    },
    image: {
        type: Schema.Types.String,
        required: true,
    }
};


const superHeroSchema = mongoose.Schema(schema, { versionKey: false });
autoIncrement.initialize(mongoose.connection);
superHeroSchema.plugin(autoIncrement.plugin, 'SuperHero');
const SuperHero = mongoose.model('SuperHero', superHeroSchema);


export default SuperHero;
