import Joi from "@hapi/joi";

export const LIMIT_OFFSET_SCHEMA = Joi.object( {
    limit: Joi.number(),
    offset: Joi.number()
} );