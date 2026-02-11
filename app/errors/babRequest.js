// My-code
class BadRequest extends Error {
     constructor(message) {
          super(message);
          this.status = 400;
     }
}

// Exports
module.exports = BadRequest;

