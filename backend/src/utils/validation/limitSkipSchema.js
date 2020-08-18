import Joi from "@hapi/joi";
import CONSTANTS from "../../constants";

const {GET_CARDS_LIMIT} = CONSTANTS;

export const LIMIT_SKIP_SCHEMA = Joi.object( {
    limit: Joi.number().valid(GET_CARDS_LIMIT),
    skip: Joi.number().integer()
} );

