// My-code
const generateOTP = () => {
     let data = "";
     while (data.length < 6) {
          data += String(Math.floor(Math.random() * 9) + 1)
     }
     return data;
}

// Exports
module.exports = generateOTP;