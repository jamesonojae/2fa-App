// const utils = require('utils');
const speakEasy = require('speakeasy');

exports.generateSecret = async (req, res) => {
  try {
    const secret = await speakEasy.generateSecret({ length: 20 });
    console.log(secret.base32);
    res.send({ secret: secret.base32 });
  } catch (error) {
    console.log(error);
  }
};

// not neccessary in production
exports.generateToken = async (req, res) => {
  try {
    const time = 30 - Math.floor((new Date().getTime() / 1000.0) % 30);
    const token = await speakEasy.totp({
      secret: req.body.secret,
      encoding: 'base32'
    });
    res.send({ token: token, remaining: time });
  } catch (error) {
    console.log(error);
  }
};

exports.validateToken = async (req, res) => {
  try {
    const validate = await speakEasy.totp.verify({
      secret: req.body.secret,
      encoding: 'base32',
      token: req.body.token,
      window: 0
    });
    res.send({ valid: validate });
  } catch (error) {
    console.log(error);
  }
};
