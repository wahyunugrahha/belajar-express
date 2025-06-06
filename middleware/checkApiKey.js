const dotenv = require('dotenv');
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== process.env.APIKEY) {
    return res
      .status(401)
      .json({ message: 'Unauthorized: API key invalid atau tidak ada' });
  }
  next();
};  

module.exports = checkApiKey;
