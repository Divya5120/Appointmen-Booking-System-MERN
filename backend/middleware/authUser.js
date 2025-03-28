import jwt from "jsonwebtoken";

//user auth middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    console.log(token);
    if (!token) {
      return res.json({
        success: false,
        message: "Not authorized,Login again",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export default authUser;
