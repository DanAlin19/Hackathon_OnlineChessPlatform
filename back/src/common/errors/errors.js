class ResourceNotFoundError extends Error {
    constructor(message, options) {
        super(message, options);
    }
}

class ResourceConflictError extends Error {
    constructor(message, options) {
        super(message, options);
    }
}

class ResourceInvalidError extends Error {
    constructor(message, options) {
        super(message, options);
    }
}

module.exports = {
    ResourceNotFoundError,
    ResourceConflictError,
    ResourceInvalidError
}