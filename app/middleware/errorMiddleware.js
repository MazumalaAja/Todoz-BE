// My-code
function errorMiddleware(err, req, res, next) {
     const errorObject = {
          status: err.status || 500,
          message: err.message || `INTERNAL SERVER ERROR`
     }

     const { status, message } = errorObject;
     return res.status(status || 500).json({
          code: `${status}`,
          message: `${message}`
     })
}

// Exports
module.exports = errorMiddleware;