const Post = require("../models/User");


exports.getAllUsers= async (req, res, next) => {
  try {
    const [users, _] = await users.findAll(); 
    return  [users, _]
    res.status(200).json({ count: users.length, users });
  } catch (error) {
    next(error);
  }
};

exports.createNewUser = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let user = new User(title, body);

    user = await user.save();

    res.status(201).json({ message: "User created" });
  } catch (error) { require("./routes/userRouters")
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    let userId = req.params.user_id;

    let [user, _] = await Post.findById(userId);

    res.status(200).json({ user: user[0] });
  } catch (error) {
    next(error);
  }
};
