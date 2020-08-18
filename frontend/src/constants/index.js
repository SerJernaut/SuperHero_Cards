const CONSTANTS = {
    SUPERHERO_NICKNAME_PATTERN: /^[A-Z][a-zA-Z]{8,32}$/,
    SUPERHERO_REAL_NAME_PATTERN: /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1,}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1,}[a-zA-Z0-9]{1,})$/,
    ORIGIN_DESCRIPTION_PATTERN:  /^[A-Z][a-zA-Z0-9]{8,300}$/,
    SUPERPOWERS_PATTERN: /^[A-Z][a-zA-Z0-9]{8,300}$/,
    CATCH_PHRASE_PATTERN: /^[A-Z][a-zA-Z0-9]{8,60}$/,
    GET_CARDS_LIMIT: 5
};

export default CONSTANTS;