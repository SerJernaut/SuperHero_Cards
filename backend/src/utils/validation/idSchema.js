import Joi from "@hapi/joi";

export const ID_SCHEMA = Joi.object( {
    id: Joi.number().integer().required()
} );
