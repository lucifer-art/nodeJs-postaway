import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {
  signUp(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = UserModel.signUp(name, email, password);
      res.status(200).send(user);
    } catch (err) {
      console.log("Signup == ", err);
      res.status(500).send("Something went wrong");
    }
  }

  signIn(req, res) {
    const { email, password } = req.body;
    const user = UserModel.signIn(email, password);
    if (!user) {
      return res.status(400).send("Incorrect Credentials");
    } else {
      const token = jwt.sign(
        { userID: user.id, email: user.email },
        "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz",
        { expiresIn: "1h" }
      );
      return res.status(200).send({ token });
    }
  }
}