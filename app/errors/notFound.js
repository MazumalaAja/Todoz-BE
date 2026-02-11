// My-code
class NotFound extends Error {
     constructor(message) {
          super(message);
          this.status = 404;
     }
}

// Exports
module.exports = NotFound;

