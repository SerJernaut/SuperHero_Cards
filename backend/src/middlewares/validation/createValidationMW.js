export const createValidationMW = schema =>{

  return async (req, res, next) => {
    try {
      await schema.validateAsync( req.body );
      next();
    } catch (e) {
      next( e );
    }
  };
};