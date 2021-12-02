const User = require("../models/User");

module.exports = {
  userSignUp: async (req, res) => {
    try {
      const newUser = new User(req.body);
      const result = await newUser.save();
      res.json({ status: "OK", userId: result.userId });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
  userSignIn: async (req, res) => {},
  userListAll: async(req,res)=>{},
};
