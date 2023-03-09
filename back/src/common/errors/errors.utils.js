const ValidationError = require("joi").ValidationError;
const errors = require("./errors")

function parseJoiValidationErrors(err) {
  return err.reduce((accumulator, current) => {
    let field = current.context.key;
    if (!accumulator[field]) accumulator[field] = [];
    accumulator[field].push(current.message);
    return accumulator;
  }, {});
}

function errorHandler(e, req, res, next) {
  if (e instanceof ValidationError) {
    res.status(400).send(parseJoiValidationErrors(e.details));
  } else if (e instanceof errors.ResourceConflictError) {
    res.status(409).send({ message: e.message});
  } else if (e instanceof errors.ResourceNotFoundError) {
    res.status(404).send({ message: e.message});
  } else if (e instanceof errors.ResourceInvalidError) {
    res.status(400).send({ message: e.message});
  } else {
    console.error(e);
    res.status(500).send({ message: "Internal error" });
  }
}

module.exports = {
  errorHandler
}