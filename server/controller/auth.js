const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// 1. Registrations
router.post("/register", async (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
    
  });
  try {
    const emailExist = await User.findOne({ email: req.body.email })
    if(emailExist){
        req.json("Email already Registered.");
    }
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
    // 500 mean server error
  }
});

// Login work
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong passsword or username");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalpassword = bytes.toString(CryptoJS.enc.Utf8);

    originalpassword !== req.body.password &&
      res.status(401).json("Wrong passsword or username");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;
    res.status(200).json({...info,accessToken});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
